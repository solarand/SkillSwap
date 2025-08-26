import { Info } from "lucide-react";
import type { HistoryCard } from "@/utils/types/profileType";

const HistoryCard = ({
  title,
  description,
  category,
  date,
  status,
}: HistoryCard) => {
  function getStyle() {
    if (status === "Завершен") {
      return "bg-green-100 text-green-800";
    } else if (status === "В процессе") {
      return "bg-yellow-100 text-yellow-800";
    } else {
      return "bg-red-100 text-red-800";
    }
  }
  return (
    <>
      <div className="border border-gray-200 rounded-lg p-4 flex flex-col min-[870px]:flex-row gap-4">
        <div className="flex-1">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-gray-600 mt-1">{description} </p>
          <p className="text-sm text-gray-500 mt-1">Категория: {category}</p>
          <p className="text-sm mt-2">
            <span className={`inline-block px-2 py-1 ${getStyle()} rounded-md`}>
              {status}
            </span>
          </p>
          <p className="text-sm text-gray-600 mt-2">Дата: {date}</p>
        </div>
        <div className="flex items-center gap-2 min-[870px]:items-end">
          <button className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors cursor-pointer">
            <Info className="h-4 w-4" />
            Подробности
          </button>
        </div>
      </div>
    </>
  );
};

export default HistoryCard;
