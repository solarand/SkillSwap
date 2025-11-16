/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  useDeleteUserServiceMutation,
  useUpdateUserServiceMutation,
} from "@/api/servicesApi";
import Notification from "@/components/ui/Notification";
import { useAppDispatch } from "@/hooks/redux";
import {
  deleteServices,
  updateUserService,
} from "@/store/slices/servicesSlice";
import type { IService } from "@/utils/types/serviceType";
import { Check, Edit, Eye, Info, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { DeleteModal } from "../modals/deleteService";
import { useState } from "react";
import { ServiceModal } from "../modals/serviceModal";

const ServiceCard = ({ service }: { service: IService }) => {
  const [deleteAPI] = useDeleteUserServiceMutation();
  const [updateAPI] = useUpdateUserServiceMutation();
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const dispatch = useAppDispatch();

  const deleteService = async (): Promise<void> => {
    setIsOpenDelete(false);
    const res = await deleteAPI(service.id);
    if (res.data?.status === 200) {
      dispatch(deleteServices(service.id));
      toast.success(res.data.message);
    }
  };

  const handleDelete = () => {
    setIsOpenDelete(true);
  };

  const handleEdit = () => {
    setIsOpenEdit(true);
  };

  const editService = async (data: IService): Promise<void> => {
    setIsOpenEdit(false);
    const res = await updateAPI(data);
    if (res.data?.status === 200) {
      dispatch(updateUserService(data));

      toast.success(res.data.message);
    }
  };

  return (
    <>
      <DeleteModal
        isOpen={isOpenDelete}
        onClose={() => setIsOpenDelete(false)}
        serviceTitle={service.title}
        onConfirm={() => deleteService()}
      />
      <ServiceModal
        isOpen={isOpenEdit}
        onClose={() => setIsOpenEdit(false)}
        service={service}
        handleAddService={editService}
      />
      <Notification />
      {service.status === "Поиск партнера" && (
        <div className="border border-gray-200 rounded-lg p-4 flex flex-col min-[870px]:flex-row gap-4 relative">
          <div className="flex-1">
            <h2 className="text-lg font-semibold">{service.title}</h2>
            <p className="text-gray-600 mt-1">{service.description}</p>
            <p className="text-sm text-gray-500 mt-1">
              Категория: {service.category}
            </p>
            <span
              className={`text-sm ${service.location === "Онлайн" ? "text-green-600" : "text-red-600"}`}
            >
              {service.location === "Онлайн"
                ? "Онлайн"
                : `Оффлайн(${service.city})`}
            </span>{" "}
            <p className="text-sm mt-2">
              <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-md">
                Поиск партнера
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2 min-[870px]:items-end">
            <button
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
              onClick={() => handleEdit()}
            >
              <Edit className="h-5 w-5" />
            </button>
            <button
              className="p-2 text-gray-600 hover:text-red-600 transition-colors cursor-pointer"
              onClick={() => handleDelete()}
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
      {service.status === "Ожидание подтверждения" && (
        <div className="border border-gray-200 rounded-lg p-4 flex flex-col min-[870px]:flex-row gap-4 relative">
          <div className="flex-1">
            <h2 className="text-lg font-semibold">{service.title}</h2>
            <p className="text-gray-600 mt-1">{service.description}</p>
            <p className="text-sm text-gray-500 mt-1">
              Категория: {service.category}
            </p>
            <span
              className={`text-sm ${service.location === "Онлайн" ? "text-green-600" : "text-red-600"}`}
            >
              {service.location === "Онлайн"
                ? "Онлайн"
                : `Оффлайн(${service.city})`}
            </span>{" "}
            <p className="text-sm mt-2">
              <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 rounded-md">
                Ожидание подтверждения
              </span>
            </p>
            <p className="text-sm mt-2">
              <span className="text-gray-600">
                Предложено обменов: {service.exchangeOffers}
              </span>
            </p>
          </div>
          <div className="flex items-center flex-wrap gap-2 min-[870px]:items-end">
            <button className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors cursor-pointer">
              <Eye className="h-4 w-4" />
              Посмотреть
            </button>
            <button className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-md hover:bg-green-200 transition-colors cursor-pointer">
              <Check className="h-4 w-4" />
              Подтвердить
            </button>
          </div>
        </div>
      )}

      {service.status === "Выполнение" && (
        <div className="border border-gray-200 rounded-lg p-4 flex flex-col min-[870px]:flex-row gap-4 relative">
          <div className="flex-1">
            <h2 className="text-lg font-semibold">{service.title} </h2>
            <p className="text-gray-600 mt-1">{service.description} </p>
            <p className="text-sm text-gray-500 mt-1">
              Категория: {service.category}
            </p>
            <span
              className={`text-sm ${service.location === "Онлайн" ? "text-green-600" : "text-red-600"}`}
            >
              {service.location === "Онлайн"
                ? "Онлайн"
                : `Оффлайн(${service.city})`}
            </span>{" "}
            <p className="text-sm mt-2">
              <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-md">
                Выполнение
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2 min-[870px]:items-end">
            <button className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors cursor-pointer">
              <Info className="h-4 w-4" />
              Подробности
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceCard;
