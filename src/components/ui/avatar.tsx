import { config } from "@/utils/config";

const Avatar = ({ avatar }: { avatar: string; name?: string }) => {
  return (
    <img
      className="w-9 h-9 rounded-full border-2 border-white shadow-sm object-cover"
      src={`${config.API_URL}/${avatar}`}
      alt="avatar"
    />
  );
};

export default Avatar;
