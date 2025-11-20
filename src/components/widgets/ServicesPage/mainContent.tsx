import { useGetServicesQuery } from "@/api/catalogApi";
import FilterChips from "./filterChips";
import Pagination from "./pagination";
import ServiceCard from "./serviceCard";
import SortAndSearch from "./sortAndSearch";
import { useState } from "react";

const MainContent = () => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("newest");
  const { data, isLoading } = useGetServicesQuery({
    page: page,
    filter: [],
    sort: sort,
  });

  if (isLoading) {
    return (
      <main className="w-full min-h-[calc(100vh-67px)] md:w-4/5 p-4 md:p-6 relative">
        <div className="text-center">Загрузка...</div>
      </main>
    );
  }

  return (
    <main className="w-full min-h-[calc(100vh-67px)] md:w-4/5 p-4 md:p-6 relative overflow-auto">
      <div className="mb-2 text-sm text-gray-600">Найдено: 3 варианта</div>

      <SortAndSearch sort={sort} setSort={setSort} />
      <FilterChips />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {data?.data?.map((el) => (
          <ServiceCard key={el.id} {...el} />
        ))}
      </div>
      <Pagination
        pages={data?.pages || 1}
        pageActive={page}
        setPage={setPage}
      />
    </main>
  );
};

export default MainContent;
