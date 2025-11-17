import type { ICatalogService } from "../types/serviceType";

export const categories = [
  "IT",
  "Дизайн",
  "Маркетинг",
  "Копирайтинг",
  "Обучение",
  "Фото-видео",
  "Ремонт",
  "Красота",
  "Здоровье",
  "Другое",
];
export const rating = [
  "★★★★☆ и выше",
  "Только с отзывами",
  "Новые пользователи (без рейтинга)",
];

export const services: ICatalogService[] = [
  {
    id: "1",
    name: "Иван Иванов",
    rating: "4.2",
    reviews: 32,
    location: "Онлайн",
    title: "Создание веб-сайта",
    category: "IT",
    description: "Адаптивный дизайн и разработка",
  },
  {
    id: "2",
    name: "Мария Петрова",
    rating: "3.4",
    reviews: 15,
    location: "Оффлайн (Москва)",
    title: "Дизайн логотипа",
    category: "Дизайн",
    description: "Уникальный брендовый логотип",
  },
  {
    id: "3",
    name: "Алексей Смирнов",
    rating: "5",
    reviews: 45,
    location: "Онлайн",
    title: "Тестирование ПО",
    category: "IT",
    description: "Полное тестирование на ошибки",
  },
];
