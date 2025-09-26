import type { IHistoryCard } from "../types/profileType";

export const cityOptions = [
  { value: "Москва", label: "Москва" },
  { value: "Санкт-Петербург", label: "Санкт-Петербург" },
  { value: "Новосибирск", label: "Новосибирск" },
  { value: "Екатеринбург", label: "Екатеринбург" },
  { value: "Казань", label: "Казань" },
  { value: "Нижний Новгород", label: "Нижний Новгород" },
  { value: "Челябинск", label: "Челябинск" },
  { value: "Самара", label: "Самара" },
  { value: "Омск", label: "Омск" },
  { value: "Ростов-на-Дону", label: "Ростов-на-Дону" },
];

export const initialHistory: IHistoryCard[] = [
  {
    title: "Разработка веб-приложения",
    description: "Обмен услуг с дизайнером на создание UI/UX прототипа.",
    category: "Веб-разработка",
    status: "Завершен",
    date: "10 августа 2025",
  },
  {
    title: "UI/UX дизайн",
    description: "Обмен на разработку landing page для портфолио.",
    category: "Дизайн",
    status: "В процессе",
    date: "12 августа 2025",
  },
  {
    title: "Оптимизация производительности",
    description: "Обмен на тестирование API, отменен по инициативе партнера.",
    category: "Веб-разработка",
    status: "Отменен",
    date: "8 августа 2025",
  },
];

export const statuses = [
  { value: "all", label: "Все", id: "status-all" },
  { value: "completed", label: "Завершен", id: "status-completed" },
  { value: "in-progress", label: "В процессе", id: "status-in-progress" },
  { value: "cancelled", label: "Отменен", id: "status-cancelled" },
];

export const MonthsOfNumber = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];
