import LabelSrocho from "@/components/ui/span/srochno";
import { Check, Edit, Eye, Info, Trash2 } from "lucide-react";
import type { ServiceCard } from "@/utils/types/profileType";

const ServiseCard = ({
  title,
  description,
  category,
  exchangeOffers = 0,
  status,
  location,
  isUrgent = false,
  city = "",
}: ServiceCard) => {
  return (
    <>
      {status === "Поиск партнера" && (
        <div className="border border-gray-200 rounded-lg p-4 flex flex-col min-[870px]:flex-row gap-4 relative">
          <div className="flex-1">
            {isUrgent && <LabelSrocho />}
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-gray-600 mt-1">{description}</p>
            <p className="text-sm text-gray-500 mt-1">Категория: {category}</p>
            <span
              className={`text-sm ${location === "Онлайн" ? "text-green-600" : "text-red-600"}`}
            >
              {location === "Онлайн" ? "Онлайн" : `Оффлайн(${city})`}
            </span>{" "}
            <p className="text-sm mt-2">
              <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-md">
                Поиск партнера
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2 min-[870px]:items-end">
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
              <Edit className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-red-600 transition-colors cursor-pointer">
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
      {status === "Ожидание подтверждения" && (
        <div className="border border-gray-200 rounded-lg p-4 flex flex-col min-[870px]:flex-row gap-4 relative">
          <div className="flex-1">
            {isUrgent && <LabelSrocho />}
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-gray-600 mt-1">{description}</p>
            <p className="text-sm text-gray-500 mt-1">Категория: {category}</p>
            <span
              className={`text-sm ${location === "Онлайн" ? "text-green-600" : "text-red-600"}`}
            >
              {location === "Онлайн" ? "Онлайн" : `Оффлайн(${city})`}
            </span>{" "}
            <p className="text-sm mt-2">
              <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 rounded-md">
                Ожидание подтверждения
              </span>
            </p>
            <p className="text-sm mt-2">
              <span className="text-gray-600">
                Предложено обменов: {exchangeOffers}
              </span>
            </p>
          </div>
          <div className="flex items-center flex-wrap gap-2 min-[870px]:items-end">
            <button className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors cursor-pointer">
              <Eye className="h-4 w-4" />
              Посмотреть
            </button>
            <button className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-md hover:bg-green-200 transition-colors cursor-pointer">
              <Check className="h-4 w-4" />
              Подтвердить
            </button>
          </div>
        </div>
      )}

      {status === "Выполнение" && (
        <div className="border border-gray-200 rounded-lg p-4 flex flex-col min-[870px]:flex-row gap-4 relative">
          <div className="flex-1">
            {isUrgent && <LabelSrocho />}
            <h2 className="text-lg font-semibold">{title} </h2>
            <p className="text-gray-600 mt-1">{description} </p>
            <p className="text-sm text-gray-500 mt-1">Категория: {category}</p>
            <span
              className={`text-sm ${location === "Онлайн" ? "text-green-600" : "text-red-600"}`}
            >
              {location === "Онлайн" ? "Онлайн" : `Оффлайн(${city})`}
            </span>{" "}
            <p className="text-sm mt-2">
              <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-md">
                Выполнение
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2 min-[870px]:items-end">
            <button className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors cursor-pointer">
              <Info className="h-4 w-4" />
              Подробности
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiseCard;
