import { useAppSelector } from "@/hooks/redux";
import { AvatarCard } from "./avatarCard";
import { ProfileInfoCard } from "./profileInfoEditCard";

const ProfileTab = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <div className="w-full flex justify-center max-[1280px]:w-screen">
      <div className="w-[calc(100%-32px)] max-w-[1280px] h-auto min-h-[700px] mt-5 flex flex-col min-[870px]:flex-row gap-5 px-4 mx-auto max-[1280px]:max-w-[1000px]">
        <AvatarCard
          avatar={user.avatar}
          name={user.name}
          surname={user.surname}
          rating={user.rating}
          completedProjects={user.completedProjects}
        />

        <ProfileInfoCard
          name={user.name}
          surname={user.surname}
          email={user.email}
          description={user.description}
          skills={user.skills}
        />
      </div>
    </div>
  );
};

export default ProfileTab;
