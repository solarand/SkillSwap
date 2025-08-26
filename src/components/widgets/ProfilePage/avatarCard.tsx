import { useState } from "react";
import { Camera, Star } from "lucide-react";
import { ImageUploadModal } from "./ImageUploadModal";
import { useAppDispatch } from "@/hooks/redux";
import { updateAvatar } from "@/store/slices/userSlice";

interface AvatarCardProps {
  avatar: string;
  name: string;
  surname: string;
  rating: number;
  completedProjects: number;
  onAvatarUpdate?: (newAvatar: string) => void;
}

export const AvatarCard = ({
  avatar,
  name,
  surname,
  rating,
  completedProjects,
}: AvatarCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleAvatarUpdate = (newAvatar: string) => {
    dispatch(updateAvatar(newAvatar));
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="h-fit border-2 bg-white border-gray-200 rounded-xl w-full min-[870px]:w-1/3 flex flex-col items-center pt-8 pb-16 px-4 relative">
        <div className="relative w-40">
          <img
            src={avatar}
            alt={`${name} ${surname}`}
            className="w-40 h-40 rounded-full object-cover object-center"
          />
          <button
            className="absolute bg-main w-12 h-12 rounded-full flex items-center justify-center bottom-0 right-0 cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setIsModalOpen(true)}
          >
            <Camera className="stroke-white" />
          </button>
        </div>
        <h1 className="text-paragraph mt-5 font-bold font-sans">{`${name} ${surname}`}</h1>
        <span className="flex gap-2 text-gray-500 mt-2 font-semibold scale-105">
          <Star className="fill-yellow-300 stroke-amber-300" />
          {rating}
        </span>
        <p className="text-gray-500 mt-2">{`${completedProjects} завершенных обмена`}</p>
        <p className="text-gray-500 mt-2">На платформе с Январь 2025</p>
      </div>

      <ImageUploadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAvatarUpdate}
      />
    </>
  );
};
