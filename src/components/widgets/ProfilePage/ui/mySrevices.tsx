import { Plus } from "lucide-react";
import ServiseCard from "./serviseCard";
import { type ServiseCardProps } from "./serviseCard";

export const MyServices = () => {
  const services: ServiseCardProps[] = [
    {
      title: "Разработка веб-приложений",
      description:
        "Создание современных веб-приложений с использованием React и TypeScript.",
      category: "Веб-разработка",
      status: "Поиск партнера",
      exchangeOffers: 0,
    },
    {
      title: "UI/UX дизайн",
      description:
        "Дизайн интерфейсов и прототипов для мобильных и веб-приложений.",
      category: "Дизайн",
      status: "Ожидание подтверждения",
      exchangeOffers: 3,
    },
    {
      title: "Оптимизация производительности",
      description:
        "Улучшение скорости загрузки и производительности веб-приложений.",
      category: "Веб-разработка",
      status: "Выполнение",
      exchangeOffers: 0,
    },
  ];

  return (
    <div className="border-2 bg-white border-gray-200 rounded-xl w-screen min-[1280px]:w-full max-[880px]:h-full mt-5 h-[700px] p-5 relative">
      {/* Кнопка добавления услуги в правом верхнем углу */}
      <button className="absolute top-5 right-5 flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors cursor-pointer">
        <Plus className="h-4 w-4" />
        Добавить
      </button>

      <h1 className="text-2xl font-bold mt-2 max-[500px]:text-xl">
        Мои услуги
      </h1>

      {/* Список услуг */}
      <div className="mt-5 flex flex-col gap-4">
        {services.map((service) => (
          <ServiseCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  );
};
