import { useState } from "react";
import TabsItemProfilePage from "./tabsItem";

const TabContainerProfilePage = () => {
  const [activeTab, setActiveTab] = useState([
    {
      name: "Профиль",
      isActive: true,
    },
    {
      name: "Мои услуги",
      isActive: false,
    },
    {
      name: "История обменов",
      isActive: false,
    },
  ]);
  function handleClick(tab: string) {
    setActiveTab((prev) =>
      prev.map((el) =>
        el.name === tab ? { ...el, isActive: true } : { ...el, isActive: false }
      )
    );
  }

  return (
    <div className="w-full h-12 bg-gray-100 rounded-4xl grid grid-cols-3">
      {activeTab.map((el) => (
        <TabsItemProfilePage
          key={el.name}
          text={el.name}
          isActive={el.isActive}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default TabContainerProfilePage;
