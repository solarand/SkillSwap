const paginationBtn = ({
  name,
  isActive = false,
  onClick,
}: {
  name: string;
  isActive?: boolean;
  onClick: (page: number) => void;
}) => {
  return isActive ? (
    <button className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-600 text-white rounded">
      {name}
    </button>
  ) : (
    <button
      className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-200 text-xs sm:text-sm text-gray-700 rounded hover:bg-gray-300 cursor-pointer"
      onClick={() => onClick(Number(name))}
    >
      {name}
    </button>
  );
};

export default paginationBtn;
