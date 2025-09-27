const pool = require("../db");
const ApiErorr = require("../exceptions/api-error");
const userService = require("../services/user-service");

class UserController {
  async updateAvatar(req, res, next) {
    const { avatar, id } = req.body;

    const user = await userService.updateAvatar(id, avatar);

    return res.json({ user });
  }
}

module.exports = new UserController();
