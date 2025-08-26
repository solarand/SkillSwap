const paginationBtn = ({
  name,
  isActive = false,
}: {
  name: string;
  isActive?: boolean;
}) => {
  return isActive ? (
    <button className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-600 text-white rounded">
      {name}
    </button>
  ) : (
    <button className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-200 text-xs sm:text-sm text-gray-700 rounded hover:bg-gray-300">
      {name}
    </button>
  );
};

export default paginationBtn;
