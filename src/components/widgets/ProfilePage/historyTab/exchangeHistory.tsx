import { Filter } from "lucide-react";
import { ExchangeStatusFilter } from "./historyFilter";
import { useState } from "react";
import { initialHistory } from "@/utils/constants/profileConst";
import type { IHistoryCard } from "@/utils/types/profileType";
import HistoryCard from "./historyCard";

export const ExchangeHistory = () => {
  const [defaultFilter, setDefaultFilter] = useState<string>("all");
  const [isOpenfilter, setIsOpenFilter] = useState(false);
  const [exchangeHistory, setExchangeHistory] =
    useState<IHistoryCard[]>(initialHistory);

  const onFilterChange = (value: string, label: string) => {
    setExchangeHistory(initialHistory);
    setIsOpenFilter(false);
    setDefaultFilter(value);
    if (value === "all") {
      setExchangeHistory(initialHistory);
    } else {
      setExchangeHistory((prev) => prev.filter((el) => el.status === label));
    }
  };

  return (
    <div className="border-2 bg-white border-gray-200 rounded-xl w-screen min-[1280px]:w-full max-[880px]:h-full mt-5 h-auto p-5 relative">
      <button
        className="absolute top-5 right-5 flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
        onClick={() => setIsOpenFilter((prev) => !prev)}
      >
        <Filter className="h-4 w-4" />
        Фильтр
      </button>

      {isOpenfilter && (
        <ExchangeStatusFilter
          onFilterChange={onFilterChange}
          fil={defaultFilter}
        />
      )}

      <h1 className="text-2xl font-bold mt-2 max-[500px]:text-xl">
        История обменов
      </h1>

      <div className="mt-5 flex flex-col gap-4 h-auto">
        {exchangeHistory.map((el) => (
          <HistoryCard key={el.title} {...el} />
        ))}
      </div>
    </div>
  );
};
