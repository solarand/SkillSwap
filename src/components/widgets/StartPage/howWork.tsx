import CardWork from "./ui/cardWork";
import addProfile from "./../../../assets/svg/landing/addProfile.svg";
import searchImg from "./../../../assets/svg/landing/search.svg";
import trade from "./../../../assets/svg/landing/trade.svg";

const StartPageHowWork = () => {
  return (
    <section className="h-[700px] pt-14 max-[991px]:h-[1600px]">
      <h1 className="text-center text-header font-bold">Как это работает</h1>
      <div className="flex justify-around mt-24 max-[991px]:flex-col items-center max-[991px]:gap-10">
        <CardWork
          img={addProfile}
          h1="Создай профиль"
          p="Расскажи о своих навыках и услугах, которые готов предложить для обмена"
        />
        <CardWork
          img={searchImg}
          h1="Найди партнёра"
          p="Ищи людей с навыками, которые тебе нужны, и предлагай обмен"
        />
        <CardWork
          img={trade}
          h1="Соверши обмен"
          p="Договритесь об условиях и обменяйтесь услугами, получив взаимную пользу"
        />
      </div>
    </section>
  );
};

export default StartPageHowWork;
