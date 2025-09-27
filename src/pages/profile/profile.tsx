import HeaderProfilePage from "@/components/widgets/ProfilePage/header";
import TabContainerProfilePage from "@/components/widgets/ProfilePage/tabContainer";
import { useAppSelector } from "@/hooks/redux";
import ProfileTab from "@/components/widgets/ProfilePage/profileTab";
import { MyServices } from "@/components/widgets/ProfilePage/mySrevices";
import { ExchangeHistory } from "@/components/widgets/ProfilePage/exchangeHistory";
import { useEffect } from "react";
import { useCheckAuth } from "@/hooks/checkAuth";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const tabs = useAppSelector(
    (state) => state.profileTabs.filter((el) => el.isActive)[0].name
  );

  const { isLoading } = useCheckAuth();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      void navigate("/login");
    }
  }, [token, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderProfilePage />
      <div className="w-[1280px] m-auto">
        <h1 className="text-header font-bold max-[870px]:text-center max-[870px]:w-screen max-[870px]:mt-2 max-[870px]:mb-2">
          Личный кабинет
        </h1>
        <TabContainerProfilePage />
        {tabs === "Профиль" && <ProfileTab />}
        {tabs === "Мои услуги" && <MyServices />}
        {tabs === "История обменов" && <ExchangeHistory />}
      </div>
    </div>
  );
};

export default ProfilePage;
