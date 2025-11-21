import Chip from "@/components/ui/span/chip";
import type { FilterFormValues } from "@/utils/types/serviceType";

const FilterChips = ({ filter }: { filter: FilterFormValues }) => {
  const activeFilters = [
    ...(filter.category || []),
    filter.location === "Онлайн" ? "Онлайн" : filter.city,
    filter.date,
    ...(filter.rating || []),
  ].filter((el) => el !== "");

  return (
    <div className="flex flex-wrap gap-2 mb-4 items-center">
      {activeFilters.length > 0 &&
        activeFilters.map((filterName, index) => (
          <Chip key={`${filterName}-${index}`} name={filterName} />
        ))}
    </div>
  );
};
export default FilterChips;
