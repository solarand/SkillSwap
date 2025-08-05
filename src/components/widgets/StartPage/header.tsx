import SignUp from "./../../ui/buttons/signUp";
import SkillSwap from "@/assets/svg/SkillSwap.svg";
import { Link } from "react-router-dom";

const StartPageHeader = () => {
  return (
    <header className="h-20 flex items-center justify-between pl-16 pr-16 max-[544px]:pl-6 max-[544px]:pr-6">
      <img src={SkillSwap} alt="logo" className="max-[544px]:w-24" />
      <div className="">
        <Link
          to="/login"
          className="mr-5 text-cast-gray hover:underline cursor-pointer max-[544px]:text-[0.8rem] max-[544px]:mr-3"
        >
          Войти
        </Link>
        <SignUp w="w-36" h="h-10" text="Регистрация" />
      </div>
    </header>
  );
};

export default StartPageHeader;
