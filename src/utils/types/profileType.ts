export interface IHistoryCard {
  title: string;
  description: string;
  category: string;
  date: string;
  status: "Завершен" | "В процессе" | "Отменен";
}

export interface ServiceCard {
  title: string;
  description: string;
  category: string;
  exchangeOffers?: number;
  status?: "Поиск партнера" | "Ожидание подтверждения" | "Выполнение";
  isUrgent?: boolean;
  location?: string;
  city?: string;
}

export interface IService {
  title: string;
  description: string;
  category: string;
  isUrgent?: boolean;
  location?: "Оффлайн" | "Онлайн";
  city?: string;
}

export interface ProfileFormData {
  name: string;
  surname: string;
  email: string;
  description: string;
  skills: string[];
}

export interface IUser {
  id: number;
  name: string;
  surname: string;
  avatar: string;
  skills?: string[];
  rating: number;
  completedProjects: number;
  email: string;
  description?: string;
}

export interface ProfileInfoCard {
  name: string;
  surname: string;
  email: string;
  description: string;
  skills: string[];
}
