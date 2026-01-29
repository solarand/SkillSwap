export interface FilterFormValues {
  category: string[];
  location: string;
  rating: string[];
  city: string;
  date: string;
}

export interface ICatalogService {
  id: string;
  userId: string;
  name: string;
  rating: string;
  reviews: number;
  location: string;
  title: string;
  category: string;
  description: string;
  avatar: string;
  createdAt: string;
}

export interface IGetForCatalog {
  total: number;
  data: ICatalogService[];
  pages: number;
}

export interface IService {
  id: string;
  user_id: string;
  title: string;
  category: string;
  description: string;
  exchangeOffers?: number;
  status?: "Поиск партнера" | "Ожидание подтверждения" | "Выполнение";
  is_completed: boolean;
  location?: "Онлайн" | "Оффлайн";
  created_at: string;
  city?: string;
}

export interface IGetServices {
  page?: number;
  filter?: string;
  sort?: string;
  search?: string;
}
