interface TabsItemProps {
  isActive: boolean;
  text: string;
  onClick: (text: string) => void;
}

const TabsItemProfilePage = ({ isActive, text, onClick }: TabsItemProps) => {
  return (
    <span
      className={` text-cast-gray text-xl flex items-center justify-center cursor-pointer ${isActive && "rounded-4xl bg-white"} max-[500px]:text-xs`}
      onClick={() => onClick(text)}
    >
      {text}
    </span>
  );
};

export default TabsItemProfilePage;
