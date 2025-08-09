import HeaderProfilePage from "@/components/widgets/ProfilePage/header";

const ProfilePage = () => {
  return (
    <div className="h-screen bg-gray-50">
      <HeaderProfilePage />
      <div className="w-[1280px] m-auto">
        <h1 className="text-header font-bold">Личный кабинет</h1>
        <div className="w-full h-12 bg-gray-100 rounded-4xl grid grid-cols-3">
          <span className="bg-white rounded-4xl text-cast-gray text-xl flex items-center justify-center cursor-pointer">
            Профиль
          </span>
          <span className="text-cast-gray text-xl flex items-center justify-center cursor-pointer">
            Мои услуги
          </span>
          <span className="text-cast-gray text-xl flex items-center justify-center cursor-pointer">
            История обменов
          </span>
        </div>
        <div className="border bg-white w-[1280px] h-[700px] mt-5" />
      </div>
    </div>
  );
};

export default ProfilePage;
