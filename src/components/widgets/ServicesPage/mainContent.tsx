import FilterChips from "./filterChips";
import Pagination from "./pagination";
import ServiceCard from "./serviceCard";
import SortAndSearch from "./sortAndSearch";

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

const MainContent = () => {
  const services: IService[] = [
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

  return (
    <main className="w-full min-h-[calc(100vh-67px)] md:w-4/5 p-4 md:p-6 relative">
      <div className="mb-2 text-sm text-gray-600">Найдено: 3 варианта</div>

      <SortAndSearch />
      <FilterChips />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((el) => (
          <ServiceCard key={el.id} {...el} />
        ))}
      </div>
      {/* Компонент: Pagination - пагинация */}
      <Pagination />
    </main>
  );
};

export default MainContent;
