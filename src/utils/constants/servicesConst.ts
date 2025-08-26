import type { IService } from "../types/serviceType";

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

export const services: IService[] = [
  {
    id: "1",
    name: "Иван Иванов",
    rating: "★★★★☆",
    reviews: 32,
    location: "Онлайн",
    title: "Создание веб-сайта",
    category: "IT",
    description: "Адаптивный дизайн и разработка",
    srochno: true,
  },
  {
    id: "2",
    name: "Мария Петрова",
    rating: "★★★☆☆",
    reviews: 15,
    location: "Оффлайн (Москва)",
    title: "Дизайн логотипа",
    category: "Дизайн",
    description: "Уникальный брендовый логотип",
    srochno: false,
  },
  {
    id: "3",
    name: "Алексей Смирнов",
    rating: "★★★★★",
    reviews: 45,
    location: "Онлайн",
    title: "Тестирование ПО",
    category: "IT",
    description: "Полное тестирование на ошибки",
    srochno: false,
  },
];
