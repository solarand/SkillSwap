import FilterSection from "@/components/widgets/ServicesPage/filterSection";
import HeaderServices from "@/components/widgets/ServicesPage/headerSevices";
import MainContent from "@/components/widgets/ServicesPage/mainContent";
import { useCheckAuth } from "@/hooks/checkAuth";
import { useEffect } from "react";
import LoginPage from "../auth/loginPage";

const ServiceCatalog = () => {
  const { isLoading, isAuthenticated } = useCheckAuth();
  const token = localStorage.getItem("token");

  useEffect(() => {}, [token]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <div className="min-h-screen bg-gray-50 md:overflow-y-hidden">
      <HeaderServices />
      <div className="flex flex-col md:flex-row md:h-[calc(100vh-80px)] border-t border-gray-200">
        <FilterSection />
        <MainContent />
      </div>
    </div>
  );
};

export default ServiceCatalog;
