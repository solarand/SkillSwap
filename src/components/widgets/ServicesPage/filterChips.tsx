const FilterChips = () => {
  return (
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
  );
};

export default FilterChips;
