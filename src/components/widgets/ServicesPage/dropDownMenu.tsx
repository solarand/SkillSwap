const ServiceDropDownMenu = () => {
  return (
    <div className="absolute right-0 top-12 mt-2 w-28 bg-white border border-gray-200 rounded-lg shadow-lg z-10 flex flex-col items-start">
      <button className="px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
        Профиль
      </button>

      <button className="px-4 py-2 text-sm w-full hover:bg-gray-100 cursor-pointer text-red-600">
        Выход
      </button>
    </div>
  );
};

export default ServiceDropDownMenu;
