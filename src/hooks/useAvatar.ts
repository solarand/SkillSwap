import { useEffect, useState } from "react";
import { useAppSelector } from "./redux";

export const useAvatar = () => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    if (user?.avatar) {
      const timestamp = Date.now();
      setAvatarUrl(`http://localhost:5000/${user.avatar}?t=${timestamp}`);
    } else {
      setAvatarUrl(null);
    }
  }, [user?.id, user?.avatar]);

  return avatarUrl;
};
