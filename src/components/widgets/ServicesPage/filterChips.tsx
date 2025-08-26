import Chip from "@/components/ui/span/chip";

const FilterChips = () => {
  return (
    <div className="flex flex-wrap gap-2 mb-4 items-center">
      <Chip name="IT" />
      <Chip name="Онлайн" />
      <Chip name="Профессионал" />
      <button className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-gray-200">
        Сбросить фильтры
      </button>
    </div>
  );
};

export default FilterChips;
