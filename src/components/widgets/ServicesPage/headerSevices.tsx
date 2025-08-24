import logo from "@/assets/svg/SkillSwap.svg";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import ServiceDropDownMenu from "./dropDownMenu";

const HeaderServices = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm p-4 relative">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src={logo} alt="" className="max-[490px]:w-28" />
        </div>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-8 h-8 bg-gray-300 rounded-full" />{" "}
          <span className="text-sm font-medium text-gray-800 max-[490px]:block">
            Имя
          </span>
          {isMenuOpen ? (
            <ChevronUp className="stroke-2 w-4 h-4 text-gray-600" />
          ) : (
            <ChevronDown className="stroke-2 w-4 h-4 text-gray-600" />
          )}
        </div>
        {isMenuOpen && <ServiceDropDownMenu />}
      </div>
    </header>
  );
};

export default HeaderServices;
