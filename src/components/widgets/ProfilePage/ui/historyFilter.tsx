import { useState } from "react";

interface ExchangeStatusFilterProps {
  onFilterChange: (value: string, label: string) => void;
  fil: string;
}

export const ExchangeStatusFilter = ({
  onFilterChange,
  fil,
}: ExchangeStatusFilterProps) => {
  const [selectedStatus, setSelectedStatus] = useState<string>(fil);

  const handleStatusChange = (value: string, label: string) => {
    setSelectedStatus(value);
    onFilterChange(value, label);
  };

  const statuses = [
    { value: "all", label: "Все", id: "status-all" },
    { value: "completed", label: "Завершен", id: "status-completed" },
    { value: "in-progress", label: "В процессе", id: "status-in-progress" },
    { value: "cancelled", label: "Отменен", id: "status-cancelled" },
  ];

  return (
    <div className="relative w-full max-[500px]:w-full">
      <div className="absolute top-10 right-0 max-[500px]:w-full w-[200px] bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-[1000] flex flex-col gap-2 ">
        {statuses.map((status) => (
          <label
            key={status.value}
            htmlFor={status.id}
            className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer"
          >
            <input
              type="radio"
              id={status.id}
              value={status.value}
              checked={selectedStatus === status.value}
              onChange={() => handleStatusChange(status.value, status.label)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-200"
            />
            {status.label}
          </label>
        ))}
      </div>
    </div>
  );
};
