import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FilterSection = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <aside
      className={`w-full md:w-1/5 bg-white p-4 md:p-6 border-r border-gray-200 md:h-full md:overflow-y-auto ${filterOpen ? "" : "overflow-y-hidden h-12"}`}
    >
      <div className="mb-6">
        <div className="flex justify-between">
          <h2 className="text-lg font-medium text-gray-800 mb-8 mt-[-5px]">
            Фильтры
          </h2>
          {filterOpen ? (
            <ChevronUp
              className="stroke-2 w-4 h-4 text-gray-600 md:hidden"
              onClick={() => setFilterOpen(false)}
            />
          ) : (
            <ChevronDown
              className="stroke-2 w-4 h-4 text-gray-600 md:hidden"
              onClick={() => setFilterOpen(true)}
            />
          )}
        </div>
        <h3 className="text-sm font-medium text-gray-700 mb-2 mt-[5px]">
          Категории услуг
        </h3>
        <div className="space-y-2 mb-4">
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-200"
            />
            IT
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-200"
            />
            Дизайн
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-200"
            />
            Маркетинг
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-200"
            />
            Копирайтинг
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-200"
            />
            Обучение
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-200"
            />
            Фото-видео
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-200"
            />
            Ремонт
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-200"
            />
            Красота
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-200"
            />
            Здоровье
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-200"
            />
            Другое
          </label>
        </div>
      </div>

      <h3 className="text-sm font-medium text-gray-700 mb-2">По локации</h3>
      <div className="space-y-2 mb-4">
        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input
            type="radio"
            className="h-4 w-4 text-blue-600 border-gray-200"
          />
          Онлайн
        </label>
        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input
            type="radio"
            className="h-4 w-4 text-blue-600 border-gray-200"
          />
          Оффлайн
        </label>
        <input
          type="text"
          placeholder="Город"
          className="w-full p-2 border border-gray-200 rounded-lg text-sm text-gray-600"
        />
      </div>
      <h3 className="text-sm font-medium text-gray-700 mb-2">
        По рейтингу исполнителя
      </h3>
      <div className="space-y-2 mb-4">
        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            className="h-4 w-4 text-blue-600 border-gray-200"
          />
          ★★★★☆ и выше
        </label>
        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            className="h-4 w-4 text-blue-600 border-gray-200"
          />
          Только с отзывами
        </label>
        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            className="h-4 w-4 text-blue-600 border-gray-200"
          />
          Новые пользователи (без рейтинга)
        </label>
      </div>

      <h3 className="text-sm font-medium text-gray-700 mb-2">
        Срочность задачи
      </h3>
      <div className="space-y-2 mb-4">
        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input
            type="radio"
            className="h-4 w-4 text-blue-600 border-gray-200"
          />
          Да
        </label>
        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input
            type="radio"
            className="h-4 w-4 text-blue-600 border-gray-200"
          />
          Нет
        </label>
      </div>
    </aside>
  );
};

export default FilterSection;
