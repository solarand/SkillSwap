const pool = require("../db");

class ServicesService {
  async getUserServices(user_id) {
    const services = await pool.query(
      "SELECT * FROM services WHERE user_id=$1",
      [user_id]
    );
    return services.rows ?? [];
  }
}

module.exports = new ServicesService();
