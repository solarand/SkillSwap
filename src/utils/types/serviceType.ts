export interface FilterFormValues {
  category: string[];
  location: string;
  rating: string[];
  sroch: string;
  city: string;
}

export interface IService {
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
