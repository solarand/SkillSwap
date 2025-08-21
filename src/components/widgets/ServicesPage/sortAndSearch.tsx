const SortAndSearch = () => {
  return (
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
  );
};

export default SortAndSearch;
