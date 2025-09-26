const jwt = require("jsonwebtoken");
const pool = require("../db");
require("dotenv").config();

class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_KEY, {
      expiresIn: "15m",
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_KEY, {
      expiresIn: "30d",
    });
    return {
      accessToken,
      refreshToken,
    };
  }

  async saveToken(userId, refreshToken) {
    const existingToken = await pool.query(
      "SELECT * FROM refresh_tokens WHERE user_id = $1",
      [userId]
    );

    if (existingToken.rowCount > 0) {
      return await pool.query(
        "UPDATE refresh_tokens SET token = $1 WHERE user_id = $2",
        [refreshToken, userId]
      );
    } else {
      return await pool.query(
        "INSERT INTO refresh_tokens (user_id, token) VALUES ($1, $2)",
        [userId, refreshToken]
      );
    }
  }

  validateRefresh(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_REFRESH_KEY);
      return userData;
    } catch (e) {
      return null;
    }
  }

  validateAccess(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS_KEY);
      return userData;
    } catch (e) {
      return null;
    }
  }
}

module.exports = new TokenService();
