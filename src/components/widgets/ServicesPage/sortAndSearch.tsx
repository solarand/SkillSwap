import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface SortAndSearchProps {
  sort: string;
  setSort: (val: string) => void;
  setSearch: (val: string) => void;
}

const SortAndSearch = ({ sort, setSort, setSearch }: SortAndSearchProps) => {
  const [searchValue, setSearchValue] = useState<string>();
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value);
  };

  const handleClick = () => {
    setSearch(searchValue ?? "");
  };
  const handleReset = () => {
    setSearch("");
    setSearchValue(() => "");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="relative w-full sm:w-1/4 group">
        <select
          value={sort}
          onChange={handleSortChange}
          className="w-full p-3 pl-4 pr-10 border border-gray-200 rounded-xl text-sm text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-transparent hover:border-gray-400 appearance-none cursor-pointer"
        >
          <option value="rating">По рейтингу исполнителя</option>
          <option value="reviews">По количеству отзывов</option>
          <option value="newest">По дате публикации (сначала новые)</option>
          <option value="oldest">По дате публикации (сначала старые)</option>
        </select>
        <ChevronDown className="absolute right-2 top-1/2 translate-y-[-50%] stroke-2 w-4 h-4 text-gray-500 group-hover:text-gray-700 transition-colors pointer-events-none" />
      </div>

      <div className="w-full sm:w-1/2 relative">
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          type="text"
          placeholder="Поиск услуг..."
          className="p-3 pl-4 pr-28 border border-gray-200/50 rounded-xl text-sm text-gray-700 w-full bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30"
        />
        {Number(searchValue?.length) > 0 && (
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
            <button
              onClick={handleReset}
              className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition-colors duration-150"
              title="Очистить поиск"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <button
              onClick={handleClick}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg text-sm font-medium hover:from-blue-700 hover:to-blue-600 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg flex items-center space-x-1"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span>Найти</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SortAndSearch;
