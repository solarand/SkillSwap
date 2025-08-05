import StartPagePrewiew from "./../../components/widgets/StartPage/preview";
import StartPageHeader from "./../../components/widgets/StartPage/header";
import StartPageHowWork from "./../../components/widgets/StartPage/howWork";
import StartPageExemplesTrade from "./../../components/widgets/StartPage/example";
import StartPageReady from "./../../components/widgets/StartPage/ready";
import StartPageFooter from "./../../components/widgets/StartPage/footer";

const StartPage = () => {
  return (
    <>
      <StartPageHeader />
      <StartPagePrewiew />
      <StartPageHowWork />
      <StartPageExemplesTrade />
      <StartPageReady />
      <StartPageFooter />
    </>
  );
};

export default StartPage;
