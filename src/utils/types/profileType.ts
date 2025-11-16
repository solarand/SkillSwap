export interface IHistoryCard {
  title: string;
  description: string;
  category: string;
  date: string;
  status: "Завершен" | "В процессе" | "Отменен";
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
  id: string;
  name: string;
  surname: string;
  avatar: string;
  skills?: string[];
  rating: number;
  completedProjects: number;
  email: string;
  bio?: string;
  createdAt: string;
}

export interface ProfileInfoCard {
  name: string;
  surname: string;
  email: string;
  description: string;
  skills: string[];
}
