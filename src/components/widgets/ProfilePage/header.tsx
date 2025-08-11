import { ArrowRight } from "lucide-react";
import logo from "@/assets/svg/SkillSwap.svg";

const HeaderProfilePage = () => {
  return (
    <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="" className="max-[490px]:w-28" />
      </div>
      <button
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-indigo-700 transition-colors cursor-pointer max-[490px]:text-xs"
        onClick={() => console.log("Переход в каталог")}
      >
        <ArrowRight className="w-4 h-4 mr-2" />
        Каталог услуг
      </button>
    </header>
  );
};

export default HeaderProfilePage;
