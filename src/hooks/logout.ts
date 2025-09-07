import { useLogoutMutation } from "@/api/authApi";
import { useAppDispatch, useAppSelector } from "./redux";
import { clearToken } from "@/store/slices/authSlice";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const token = useAppSelector((state) => state.auth.refreshToken);
  const dispatch = useAppDispatch();
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  const logoutAccount = async () => {
    try {
      await logout(token).unwrap();
      dispatch(clearToken());
      await navigate("/");
    } catch (e) {
      console.log("Что-то пошло не так", e);
    }
  };

  return logoutAccount;
};
