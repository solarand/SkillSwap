import LabelSrocho from "@/components/ui/span/srochno";
import type { IService } from "@/utils/types/serviceType";

const ServiceCard = ({
  name,
  rating,
  description,
  category,
  srochno,
  location,
  title,
  reviews,
}: IService) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-3 sm:p-4 flex flex-col gap-2 sm:gap-3 relative">
      {srochno && <LabelSrocho />}
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-300 rounded-full" />{" "}
        <div>
          <span className="text-sm font-medium text-gray-800">{name}</span>
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-sm text-yellow-500">{rating}</span>{" "}
            <span className="text-sm text-gray-600">
              ({`${reviews} отзыва`})
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
