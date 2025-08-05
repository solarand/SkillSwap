import SignUp from "./../../ui/buttons/signUp";

const StartPageReady = () => {
  return (
    <section className="h-[466px] bg-blue-50 flex flex-col items-center pt-8">
      <h1 className="text-header font-bold">Готов начать обмен навыками?</h1>
      <p className="text-paragraph mt-12 text-cast-gray w-[900px] text-center mb-20 max-[880px]:w-[600px] max-[600px]:w-[450px] max-[450px]:w-[300px]">
        Присоединяйся к нашему сообществу и открой для себя новые возможности.
        Обменивай свои профессиональные навыки и получай ценные услуги без
        денежных расчетов
      </p>
      <SignUp w="w-72" h="h-14" text="Зарегистрироваться" />
    </section>
  );
};

export default StartPageReady;
