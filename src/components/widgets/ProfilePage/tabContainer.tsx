import TabsItemProfilePage from "@/components/ui/span/tabsItem";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setActive } from "@/store/slices/profileSlice";

const TabContainerProfilePage = () => {
  const activeTab = useAppSelector((state) => state.profileTabs);
  const dispatch = useAppDispatch();

  function handleClick(tab: string) {
    dispatch(setActive(tab));
  }

  return (
    <div className="w-full h-12 bg-gray-100 rounded-4xl grid grid-cols-3 p-1 max-[1280px]:w-screen">
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
