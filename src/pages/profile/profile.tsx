import HeaderProfilePage from "@/components/widgets/ProfilePage/header";
import TabContainerProfilePage from "@/components/widgets/ProfilePage/ui/tabContainer";
import { useAppSelector } from "@/hooks/redux";
import ProfileTab from "@/components/widgets/ProfilePage/profileTab";
import { MyServices } from "@/components/widgets/ProfilePage/ui/mySrevices";

const ProfilePage = () => {
  const tabs = useAppSelector(
    (state) => state.profileTabs.filter((el) => el.isActive)[0].name
  );

  return (
    <div className="h-screen bg-gray-50">
      <HeaderProfilePage />
      <div className="w-[1280px] m-auto">
        <h1 className="text-header font-bold max-[870px]:text-center max-[870px]:w-screen max-[870px]:mt-2 max-[870px]:mb-2">
          Личный кабинет
        </h1>
        <TabContainerProfilePage />
        {tabs === "Профиль" && (
          // <div className="border bg-white w-[1280px] h-[700px] mt-5" />

          <ProfileTab />
        )}
        {tabs === "Мои услуги" && (
          //<div className="border bg-amber-500 w-[1280px] h-[700px] mt-5" />
          <MyServices />
        )}
        {tabs === "История обменов" && (
          <div className="border bg-blue-800 w-[1280px] h-[700px] mt-5" />
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
