import { Camera, Settings, Star } from "lucide-react";
import testImg from "@/assets/png/start-page/eng.jpg";
import { Link } from "react-router-dom";

const ProfileTab = () => {
  const user = {
    name: "Иван",
    surname: "Иванов",
    avatar: testImg,
    skills: ["Frontend", "UI/UX", "React", "TypeScript"],
    rating: 4.8,
    completedProjects: 24,
  };

  return (
    <div className=" w-[1280px] h-[700px] mt-5 flex gap-5">
      <div className="h-fit border-2 bg-white border-gray-200 rounded-xl w-1/3 flex flex-col items-center pt-8 pb-16">
        <div className="relative w-40">
          <img
            src={user.avatar}
            alt=""
            className="w-40 h-40 rounded-full object-cover object-center"
          />
          <div className="absolute bg-main w-12 h-12 rounded-full flex items-center justify-center bottom-0 right-0 cursor-pointer hover:scale-105">
            <Camera className="stroke-white" />
          </div>
        </div>
        <h1 className="text-paragraph mt-5 font-bold font-sans">{`${user.name} ${user.surname}`}</h1>
        <span className="flex gap-2 text-gray-500 mt-2 font-semibold scale-105">
          <Star className="fill-yellow-300 stroke-amber-300" />
          {user.rating}
        </span>
        <p className=" text-gray-500 mt-2">{`${user.completedProjects} завершенных обмена`}</p>
        <p className=" text-gray-500 mt-2">{`На платформе с Январь 2025`}</p>
      </div>
      <div className="h-full border-2 bg-white border-gray-200 rounded-xl w-2/3">
        1
      </div>
    </div>
  );
};

export default ProfileTab;
