import FilterSection from "@/components/widgets/ServicesPage/filterSection";
import HeaderServices from "@/components/widgets/ServicesPage/headerSevices";
import MainContent from "@/components/widgets/ServicesPage/mainContent";

const ServiceCatalog = () => {
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
