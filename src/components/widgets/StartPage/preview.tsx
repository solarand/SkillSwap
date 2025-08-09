import { useNavigate } from "react-router-dom";
import bgcImage from "./../../../assets/png/landing_preview.png";
import mobileBgc from "./../../../assets/png/start-page/kupit-notebook.jpg";

const StartPagePrewiew = () => {
  const navigate = useNavigate();

  function backgroundImageSize() {
    if (typeof window !== "undefined" && window.innerWidth <= 544) {
      return `url(${mobileBgc})`;
    }
    return `url(${bgcImage})`;
  }

  return (
    <section
      className="w-full pl-40 pt-80 max-[1100px]:pl-20 max-[800px]:pl-10 max-[400px]:pl-4 max-[600px]:pt-60"
      style={{
        height: "calc(100vh - 80px)",
        backgroundImage: backgroundImageSize(),
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "left",
      }}
    >
      <h1 className="text-header font-bold">Меняй навыки, а не деньги</h1>
      <p className="max-w-[790px] text-paragraph text-cast-gray mt-8 max-[990px]:max-w-[500px] max-[675px]:max-w-[350px]">
        Платформа для обмена профессиональными навыками и услугами без денежных
        расчетов. Найди партнера и обменяйтесьценными умениями.
      </p>
      <div className="flex items-center justify-between mt-12 w-lg max-[800px]:justify-start max-[800px]:gap-4 max-[585px]:flex-col max-[585px]:items-start">
        <button
          className="w-52 h-16 rounded-[10px] bg-main text-center text-white cursor-pointer hover:bg-blue-700 text-paragraph max-[800px]:w-40 max-[585px]:w-52 max-[585px]:h-12"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={() => navigate("/login")}
        >
          Найти услугу
        </button>
        {/* <button className="w-64 h-16 rounded-[10px] border border-cast-gray text-paragraph text-center text-cast-gray cursor-pointer hover:opacity-75 max-[800px]:w-52 max-[585px]:h-12">
          Как это работает?
        </button> */}
      </div>
    </section>
  );
};

export default StartPagePrewiew;
