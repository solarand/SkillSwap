/* eslint-disable @typescript-eslint/no-misused-promises */
import { Plus, X } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import Select from "react-select";
import { cityOptions } from "@/utils/constants/profileConst";
import ErrorMessage from "@/components/ui/errorMsh";
import type { IService } from "@/utils/types/serviceType";
import { categoryMerge } from "@/utils/categoryMerge";
import { categories } from "@/utils/constants/servicesConst";
import { ActionButton } from "@/components/ui/buttons/buttons";

interface AddServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleAddService: (data: IService) => void;
}

export const AddServiceModal = ({
  isOpen,
  onClose,
  handleAddService,
}: AddServiceModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    watch,
  } = useForm<IService>({
    defaultValues: {
      title: "",
      description: "",
      category: "",
      location: "Онлайн",
      city: "",
    },
  });

  const categoryOptions = categoryMerge(categories);
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    if (isOpen) {
      reset({
        title: "",
        description: "",
        category: "",
        location: "Онлайн",
        city: "",
      });
      setIsOffline(false);
    }
  }, [isOpen, reset]);

  const location = watch("location");
  useEffect(() => {
    setIsOffline(location === "Оффлайн");
  }, [location]);

  if (!isOpen) return null;

  const onSubmit = (data: IService) => {
    handleAddService(data);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-[600px] max-[500px]:w-11/12 p-6 rounded-xl relative max-h-[90vh]">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-6 max-[500px]:text-xl">
          Добавление услуги
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 max-[500px]:text-xs">
              Название
            </label>
            <input
              {...register("title", { required: "Введите название услуги" })}
              type="text"
              placeholder="Введите название услуги"
              className="mt-1 h-10 rounded-lg border border-gray-200 pl-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.title && <ErrorMessage message={errors.title.message} />}
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 max-[500px]:text-xs">
              Описание
            </label>
            <textarea
              {...register("description", {
                required: "Введите описание услуги",
              })}
              placeholder="Введите описание услуги"
              className="mt-1 h-24 rounded-lg border border-gray-200 pl-3 pt-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.description && (
              <ErrorMessage message={errors.description.message} />
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 max-[500px]:text-xs">
              Категория
            </label>
            <Controller
              name="category"
              control={control}
              rules={{ required: "Выберите категорию" }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={categoryOptions}
                  className="mt-1 text-sm"
                  classNamePrefix="select"
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      minHeight: "2.5rem",
                      borderRadius: "0.5rem",
                      border: "1px solid #e5e7eb",
                      paddingLeft: "0.75rem",
                      "&:hover": {
                        borderColor: "#3b82f6",
                      },
                    }),
                    menu: (provided) => ({
                      ...provided,
                      maxHeight: "200px",
                      overflowY: "auto",
                      borderRadius: "0.5rem",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      zIndex: 1000,
                      "&::-webkit-scrollbar": {
                        width: "8px",
                      },
                      "&::-webkit-scrollbar-track": {
                        background: "#f1f1f1",
                        borderRadius: "4px",
                      },
                      "&::-webkit-scrollbar-thumb": {
                        background: "#888",
                        borderRadius: "4px",
                      },
                      "&::-webkit-scrollbar-thumb:hover": {
                        background: "#555",
                      },
                      scrollbarWidth: "thin",
                      scrollbarColor: "#888 #f1f1f1",
                    }),
                    option: (provided, state) => ({
                      ...provided,
                      fontSize: "0.875rem",
                      backgroundColor: state.isSelected ? "#3b82f6" : "white",
                      color: state.isSelected ? "white" : "black",
                      "&:hover": {
                        backgroundColor: "#dbeafe",
                      },
                    }),
                    menuList: (provided) => ({
                      ...provided,
                      maxHeight: "200px",
                      overflowY: "auto",
                    }),
                  }}
                  onChange={(option) =>
                    field.onChange(option ? option.value : "")
                  }
                  value={
                    categoryOptions.find(
                      (option) => option.value === field.value
                    ) || null
                  }
                  placeholder="Выберите категорию"
                />
              )}
            />
            {errors.category && (
              <ErrorMessage message={errors.category.message} />
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 max-[500px]:text-xs">
              Тип услуги
            </label>
            <div className="space-y-2 mt-1">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  {...register("location", { required: "Выберите тип услуги" })}
                  type="radio"
                  value="Онлайн"
                  className="h-4 w-4 text-blue-600 border-gray-200 checked:bg-blue-600 focus:ring-blue-600 focus:ring-2"
                  onClick={() => setIsOffline(false)}
                />
                Онлайн
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  {...register("location", { required: "Выберите тип услуги" })}
                  type="radio"
                  value="Оффлайн"
                  className="h-4 w-4 text-blue-600 border-gray-200 checked:bg-blue-600 focus:ring-blue-600 focus:ring-2"
                  onChange={() => setIsOffline(true)}
                />
                Оффлайн
              </label>
            </div>
            {errors.location && (
              <ErrorMessage message={errors.location.message} />
            )}
          </div>

          {isOffline && (
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-600 max-[500px]:text-xs">
                Город
              </label>
              <Controller
                name="city"
                control={control}
                rules={{ required: isOffline ? "Выберите город" : false }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={cityOptions}
                    className="mt-1 text-sm"
                    classNamePrefix="select"
                    isClearable
                    isSearchable
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        minHeight: "2.5rem",
                        borderRadius: "0.5rem",
                        border: "1px solid #e5e7eb",
                        paddingLeft: "0.75rem",
                        "&:hover": {
                          borderColor: "#3b82f6",
                        },
                      }),
                      menu: (provided) => ({
                        ...provided,
                        maxHeight: "200px",
                        overflowY: "auto",
                        borderRadius: "0.5rem",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        zIndex: 1000,
                        "&::-webkit-scrollbar": {
                          width: "8px",
                        },
                        "&::-webkit-scrollbar-track": {
                          background: "#f1f1f1",
                          borderRadius: "4px",
                        },
                        "&::-webkit-scrollbar-thumb": {
                          background: "#888",
                          borderRadius: "4px",
                        },
                        "&::-webkit-scrollbar-thumb:hover": {
                          background: "#555",
                        },
                        scrollbarWidth: "thin",
                        scrollbarColor: "#888 #f1f1f1",
                      }),
                      option: (provided, state) => ({
                        ...provided,
                        fontSize: "0.875rem",
                        backgroundColor: state.isSelected ? "#3b82f6" : "white",
                        color: state.isSelected ? "white" : "black",
                        "&:hover": {
                          backgroundColor: "#dbeafe",
                        },
                      }),
                      menuList: (provided) => ({
                        ...provided,
                        maxHeight: "200px",
                        overflowY: "auto",
                      }),
                    }}
                    onChange={(option) =>
                      field.onChange(option ? option.value : "")
                    }
                    value={
                      cityOptions.find(
                        (option) => option.value === field.value
                      ) || null
                    }
                    placeholder="Выберите город"
                  />
                )}
              />
              {errors.city && <ErrorMessage message={errors.city.message} />}
            </div>
          )}

          <div className="flex gap-4 justify-end mt-6">
            <ActionButton className="h-9 max-[500px]:w-full">
              <Plus className="h-4 w-4" />
              Добавить
            </ActionButton>
          </div>
        </form>
      </div>
    </div>
  );
};
