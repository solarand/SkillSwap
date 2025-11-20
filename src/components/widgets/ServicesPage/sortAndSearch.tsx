import { ChevronDown } from "lucide-react";

interface SortAndSearchProps {
  sort: string;
  setSort: (val: string) => void;
}

const SortAndSearch = ({ sort, setSort }: SortAndSearchProps) => {
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value);
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

      <input
        type="text"
        placeholder="Поиск услуг..."
        className="p-2 border border-gray-200 rounded-lg text-sm text-gray-600 w-full sm:w-1/2"
      />
    </div>
  );
};

export default SortAndSearch;
