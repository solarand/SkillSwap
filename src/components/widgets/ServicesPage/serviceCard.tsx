import type { ICatalogService } from "@/utils/types/serviceType";
import { Star } from "lucide-react";

const ServiceCard = ({
  name,
  rating,
  description,
  category,
  location,
  title,
  reviews,
}: ICatalogService) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-3 sm:p-4 flex flex-col gap-2 sm:gap-3 relative">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-300 rounded-full" />{" "}
        <div>
          <span className="text-sm font-medium text-gray-800">{name}</span>
          <div className="flex items-center gap-1">
            <span className="text-sm text-gray-900 flex items-center gap-1">
              <Star className="w-3 h-3 stroke-amber-400 fill-amber-400" />{" "}
              {rating}
            </span>
            <span className="text-gray-400">·</span>
            <span className="text-sm text-gray-400">
              ({`${reviews} отзыва`}){" "}
            </span>{" "}
          </div>
        </div>
      </div>
      <span
        className={`text-sm ${location === "Онлайн" ? "text-green-600" : "text-red-600"}`}
      >
        {location}
      </span>
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      <span className="text-sm text-gray-600">Категория: {category}</span>
      <p className="text-sm text-gray-600">{description}</p>
      <button className="mt-auto px-3 sm:px-4 py-1 sm:py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 cursor-pointer">
        Предложить обмен
      </button>
    </div>
  );
};

export default ServiceCard;
