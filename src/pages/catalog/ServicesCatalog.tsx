import logo from "@/assets/svg/SkillSwap.svg";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const ServiceCatalog = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 md:overflow-y-hidden">
      {/* Компонент: Header - содержит логотип слева и профиль справа */}
      <header className="w-full bg-white shadow-sm p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src={logo} alt="" className="max-[490px]:w-28" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full" />{" "}
            {/* Плейсхолдер для аватара */}
            <span className="text-sm font-medium text-gray-800 hidden max-[490px]:block">
              Имя
            </span>
            <ChevronDown className="stroke-2 w-4 h-4 text-gray-600" />
          </div>
        </div>
      </header>

      {/* Компонент: FilterSection - секция фильтров слева, с скроллбаром */}
      <div className="flex flex-col md:flex-row md:h-[calc(100vh-80px)] border-t border-gray-200">
        <aside
          className={`w-full md:w-1/5 bg-white p-4 md:p-6 border-r border-gray-200 md:h-full md:overflow-y-auto ${filterOpen ? "" : "overflow-y-hidden h-12"}`}
        >
          {/* Компонент: MainFilters - основные фильтры */}
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

        {/* Компонент: MainContent - содержит сортировку и карточки */}
        <main className="w-full min-h-screen md:w-4/5 p-4 md:p-6 relative">
          {/* Компонент: FoundCount - количество найденных услуг */}
          <div className="mb-2 text-sm text-gray-600">Найдено: 3 варианта</div>

          {/* Компонент: SortAndSearch - панель сортировки и поиска */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <select className="p-2 border border-gray-200 rounded-lg text-sm text-gray-600 w-full sm:w-1/4">
              <option>По рейтингу исполнителя</option>
              <option>По количеству отзывов</option>
              <option>По алфавиту</option>
            </select>
            <input
              type="text"
              placeholder="Поиск услуг..."
              className="p-2 border border-gray-200 rounded-lg text-sm text-gray-600 w-full sm:w-1/2"
            />
          </div>

          {/* Компонент: FilterChips - чипы выбранных фильтров */}
          <div className="flex flex-wrap gap-2 mb-4 items-center">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
              IT
            </span>
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
              Онлайн
            </span>
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full flex items-center gap-1">
              Профессионал <button className="text-xs text-blue-600">×</button>
            </span>
            <button className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-gray-200">
              Сбросить фильтры
            </button>
          </div>

          {/* Компонент: ServiceGrid - сетка карточек услуг */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-3 sm:p-4 flex flex-col gap-2 sm:gap-3 relative">
              <span className="absolute right-2 top-2 px-2 py-1 bg-red-500 text-xs text-white rounded">
                Срочно
              </span>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-300 rounded-full" />{" "}
                {/* Плейсхолдер для аватара */}
                <div>
                  <span className="text-sm font-medium text-gray-800">
                    Иван Иванов
                  </span>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <span className="text-sm text-yellow-500">★★★★☆</span>{" "}
                    {/* Рейтинг */}
                    <span className="text-sm text-gray-600">
                      (32 отзыва)
                    </span>{" "}
                    {/* Кол-во отзывов */}
                  </div>
                </div>
              </div>
              <span className="text-sm text-green-600">Онлайн</span>{" "}
              {/* Онлайн/Оффлайн */}
              <h2 className="text-lg font-semibold text-gray-900">
                Создание веб-сайта
              </h2>
              <span className="text-sm text-gray-600">Категория: IT</span>
              <p className="text-sm text-gray-600">
                Адаптивный дизайн и разработка
              </p>
              <button className="mt-auto px-3 sm:px-4 py-1 sm:py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 cursor-pointer">
                Предложить обмен
              </button>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-3 sm:p-4 flex flex-col gap-2 sm:gap-3 relative">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-300 rounded-full" />
                <div>
                  <span className="text-sm font-medium text-gray-800">
                    Мария Петрова
                  </span>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <span className="text-sm text-yellow-500">★★★☆☆</span>{" "}
                    {/* Рейтинг */}
                    <span className="text-sm text-gray-600">
                      (15 отзывов)
                    </span>{" "}
                    {/* Кол-во отзывов */}
                  </div>
                </div>
              </div>
              <span className="text-sm text-red-600">Оффлайн (Москва)</span>{" "}
              {/* Онлайн/Оффлайн + город */}
              <h2 className="text-lg font-semibold text-gray-900">
                Дизайн логотипа
              </h2>
              <span className="text-sm text-gray-600">Категория: Дизайн</span>
              <p className="text-sm text-gray-600">
                Уникальный брендовый логотип
              </p>
              <button className="mt-auto px-3 sm:px-4 py-1 sm:py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 cursor-pointer">
                Предложить обмен
              </button>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-3 sm:p-4 flex flex-col gap-2 sm:gap-3 relative">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-300 rounded-full" />
                <div>
                  <span className="text-sm font-medium text-gray-800">
                    Алексей Смирнов
                  </span>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <span className="text-sm text-yellow-500">★★★★★</span>{" "}
                    {/* Рейтинг */}
                    <span className="text-sm text-gray-600">
                      (45 отзывов)
                    </span>{" "}
                    {/* Кол-во отзывов */}
                  </div>
                </div>
              </div>
              <span className="text-sm text-green-600">Онлайн</span>{" "}
              {/* Онлайн/Оффлайн */}
              <h2 className="text-lg font-semibold text-gray-900">
                Тестирование ПО
              </h2>
              <span className="text-sm text-gray-600">Категория: IT</span>
              <p className="text-sm text-gray-600">
                Полное тестирование на ошибки
              </p>
              <button className="mt-auto px-3 sm:px-4 py-1 sm:py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 cursor-pointer">
                Предложить обмен
              </button>
            </div>
          </div>
          {/* Компонент: Pagination - пагинация */}
          <div className="mt-4 sm:mt-6 hidden justify-center items-center gap-1 sm:gap-2 absolute bottom-2 sm:bottom-3 left-0 right-0 sm:flex">
            <button className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-200 text-xs sm:text-sm text-gray-700 rounded hover:bg-gray-300">
              1
            </button>
            <button className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-600 text-white rounded">
              2
            </button>
            <button className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-200 text-xs sm:text-sm text-gray-700 rounded hover:bg-gray-300">
              3
            </button>
            <span className="text-xs sm:text-sm text-gray-600">...</span>
            <button className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-200 text-xs sm:text-sm text-gray-700 rounded hover:bg-gray-300">
              10
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ServiceCatalog;
