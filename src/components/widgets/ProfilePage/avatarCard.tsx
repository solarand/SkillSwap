/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from "react";
import { Camera, Star } from "lucide-react";
import { ImageUploadModal } from "./ImageUploadModal";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { updateAvatar } from "@/store/slices/userSlice";
import { config } from "@/utils/config";
import { getProjectsEnding } from "@/utils/getProjectsEnding";
import { transformData } from "@/utils/transformData";
import { useUpdateAvatarMutation } from "@/api/userApi";
import toast from "react-hot-toast";

export const AvatarCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const [response] = useUpdateAvatarMutation();

  const handleAvatarUpdate = async (newAvatar: string) => {
    try {
      const result = await response({
        avatar: newAvatar,
        id: user.id,
      }).unwrap();
      dispatch(updateAvatar(result.user));
      setIsModalOpen(false);
      toast.success(result.msg);
    } catch {
      toast.error(`Произошла ошибка при обновлении аватара!`);
    }
  };

  return (
    <>
      <div className="h-fit border-2 bg-white border-gray-200 rounded-xl w-full min-[870px]:w-1/3 flex flex-col items-center pt-8 pb-16 px-4 relative">
        <div className="relative w-40">
          <img
            src={`${config.API_URL}/${user.avatar}`}
            alt={`${user.name} ${user.surname}`}
            className="w-40 h-40 rounded-full object-cover object-center"
          />
          <button
            className="absolute bg-main w-12 h-12 rounded-full flex items-center justify-center bottom-0 right-0 cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setIsModalOpen(true)}
          >
            <Camera className="stroke-white" />
          </button>
        </div>
        <h1 className="text-paragraph mt-5 font-bold font-sans">{`${user.name} ${user.surname}`}</h1>
        <span className="flex gap-2 text-gray-500 mt-2 font-semibold scale-105">
          <Star className="fill-yellow-300 stroke-amber-300" />
          {Number(user.rating)}
        </span>
        <p className="text-gray-500 mt-2">
          {getProjectsEnding(user.completedProjects)}
        </p>
        <p className="text-gray-500 mt-2">
          На платформе с {transformData(user?.createdAt)}
        </p>
      </div>

      <ImageUploadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAvatarUpdate}
      />
    </>
  );
};
