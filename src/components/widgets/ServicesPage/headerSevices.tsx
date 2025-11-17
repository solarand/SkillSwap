import logo from "@/assets/svg/SkillSwap.svg";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import ServiceDropDownMenu from "./dropDownMenu";
import { useAppSelector } from "@/hooks/redux";
import Avatar from "@/components/ui/avatar";

const HeaderServices = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { name, avatar } = useAppSelector((state) => state.user);

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100 px-6 py-3 relative">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src={logo} alt="SkillSwap" className="max-[490px]:w-28 h-8" />
        </div>

        <div
          className="flex items-center gap-3 cursor-pointer group px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Avatar avatar={avatar} />
          <div className="flex items-center gap-2">
            <span className="text-base text-gray-800 max-[490px]:hidden">
              {name}
            </span>
            {isMenuOpen ? (
              <ChevronUp className="stroke-2 w-4 h-4 text-gray-500 group-hover:text-gray-700 transition-colors" />
            ) : (
              <ChevronDown className="stroke-2 w-4 h-4 text-gray-500 group-hover:text-gray-700 transition-colors" />
            )}
          </div>
        </div>

        {isMenuOpen && <ServiceDropDownMenu />}
      </div>
    </header>
  );
};

export default HeaderServices;
