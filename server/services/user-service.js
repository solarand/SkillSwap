const pool = require("../db");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const tokenService = require("../services/token-services");
const UserDto = require("../dtos/user-dto");
const ApiErorr = require("../exceptions/api-error");
const path = require("path");
const fs = require("fs").promises;
require("dotenv").config();

class UserService {
  async regestration(email, password, name, surname) {
    const candidate = await pool.query(
      "SELECT 1 FROM users WHERE email = $1 LIMIT 1",
      [email]
    );
    if (candidate.rowCount > 0) {
      throw ApiErorr.BadRequest(
        "Пользователь с таким email уже зарегестрирован"
      );
    }

    const hashPasword = await bcrypt.hash(password, 3);
    const id = uuid.v4();
    const user = await pool.query(
      "INSERT INTO users (id, email,password_hash, first_name, last_name) VALUES ($1, $2, $3, $4, $5) RETURNING id, email, first_name, last_name, rating, avatar, bio, created_at, completed_projects",
      [id, email, hashPasword, name, surname]
    );

    const userDto = new UserDto(user.rows[0]);
    const tokens = tokenService.generateToken({ ...userDto });
    await tokenService.saveToken(id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async login(email, password) {
    const user = await pool.query(
      "SELECT * FROM users WHERE email = $1 LIMIT 1",
      [email]
    );
    if (user.rowCount === 0) {
      throw ApiErorr.BadRequest(
        "Пользователь с таким email не зарегестрирован",
        ["email"]
      );
    }

    const isPassword = await bcrypt.compare(
      password,
      user.rows[0].password_hash
    );

    if (!isPassword) {
      throw ApiErorr.BadRequest("Неверный пароль", ["password"]);
    }

    const userDto = new UserDto(user.rows[0]);
    const tokens = tokenService.generateToken({ ...userDto });
    await tokenService.saveToken(user.rows[0].id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async logout(refreshToken) {
    const token = await pool.query(
      "DELETE FROM refresh_tokens WHERE token=$1",
      [refreshToken]
    );
    return token;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiErorr.UnathorizedError();
    }
    const validateToken = tokenService.validateRefresh(refreshToken);
    const dbToken = await pool.query(
      "SELECT * FROM refresh_tokens WHERE token=$1",
      [refreshToken]
    );

    if (!validateToken || dbToken.rowCount !== 1) {
      throw ApiErorr.UnathorizedError();
    }

    const id = dbToken.rows[0].user_id;
    const user = await pool.query("SELECT * FROM users WHERE id=$1", [id]);
    const userDto = new UserDto(user.rows[0]);
    const tokens = tokenService.generateToken({ ...userDto });
    await tokenService.saveToken(user.rows[0].id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async updateAvatar(id, avatarDataUrl) {
    let oldAvatarFileName = null;

    try {
      const userResult = await pool.query(
        "SELECT avatar FROM users WHERE id = $1",
        [id]
      );

      oldAvatarFileName = userResult.rows[0]?.avatar;

      const matches = avatarDataUrl.match(
        /^data:image\/([A-Za-z-+\/]+);base64,(.+)$/
      );
      if (!matches) {
        throw new Error("Invalid Data URL format");
      }

      const format = matches[1];
      const base64Data = matches[2];
      const buffer = Buffer.from(base64Data, "base64");

      const FileName = uuid.v4() + `.${format}`;
      const filePath = path.resolve(__dirname, "..", "static", FileName);

      await fs.writeFile(filePath, buffer);

      const user = await pool.query(
        "UPDATE users SET avatar=$1 WHERE id=$2 RETURNING avatar",
        [FileName, id]
      );

      if (oldAvatarFileName !== "default_logo.png") {
        const oldAvatarPath = path.resolve(
          __dirname,
          "..",
          "static",
          oldAvatarFileName
        );
        try {
          await fs.unlink(oldAvatarPath);
        } catch (deleteError) {
          console.warn(
            "Не удалось удалить старый аватар:",
            deleteError.message
          );
        }
      }

      return user.rows[0].avatar;
    } catch (error) {
      console.error("Error updating avatar:", error);

      if (oldAvatarFileName) {
        await pool.query("UPDATE users SET avatar=$1 WHERE id=$2", [
          oldAvatarFileName,
          id,
        ]);
      }

      throw error;
    }
  }

  async updateInfo(id, data) {
    const query =
      "UPDATE users SET first_name = $1, last_name = $2, email = $3, bio = $4, skills = $5 WHERE id = $6;";
    const result = await pool.query(query, [
      data.name,
      data.surname,
      data.email,
      data.description,
      data.skills,
      id,
    ]);

    return "Данные успешно обновлены!";
  }
}

module.exports = new UserService();
