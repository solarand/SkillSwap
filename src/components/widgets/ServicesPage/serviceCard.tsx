import Avatar from "@/components/ui/avatar";
import { formatDate } from "@/utils/helpers/formatData";
import { getReviewsText } from "@/utils/helpers/pluralize";
import type { ICatalogService } from "@/utils/types/serviceType";
import { Calendar, Star } from "lucide-react";

const ServiceCard = ({
  name,
  rating,
  description,
  category,
  location,
  title,
  reviews,
  avatar,
  createdAt,
}: ICatalogService) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-3 sm:p-4 flex flex-col gap-2 sm:gap-3 relative">
      <div className="flex items-center gap-2 sm:gap-3 hover:bg-gray-50 transition-all cursor-pointer hover:rounded-xl hover:p-1">
        <Avatar avatar={avatar} />
        <div>
          <span className="text-sm font-medium text-gray-800">{name}</span>
          <div className="flex items-center gap-1">
            <span className="text-sm text-gray-900 flex items-center gap-1">
              <Star className="w-3 h-3 stroke-amber-400 fill-amber-400" />{" "}
              {rating}
            </span>
            <span className="text-gray-400">·</span>
            <span className="text-sm text-gray-400">
              ({getReviewsText(Number(reviews))}){" "}
            </span>{" "}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1 text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
        <Calendar className="w-3 h-3" />
        <span>Дата публикации: {formatDate(createdAt)}</span>
      </div>
      <span
        className={`text-sm ${location.split(" ")[0] === "Онлайн" ? "text-green-600" : "text-red-600"}`}
      >
        {location.split(" ")[0] === "Онлайн"
          ? location.split(" ")[0]
          : location}
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
