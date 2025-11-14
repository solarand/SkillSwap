const servicesService = require("../services/services-service");

class ServicesController {
  async getUserServices(req, res, next) {
    try {
      const { userId } = req.query;
      const services = await servicesService.getUserServices(userId);
      return res.json(services);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ServicesController();
