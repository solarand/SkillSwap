const pool = require("../db");
const CatalogDto = require("../dtos/catalog-dto");
const formatDate = require("../helpers/formatData");

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

    const filter = JSON.parse(params.filter);
    const isFilter = Object.keys(filter).length > 0;

    let filteredData = [...resData];

    if (isFilter) {
      // Фильтрация по категории
      if (filter.category && filter.category.length > 0) {
        filteredData = filteredData.filter((service) =>
          filter.category.includes(service.category)
        );
      }

      // Фильтрация по локации
      if (filter.location) {
        if (filter.location === "Онлайн") {
          filteredData = filteredData.filter((service) =>
            service.location.includes("Онлайн")
          );
        } else if (filter.location === "Оффлайн") {
          filteredData = filteredData.filter((service) =>
            service.location.includes("Оффлайн")
          );
        }
      }

      // Фильтрация по городу
      if (filter.city) {
        filteredData = filteredData.filter((service) =>
          service.location.toLowerCase().includes(filter.city.toLowerCase())
        );
      }

      // Фильтрация по рейтингу
      if (filter.rating && filter.rating.length > 0) {
        filteredData = filteredData.filter((service) => {
          const serviceRating = parseFloat(service.rating);
          const serviceReviews = service.reviews;

          return filter.rating.some((ratingFilter) => {
            if (ratingFilter === "4★ и выше") {
              return serviceRating >= 4;
            }
            if (ratingFilter === "Только с отзывами") {
              return serviceReviews > 0;
            }
            if (ratingFilter === "Новые пользователи (без рейтинга)") {
              return serviceRating === 0 && serviceReviews === 0;
            }
            return true;
          });
        });
      }

      // Фильтрация по дате
      if (filter.date && filter.date !== "all") {
        filteredData = filteredData.filter((service) => {
          const formattedDate = formatDate(service.createdAt);

          if (filter.date === "Сегодня") {
            return formattedDate === "Сегодня";
          } else if (filter.date === "Вчера") {
            return formattedDate === "Вчера";
          }
          return true;
        });
      }
    }

    const totalServices = filteredData.length;
    const pages = Math.ceil(totalServices / 6);

    let sortedData = [...filteredData];

    if (params.sort === "newest") {
      sortedData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (params.sort === "oldest") {
      sortedData.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    } else if (params.sort === "rating") {
      sortedData.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    } else if (params.sort === "reviews") {
      sortedData.sort((a, b) => b.reviews - a.reviews);
    }

    return {
      total: totalServices,
      pages,
      data: sortedData.slice((params.page - 1) * 6, params.page * 6),
    };
  }
}

module.exports = new CatalogService();
