const Pagination = () => {
  return (
    <div className="mt-4 sm:mt-6 hidden justify-center items-center gap-1 sm:gap-2 absolute  sm:bottom-3 left-0 right-0 sm:flex">
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
  );
};

export default Pagination;
