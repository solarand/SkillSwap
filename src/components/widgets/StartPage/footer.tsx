import logo from "./../../../assets/svg/SkillSwapWhite.svg";
import location from "./../../../assets/png/start-page/map-pin.png";
import email from "./../../../assets/png/start-page/letter.png";
import number from "./../../../assets/png/start-page/telephone.png";
import vk from "./../../../assets/svg/landing/vk.svg";
import tg from "./../../../assets/svg/landing/tg.svg";
import inst from "./../../../assets/svg/landing/inst.svg";

const StartPageFooter = () => {
  function footerFlex() {
    if (typeof window !== "undefined" && window.innerWidth < 800) {
      return "flex flex-col items-start gap-4";
    }
    return "flex";
  }

  function navFlex() {
    if (typeof window !== "undefined" && window.innerWidth < 800) {
      return "flex gap-4 flex-wrap";
    }
    return "flex flex-col";
  }

  return (
    <footer className="h-[400px] bg-gray-800 pt-12 flex justify-center max-[800px]:h-[660px]">
      <div className="flex flex-col items-center relative w-[1500px] h-full max-[1070px]:w-[800px] max-[800px]:items-start max-[800px]:w-full">
        <div
          className={`${footerFlex()} w-[1300px] h-[190px] max-[1070px]:w-[800px] max-[800px]:w-full max-[1300px]:w-[1100px] max-[1100px]:w-800px`}
        >
          <div className="flex flex-col items-start justify-between w-80 h-40 max-[800px]:w-full">
            <img src={logo} alt="" />
            <p className="text-[1.25rem] text-gray-400">
              Платформа для обмена профессиональными навыками без денежных
              рассчетов.
            </p>
          </div>

          <div className="flex flex-col items-start w-44 h-[181px] ml-28 max-[1200px]:ml-2 max-[800px]:ml-0 max-[800px]:w-full">
            <h1 className="text-2xl text-white mt-[-9px]">Навигация</h1>
            <nav
              className={`h-[104px] ${navFlex()} mt-12 max-[800px]:w-full max-[800px]:mt-2 max-[800px]:h-[80px]`}
            >
              <a className="text-[1.25rem] text-gray-400 cursor-pointer hover:underline">
                Главная
              </a>
              <a className="text-[1.25rem] text-gray-400 cursor-pointer hover:underline">
                Каталог услуг
              </a>
              <a className="text-[1.25rem] text-gray-400 cursor-pointer hover:underline">
                Как это работает
              </a>
            </nav>
          </div>

          <div className="flex flex-col items-start w-80 h-[189px] ml-40 max-[1350px]:ml-6 max-[800px]:ml-0">
            <h1 className="text-2xl text-white mt-[-9px] max-[391px]:mt-1">
              Контакты
            </h1>
            <div className="flex items-center mt-12 max-[800px]:mt-6">
              <img src={email} alt="" />
              <p className="text-[1.25rem] text-gray-400">info@skillswap.ru</p>
            </div>
            <div className="flex mt-1 items-center">
              <img src={number} alt="" />
              <p className="text-[1.25rem] text-gray-400">+7 (921) 131 31 30</p>
            </div>
            <div className="flex items-center mt-1.5">
              <img src={location} alt="" />
              <p className="text-[1.25rem] text-gray-400">
                Москва, ул. Выдуманная, 101
              </p>
            </div>
          </div>

          {typeof window !== "undefined" && window.innerWidth > 1100 && (
            <div className="flex flex-col items-start w-52 h-[111px]">
              <h1 className="text-2xl text-white mt-[-9px]">Социальные сети</h1>
              <div className="h-[50px] w-52 flex items-center justify-between mt-8">
                <img
                  className="cursor-pointer hover:opacity-50"
                  src={vk}
                  alt=""
                />
                <img
                  className="cursor-pointer hover:opacity-50"
                  src={tg}
                  alt=""
                />
                <img
                  className="cursor-pointer hover:opacity-50"
                  src={inst}
                  alt=""
                />
              </div>
            </div>
          )}
        </div>
        {typeof window !== "undefined" && window.innerWidth < 1100 && (
          <div className="flex flex-col items-start w-52 h-[111px] absolute bottom-8 left-0">
            <h1 className="text-2xl text-white mt-[-9px]">Социальные сети</h1>
            <div className="h-[50px] w-52 flex items-center justify-between mt-8">
              <img
                className="cursor-pointer hover:opacity-50"
                src={vk}
                alt=""
              />
              <img
                className="cursor-pointer hover:opacity-50"
                src={tg}
                alt=""
              />
              <img
                className="cursor-pointer hover:opacity-50"
                src={inst}
                alt=""
              />
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default StartPageFooter;
