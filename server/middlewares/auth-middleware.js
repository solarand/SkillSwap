const ApiErorr = require("../exceptions/api-error");
const tokenServices = require("../services/token-services");

module.exports = function (req, res, next) {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      next(ApiErorr.UnathorizedError());
    }

    const token = authorizationHeader.split(" ")[1];
    if (!token) {
      next(ApiErorr.UnathorizedError());
    }

    const userData = tokenServices.validateAccess(token);
    if (!userData) {
      next(ApiErorr.UnathorizedError());
    }

    req.user = userData;
    next();
  } catch (error) {
    next(ApiErorr.UnathorizedError());
  }
};
