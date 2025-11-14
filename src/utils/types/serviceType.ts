export interface FilterFormValues {
  category: string[];
  location: string;
  rating: string[];
  sroch: string;
  city: string;
}

export interface ICatalogService {
  id: string;
  name: string;
  rating: string;
  reviews: number;
  location: string;
  title: string;
  category: string;
  description: string;
  srochno: boolean;
}

export interface IService {
  id: string;
  user_id: string;
  title: string;
  category: string;
  description: string;
  status: "active" | "paused" | "completed" | "draft";
  is_completed: boolean;
  is_urgent?: boolean;
  location?: "online" | "offline";
  created_at: string;
  city?: string;
}
