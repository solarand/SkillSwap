const pool = require("../db");
const ApiErorr = require("../exceptions/api-error");
const userService = require("../services/user-service");

class UserController {
  async updateAvatar(req, res, next) {
    try {
      const { avatar, id } = req.body;

      const user = await userService.updateAvatar(id, avatar);

      return res.json({ user: user, msg: "Аватар успешно обновлен!" });
    } catch (error) {
      next(error);
    }
  }

  async updateInfo(req, res, next) {
    try {
      const { id, data } = req.body;
      const response = await userService.updateInfo(id, data);

      return res.json({ status: 200, msg: response });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
