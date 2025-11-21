/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm, FormProvider, type SubmitHandler } from "react-hook-form";
import ServiceInput from "@/components/ui/input/serviceInput";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { categories, rating } from "@/utils/constants/servicesConst";
import type { FilterFormValues } from "@/utils/types/serviceType";

const FilterSection = ({
  setFilter,
}: {
  setFilter: (data: FilterFormValues) => void;
}) => {
  const [filterOpen, setFilterOpen] = useState(false);

  const methods = useForm<FilterFormValues>({
    defaultValues: {
      category: [],
      location: "",
      rating: [],
      city: "",
      date: "",
    },
  });

  const { watch, handleSubmit, reset } = methods;
  const formValues = watch();
  const isOffline = watch("location") === "Оффлайн";

  const isInitialMount = useRef(true);

  const onSubmit: SubmitHandler<FilterFormValues> = (data) => {
    data = isOffline ? { ...data } : { ...data, city: "" };

    setFilter(data);
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    //console.log("Обновленные данные:", formValues);
  }, [formValues]);
  return (
    <FormProvider {...methods}>
      <aside
        className={`w-full md:w-1/5 bg-white p-4 md:p-6 border-r border-gray-200 md:h-full md:overflow-y-auto ${filterOpen ? "" : "overflow-y-hidden h-12"}`}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <div className="flex justify-between">
              <h2 className="text-lg font-medium text-gray-800 mb-8 mt-[-5px]">
                Фильтры
              </h2>
              {filterOpen ? (
                <ChevronUp
                  className="stroke-2 w-4 h-4 text-gray-600 md:hidden"
                  onClick={() => setFilterOpen(false)}
                />
              ) : (
                <ChevronDown
                  className="stroke-2 w-4 h-4 text-gray-600 md:hidden"
                  onClick={() => setFilterOpen(true)}
                />
              )}
            </div>
            <h3 className="text-sm font-medium text-gray-700 mb-2 mt-[5px]">
              Категории услуг
            </h3>
            <div className="space-y-2 mb-4">
              {categories.map((el) => (
                <ServiceInput
                  key={el}
                  type="checkbox"
                  label={el}
                  name="category"
                />
              ))}
            </div>
          </div>

          <h3 className="text-sm font-medium text-gray-700 mb-2">По локации</h3>
          <div className="space-y-2 mb-4">
            <ServiceInput type="radio" label="Онлайн" name="location" />
            <ServiceInput type="radio" label="Оффлайн" name="location" />
            {isOffline && (
              <input
                type="text"
                placeholder="Город"
                {...methods.register("city")}
                className="w-full p-2 border border-gray-200 rounded-lg text-sm text-gray-600"
              />
            )}
          </div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            По рейтингу исполнителя
          </h3>
          <div className="space-y-2 mb-4">
            {rating.map((el) => (
              <ServiceInput key={el} type="checkbox" label={el} name="rating" />
            ))}
          </div>

          <h3 className="text-sm font-medium text-gray-700 mb-2">
            Дата публикации
          </h3>
          <div className="space-y-2 mb-4">
            <ServiceInput type="radio" label="За все время" name="date" />
            <ServiceInput type="radio" label="Сегодня" name="date" />
            <ServiceInput type="radio" label="Вчера" name="date" />
          </div>

          <button
            type="submit"
            className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 cursor-pointer"
          >
            Применить фильтры
          </button>
          <button
            onClick={() => reset()}
            className="w-full mt-1 px-4 py-2 bg-transparent border border-gray-300 text-gray-700 rounded-lg text-sm hover:bg-gray-100 cursor-pointer"
          >
            Сбросить фильтры
          </button>
        </form>
      </aside>
    </FormProvider>
  );
};

export default FilterSection;
