const servicesService = require("../services/services-service");

class ServicesController {
  async getUserServices(req, res, next) {
    try {
      const userId = req.user.id;
      const services = await servicesService.getUserServices(userId);
      return res.json(services);
    } catch (error) {
      next(error);
    }
  }
  async addService(req, res, next) {
    try {
      const service = req.body;
      const userId = req.user.id;

      await servicesService.createService(userId, service);
      return res.json({ status: 200, message: "Услуга создана!" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ServicesController();
