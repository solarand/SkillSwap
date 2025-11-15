import { Briefcase, Plus } from "lucide-react";
import ServiceCard from "./serviceCard";
import { AddServiceModal } from "../modals/addServiceModal";
import { useEffect, useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { ActionButton } from "@/components/ui/buttons/buttons";
import {
  useAddUserServiceMutation,
  useGetUserServicesQuery,
} from "@/api/servicesApi";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { addServices, setServices } from "@/store/slices/servicesSlice";
import type { IService } from "@/utils/types/serviceType";
import toast from "react-hot-toast";
import Notification from "@/components/ui/Notification";

export const MyServices = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading, data } = useGetUserServicesQuery();
  const [create] = useAddUserServiceMutation();
  const services = useAppSelector((state) => state.services);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) dispatch(setServices(data));
  }, [data, dispatch]);

  // {
  //   title: "Разработка веб-приложений",
  //   description:
  //     "Создание современных веб-приложений с использованием React и TypeScript.",
  //   category: "Веб-разработка",
  //   status: "Поиск партнера",
  //   exchangeOffers: 0,
  //   isUrgent: true,
  //   location: "Онлайн",
  // },
  // {
  //   title: "UI/UX дизайн",
  //   description:
  //     "Дизайн интерфейсов и прототипов для мобильных и веб-приложений.",
  //   category: "Дизайн",
  //   status: "Ожидание подтверждения",
  //   exchangeOffers: 3,
  //   isUrgent: false,
  //   location: "Оффлайн",
  //   city: "Москва",
  // },
  // {
  //   title: "Оптимизация производительности",
  //   description:
  //     "Улучшение скорости загрузки и производительности веб-приложений.",
  //   category: "Веб-разработка",
  //   status: "Выполнение",
  //   exchangeOffers: 0,
  //   isUrgent: true,
  //   location: "Онлайн",
  // },

  const handleAddService: SubmitHandler<IService> = async (data) => {
    setIsOpen(false);
    data.status = "Поиск партнера";
    data.exchangeOffers = 0;
    const res = await create(data).unwrap();
    dispatch(addServices(data));

    if (res.status === 200) {
      toast.success(res.message);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="border-2 bg-white border-gray-200 rounded-xl w-screen min-[1280px]:w-full max-[880px]:h-full mt-5 h-auto py-10 p-5 relative">
      <Notification />

      {services.length > 0 && (
        <ActionButton
          onClick={() => setIsOpen(true)}
          className="absolute top-4 right-5 "
        >
          <Plus className="h-4 w-4" />
          Добавить
        </ActionButton>
      )}

      <div className="mt-5 flex flex-col gap-4">
        {services.length > 0 ? (
          services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-20 px-8 bg-white rounded-xl border border-gray-200">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Briefcase className="w-10 h-10 text-gray-400" />
            </div>
            <p className="text-gray-600 text-lg mb-2">У вас пока нет услуг</p>
            <p className="text-gray-400 text-sm mb-6 max-[407px]:text-center">
              Добавьте услугу, чтобы начать обмен
            </p>
            <ActionButton
              className="px-8 py-3 transition-colors"
              onClick={() => setIsOpen(true)}
            >
              <Plus className="size-4 max-[315px]:hidden" /> Добавить услугу
            </ActionButton>
          </div>
        )}
      </div>

      <AddServiceModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        handleAddService={handleAddService}
      />
    </div>
  );
};
