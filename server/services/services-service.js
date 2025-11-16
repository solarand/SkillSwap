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

    const newData = await pool.query(
      `SELECT * FROM services WHERE user_id=$1`,
      [userId]
    );

    return newData.rows;
  }
  async deleteService(serviceId) {
    await pool.query(
      `
            DELETE FROM services WHERE id=$1
        `,
      [serviceId]
    );
  }
  async updateService(serviceId, service) {
    const { title, description, category, location, city, status } = service;

    await pool.query(
      `
            UPDATE services SET title=$1, description=$2, category=$3, location=$4, city=$5, status=$6 WHERE id=$7
        `,
      [title, description, category, location, city, status, serviceId]
    );
  }
}

module.exports = new ServicesService();
