module.exports = class CatalogDto {
  id;
  userId;
  name;
  rating;
  reviews;
  location;
  title;
  category;
  description;
  avatar;

  constructor(service, user, cntReviews) {
    this.id = service.id;
    this.userId = service.user_id;
    this.name = `${user.first_name} ${user.last_name}`;
    this.rating = user.rating;
    this.reviews = cntReviews;
    this.location = `${service.location} (${service.city})`;
    this.title = service.title;
    this.category = service.category;
    this.description = service.description;
    this.avatar = user.avatar;
  }
};
