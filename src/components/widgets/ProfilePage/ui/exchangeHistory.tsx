import { Filter } from "lucide-react";
import HistoryCard, { type HistoryCardProps } from "./historyCard";

export const ExchangeHistory = () => {
  const exchangeHistory: HistoryCardProps[] = [
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

  return (
    <div className="border-2 bg-white border-gray-200 rounded-xl w-screen min-[1280px]:w-full max-[880px]:h-full mt-5 h-[700px] p-5 relative">
      <button className="absolute top-5 right-5 flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors cursor-pointer">
        <Filter className="h-4 w-4" />
        Фильтр
      </button>

      <h1 className="text-2xl font-bold mt-2 max-[500px]:text-xl">
        История обменов
      </h1>

      <div className="mt-5 flex flex-col gap-4">
        {exchangeHistory.map((el) => (
          <HistoryCard key={el.title} {...el} />
        ))}
      </div>
    </div>
  );
};
