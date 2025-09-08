import { useCheckAuthAPIQuery } from "@/api/authApi";
import { useAppDispatch } from "./redux";
import { isNotUnauthorized, setTokens } from "@/store/slices/authSlice";
import { authentication } from "@/store/slices/userSlice";
import { useEffect } from "react";

export const useCheckAuth = () => {
  const dispatch = useAppDispatch();
  const { data, error } = useCheckAuthAPIQuery();

  useEffect(() => {
    if (data) {
      dispatch(
        setTokens({
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
        })
      );
      dispatch(authentication(data.user));
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (error) {
      dispatch(isNotUnauthorized());
    }
  }, [error, dispatch]);

  return { isLoading: !data && !error, isAuthenticated: !!data };
};
