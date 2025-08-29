module.exports = class UserDto {
  email;
  id;
  name;
  surname;
  rating;
  avatar;
  bio;
  completed_projects;

  constructor(model) {
    this.id = model.id;
    this.email = model.email;
    this.name = model.first_name;
    this.surname = model.last_name;
    this.rating = model.rating;
    this.avatar = model.avatar;
    this.bio = model.bio;
    this.completed_projects = model.completed_projects;
  }
};
