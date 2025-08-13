import { Plus, Trash2, Eye, Check, Info, Edit } from "lucide-react";

export const MyServices = () => {
  return (
    <div className="border-2 bg-white border-gray-200 rounded-xl w-screen min-[1280px]:w-full max-[880px]:h-full mt-5 h-[700px] p-5 relative">
      {/* Кнопка добавления услуги в правом верхнем углу */}
      <button className="absolute top-5 right-5 flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
        <Plus className="h-4 w-4" />
        Добавить
      </button>

      <h1 className="text-2xl font-bold mt-2 max-[500px]:text-xl">
        Мои услуги
      </h1>

      {/* Список услуг */}
      <div className="mt-5 flex flex-col gap-4">
        {/* Карточка услуги 1: Поиск партнера */}
        <div className="border border-gray-200 rounded-lg p-4 flex flex-col min-[870px]:flex-row gap-4">
          <div className="flex-1">
            <h2 className="text-lg font-semibold">Разработка веб-приложений</h2>
            <p className="text-gray-600 mt-1">
              Создание современных веб-приложений с использованием React и
              TypeScript.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Категория: Веб-разработка
            </p>
            <p className="text-sm mt-2">
              <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-md">
                Поиск партнера
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2 min-[870px]:items-end">
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Edit className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-red-600 transition-colors">
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Карточка услуги 2: Ожидание подтверждения */}
        <div className="border border-gray-200 rounded-lg p-4 flex flex-col min-[870px]:flex-row gap-4">
          <div className="flex-1">
            <h2 className="text-lg font-semibold">UI/UX дизайн</h2>
            <p className="text-gray-600 mt-1">
              Дизайн интерфейсов и прототипов для мобильных и веб-приложений.
            </p>
            <p className="text-sm text-gray-500 mt-1">Категория: Дизайн</p>
            <p className="text-sm mt-2">
              <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 rounded-md">
                Ожидание подтверждения
              </span>
            </p>
            <p className="text-sm mt-2">
              <span className="text-gray-600">Предложено обменов: 3</span>
            </p>
          </div>
          <div className="flex items-center flex-wrap gap-2 min-[870px]:items-end">
            <button className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
              <Eye className="h-4 w-4" />
              Посмотреть
            </button>
            <button className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-md hover:bg-green-200 transition-colors">
              <Check className="h-4 w-4" />
              Подтвердить
            </button>
          </div>
        </div>

        {/* Карточка услуги 3: Выполнение */}
        <div className="border border-gray-200 rounded-lg p-4 flex flex-col min-[870px]:flex-row gap-4">
          <div className="flex-1">
            <h2 className="text-lg font-semibold">
              Оптимизация производительности
            </h2>
            <p className="text-gray-600 mt-1">
              Улучшение скорости загрузки и производительности веб-приложений.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Категория: Веб-разработка
            </p>
            <p className="text-sm mt-2">
              <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-md">
                Выполнение
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2 min-[870px]:items-end">
            <button className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
              <Info className="h-4 w-4" />
              Подробности
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
