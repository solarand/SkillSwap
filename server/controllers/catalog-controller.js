const catalogServices = require("../services/catalog-services");

class CatalogController {
  async getServices(req, res, next) {
    try {
      const userId = req.user.id;
      const params = req.query;
      const services = await catalogServices.getServices(userId, params);
      return res.json(services);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CatalogController();
