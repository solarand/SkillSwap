const pool = require("../db");
const uuid = require("uuid");

class ServicesService {
  async getUserServices(user_id) {
    const services = await pool.query(
      "SELECT * FROM services WHERE user_id=$1",
      [user_id]
    );
    const resData = services.rowCount > 0 ? services.rows : [];
    return resData;
  }
  async createService(userId, service) {
    const { title, description, category, location, city, status } = service;
    const serviceId = uuid.v4();

    await pool.query(
      `
            INSERT INTO services (
                id, user_id, title, description, category, location, city, status
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
            
        `,
      [serviceId, userId, title, description, category, location, city, status]
    );
  }
}

module.exports = new ServicesService();
