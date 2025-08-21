import logo from "@/assets/svg/SkillSwap.svg";
import { ChevronDown } from "lucide-react";

const HeaderServices = () => {
  return (
    <header className="w-full bg-white shadow-sm p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src={logo} alt="" className="max-[490px]:w-28" />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full" />{" "}
          <span className="text-sm font-medium text-gray-800 hidden max-[490px]:block">
            Имя
          </span>
          <ChevronDown className="stroke-2 w-4 h-4 text-gray-600" />
        </div>
      </div>
    </header>
  );
};

export default HeaderServices;
