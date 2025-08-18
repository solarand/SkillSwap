import { useState } from "react";
import logo from "@/assets/svg/SkillSwap.svg";
import { ChevronDown } from "lucide-react";

const ServiceCatalog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Компонент: Header */}
      <header className="w-full bg-white shadow-sm p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src={logo} alt="" className="max-[490px]:w-28" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full" />{" "}
            {/* Плейсхолдер для аватара */}
            <span className="text-sm font-medium text-gray-800">Имя</span>
            <ChevronDown className="stroke-2 w-4 h-4 text-gray-600" />
          </div>
        </div>
      </header>

      {/* Компонент: FilterSection */}
      <div className="flex flex-col md:flex-row min-h-[calc(100vh-70px)]">
        <aside className="w-full min-h-[calc(100vh-70px)] border md:w-1/5 bg-white p-6 border-r border-gray-200 md:h-full overflow-y-auto">
          <h2 className="text-lg font-medium text-gray-800 mb-6">Фильтры</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Категории
              </h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 border-gray-200"
                  />
                  Все
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 border-gray-200"
                  />
                  Веб-разработка
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
                  Тестирование
                </label>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Статус</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 border-gray-200"
                  />
                  Доступно
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 border-gray-200"
                  />
                  В процессе
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* Компонент: MainContent */}
        <main className="w-full md:w-4/5 p-6">
          {/* Компонент: SortAndSearch */}
          <div className="flex items-center gap-4 mb-6">
            <select className="p-2 border border-gray-200 rounded-lg text-sm text-gray-600 w-1/3">
              <option>Сортировать: По умолчанию</option>
              <option>Сортировать: Цена (по возрастанию)</option>
              <option>Сортировать: Цена (по убыванию)</option>
            </select>
            <input
              type="text"
              placeholder="Поиск услуг..."
              className="p-2 border border-gray-200 rounded-lg text-sm text-gray-600 w-2/3"
            />
          </div>

          {/* Компонент: ServiceGrid*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full" />{" "}
                {/* Плейсхолдер для аватара */}
                <span className="text-sm font-medium text-gray-800">
                  Иван Иванов
                </span>
              </div>
              <h2 className="text-lg font-semibold text-gray-900">
                Создание веб-сайта
              </h2>
              <span className="text-sm text-gray-600">
                Категория: Веб-разработка
              </span>
              <p className="text-sm text-gray-600">
                Адаптивный дизайн и разработка
              </p>
              <button className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 cursor-pointer">
                Предложить обмен
              </button>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full" />
                <span className="text-sm font-medium text-gray-800">
                  Мария Петрова
                </span>
              </div>
              <h2 className="text-lg font-semibold text-gray-900">
                Дизайн логотипа
              </h2>
              <span className="text-sm text-gray-600">Категория: Дизайн</span>
              <p className="text-sm text-gray-600">
                Уникальный брендовый логотип
              </p>
              <button className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                Подробнее
              </button>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full" />
                <span className="text-sm font-medium text-gray-800">
                  Алексей Смирнов
                </span>
              </div>
              <h2 className="text-lg font-semibold text-gray-900">
                Тестирование ПО
              </h2>
              <span className="text-sm text-gray-600">
                Категория: Тестирование
              </span>
              <p className="text-sm text-gray-600">
                Полное тестирование на ошибки
              </p>
              <button className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                Подробнее
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ServiceCatalog;
