const pool = require("../db");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const tokenService = require("../services/token-services");
const UserDto = require("../dtos/user-dto");
const ApiErorr = require("../exceptions/api-error");
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
}

module.exports = new UserService();
