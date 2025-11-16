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

      const data = await servicesService.createService(userId, service);
      return res.json({ status: 200, message: "Услуга создана!", data: data });
    } catch (error) {
      next(error);
    }
  }

  async deleteService(req, res, next) {
    try {
      const { serviceId } = req.params;
      await servicesService.deleteService(serviceId);
      return res.json({ status: 200, message: "Услуга удалена!" });
    } catch (error) {
      next(error);
    }
  }

  async updateService(req, res, next) {
    try {
      const { serviceId } = req.params;
      const serviceData = req.body;
      await servicesService.updateService(serviceId, serviceData);
      return res.json({ status: 200, message: "Услуга обновлена!" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ServicesController();
