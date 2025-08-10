import testImg from "@/assets/png/start-page/eng.jpg";
import { AvatarCard } from "./ui/avatarCard";
import { ProfileInfoCard } from "./ui/profileInfoCard";

interface User {
  name: string;
  surname: string;
  avatar: string;
  skills: string[];
  rating: number;
  completedProjects: number;
  email: string;
  description: string;
}

const ProfileTab = () => {
  const user: User = {
    name: "Иван",
    surname: "Иванов",
    avatar: testImg,
    skills: ["Frontend", "UI/UX", "React", "TypeScript"],
    rating: 4.8,
    completedProjects: 24,
    email: "ivanov@gmail.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  };

  return (
    <div className="w-full flex justify-center max-[1280px]:w-screen">
      <div className="w-[calc(100%-32px)] max-w-[1280px] h-auto min-h-[700px] mt-5 flex flex-col md:flex-row gap-5 px-4 mx-auto max-[1280px]:max-w-[1000px]">
        <AvatarCard
          avatar={user.avatar}
          name={user.name}
          surname={user.surname}
          rating={user.rating}
          completedProjects={user.completedProjects}
        />

        <ProfileInfoCard
          name={user.name}
          email={user.email}
          description={user.description}
          skills={user.skills}
        />
      </div>
    </div>
  );
};

export default ProfileTab;
