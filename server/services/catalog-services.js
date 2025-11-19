const pool = require("../db");
const CatalogDto = require("../dtos/catalog-dto");

class CatalogService {
  async getServices(id, params) {
    const services = await pool.query(
      `SELECT *
      FROM services
      WHERE user_id != $1
      ORDER BY created_at DESC`,
      [id]
    );
    const resData = [];
    for (const service of services.rows) {
      const user = (
        await pool.query("SELECT * FROM users WHERE id = $1", [service.user_id])
      ).rows[0];
      const cntReviews = (
        await pool.query("SELECT * FROM reviews WHERE target_id = $1", [
          service.id,
        ])
      ).rowCount;
      const catalogDto = new CatalogDto(service, user, cntReviews);
      resData.push(catalogDto);
    }
    const totalServices = resData.length;
    const pages = Math.ceil(totalServices / 6);

    return {
      total: totalServices,
      pages,
      data: resData.slice((params.page - 1) * 6, params.page * 6),
    };
  }
}

module.exports = new CatalogService();
