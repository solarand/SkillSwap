import HeaderProfilePage from "@/components/widgets/ProfilePage/header";
import TabContainerProfilePage from "@/components/widgets/ProfilePage/ui/tabContainer";

const ProfilePage = () => {
  return (
    <div className="h-screen bg-gray-50">
      <HeaderProfilePage />
      <div className="w-[1280px] m-auto">
        <h1 className="text-header font-bold">Личный кабинет</h1>
        <TabContainerProfilePage />
        <div className="border bg-white w-[1280px] h-[700px] mt-5" />
      </div>
    </div>
  );
};

export default ProfilePage;
