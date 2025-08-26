import FilterChips from "./filterChips";
import Pagination from "./pagination";
import ServiceCard from "./serviceCard";
import SortAndSearch from "./sortAndSearch";
import { services } from "@/utils/constants/servicesConst";

const MainContent = () => {
  return (
    <main className="w-full min-h-[calc(100vh-67px)] md:w-4/5 p-4 md:p-6 relative">
      <div className="mb-2 text-sm text-gray-600">Найдено: 3 варианта</div>

      <SortAndSearch />
      <FilterChips />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((el) => (
          <ServiceCard key={el.id} {...el} />
        ))}
      </div>
      <Pagination />
    </main>
  );
};

export default MainContent;
