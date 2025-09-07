/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Edit, Settings } from "lucide-react";
import { useAppDispatch } from "@/hooks/redux";
import { updateInfo } from "@/store/slices/userSlice";
import SkillsInput from "./skillsInput";
import type { ProfileFormData } from "@/utils/types/profileType";
import SkillBadge from "@/components/ui/span/skillBadge";
import { useLogout } from "@/hooks/logout";

interface ProfileInfoCardProps {
  name: string;
  surname: string;
  email: string;
  description?: string;
  skills?: string[];
}

export const ProfileInfoCard = ({
  name,
  surname,
  email,
  description = "",
  skills: initialSkills = [],
}: ProfileInfoCardProps) => {
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [skills, setSkills] = useState<string[]>(initialSkills);
  const { register, handleSubmit, reset } = useForm<ProfileFormData>({
    defaultValues: {
      name,
      surname,
      email,
      description,
      skills: initialSkills,
    },
  });
  const logoutAccount = useLogout();

  const onSubmit: SubmitHandler<ProfileFormData> = (data) => {
    if (isEditing) {
      dispatch(
        updateInfo({
          ...data,
          skills,
        })
      );
      setIsEditing(false);
      reset({ ...data });
    }
  };

  return (
    <div className="border-2 bg-white border-gray-200 rounded-xl w-full min-[870px]:w-2/3 p-5 relative">
      {isEditing && <Edit className="h-5 w-5 absolute top-5 right-5" />}

      <h1 className="text-2xl font-bold mt-2 max-[500px]:text-xl">
        Информация о профиле
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Остальные поля формы */}
        <div className="flex flex-col min-[870px]:flex-row gap-5 max-[870px]:gap-0">
          <div className="flex flex-col w-full min-[870px]:w-1/2">
            <label htmlFor="name" className="mt-5 font-sans font-semibold">
              Имя
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: true })}
              disabled={!isEditing}
              className={`h-10 rounded-xl border border-gray-200 pl-2 mt-1 ${
                isEditing ? "bg-white" : "bg-gray-100"
              }`}
            />
          </div>
          <div className="flex flex-col w-full min-[870px]:w-1/2">
            <label htmlFor="surname" className="mt-5 font-sans font-semibold">
              Фамилия
            </label>
            <input
              id="surname"
              type="text"
              {...register("surname", { required: true })}
              disabled={!isEditing}
              className={`h-10 rounded-xl border border-gray-200 pl-2 mt-1 ${
                isEditing ? "bg-white" : "bg-gray-100"
              }`}
            />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="email" className="mt-5 font-sans font-semibold">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", { required: true })}
            disabled={!isEditing}
            className={`h-10 rounded-xl border border-gray-200 pl-2 mt-1 ${
              isEditing ? "bg-white" : "bg-gray-100"
            }`}
          />
        </div>

        <div className="flex flex-col mt-5">
          <label htmlFor="description" className="font-sans font-semibold">
            Описание
          </label>
          <textarea
            id="description"
            {...register("description")}
            disabled={!isEditing}
            rows={4}
            className={`rounded-xl border border-gray-200 pl-2 resize-none pt-2 mt-1 ${
              isEditing ? "bg-white" : "bg-gray-100"
            }`}
          />
        </div>

        {/* Компонент SkillsInput */}
        <div className="flex flex-col mt-5">
          {isEditing ? (
            <SkillsInput skills={skills} setSkills={setSkills} />
          ) : (
            <>
              <label className="font-sans font-semibold">Навыки</label>
              <div className="flex flex-wrap gap-2 mt-3">
                {skills.length > 0 ? (
                  skills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))
                ) : (
                  <span className="text-gray-500">Нет указанных навыков</span>
                )}
              </div>
            </>
          )}
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-8 min-[870px]:mt-0 min-[870px]:absolute min-[870px]:bottom-7 min-[870px]:right-5">
          {isEditing ? (
            <button
              type="submit"
              className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer max-[485px]:w-full"
            >
              Сохранить изменения
            </button>
          ) : (
            <div
              className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer max-[485px]:w-3/3"
              onClick={() => setIsEditing(true)}
            >
              <Settings className="h-5 w-5 mr-2" />
              Редактировать профиль
            </div>
          )}
          <button
            type="button"
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer max-[485px]:w-full"
          >
            Изменить пароль
          </button>
          <button
            type="button"
            onClick={() => logoutAccount()}
            className="px-6 py-3 text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors cursor-pointer max-[485px]:w-full"
          >
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </div>
  );
};
