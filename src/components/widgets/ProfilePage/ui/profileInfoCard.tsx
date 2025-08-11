import { Settings } from "lucide-react";
import SkillBadge from "./skillsBadge";

interface ProfileInfoCardProps {
  name: string;
  surname: string;
  email: string;
  description: string;
  skills: string[];
}

export const ProfileInfoCard = ({
  name,
  surname,
  email,
  description,
  skills,
}: ProfileInfoCardProps) => (
  <div className="border-2 bg-white border-gray-200 rounded-xl w-full min-[870px]:w-2/3 p-5 relative">
    <h1 className="text-2xl font-bold mt-2 max-[500px]:text-xl">
      Информация о профиле
    </h1>

    <div className="flex flex-col min-[870px]:flex-row gap-5 max-[870px]:gap-0">
      <div className="flex flex-col w-full min-[870px]:w-1/2">
        <label className="mt-5 font-sans font-semibold">Имя</label>
        <input
          type="text"
          value={name}
          readOnly
          className="bg-gray-100 h-10 rounded-xl border border-gray-200 pl-2 mt-1"
        />
      </div>
      <div className="flex flex-col w-full min-[870px]:w-1/2">
        <label className="mt-5 font-sans font-semibold">Фамилия</label>
        <input
          type="text"
          value={surname}
          readOnly
          className="bg-gray-100 h-10 rounded-xl border border-gray-200 pl-2 mt-1"
        />
      </div>
    </div>
    <div className="flex flex-col w-full min-[870px]:w-1/2">
      <label className="mt-5 font-sans font-semibold">Email</label>
      <input
        type="text"
        value={email}
        readOnly
        className="bg-gray-100 h-10 rounded-xl border border-gray-200 pl-2 mt-1"
      />
    </div>

    <div className="flex flex-col mt-5">
      <label className="font-sans font-semibold">Описание</label>
      <textarea
        value={description}
        readOnly
        className="bg-gray-100 h-34 rounded-xl border border-gray-200 pl-2 resize-none pt-2 mt-1"
      />
    </div>

    <div className="flex flex-col mt-5">
      <label className="font-sans font-semibold">Навыки</label>
      <div className="flex flex-wrap gap-2 mt-3">
        {skills.map((skill) => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>
    </div>

    <div className="flex flex-wrap gap-4 justify-center mt-8 min-[870px]:mt-0 min-[870px]:absolute min-[870px]:bottom-7 min-[870px]:right-5">
      <button className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer max-[485px]:w-3/3">
        <Settings className="h-5 w-5 mr-2" />
        Редактировать профиль
      </button>
      <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer max-[485px]:w-3/3">
        Изменить пароль
      </button>
      <button className="px-6 py-3 text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors cursor-pointer max-[485px]:w-3/3">
        Выйти из аккаунта
      </button>
    </div>
  </div>
);
