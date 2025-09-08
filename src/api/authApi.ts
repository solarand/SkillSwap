import type {
  IAuthResponse,
  ILoginFormValues,
  RegisterFormValues,
} from "@/utils/types/authType";
import { api } from "@/api/api";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    registration: build.mutation<IAuthResponse, RegisterFormValues>({
      query: (data) => ({
        url: "/api/registration",
        method: "POST",
        body: data,
      }),
    }),
    login: build.mutation<IAuthResponse, ILoginFormValues>({
      query: (data) => ({
        url: "/api/login",
        method: "POST",
        body: data,
      }),
    }),
    logout: build.mutation<string, string>({
      query: (refresh) => ({
        url: "/api/logout",
        method: "POST",
        body: refresh,
      }),
    }),

    checkAuthAPI: build.query<IAuthResponse, void>({
      query: () => ({
        url: "/api/refresh",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useRegistrationMutation,
  useLogoutMutation,
  useLoginMutation,
  useCheckAuthAPIQuery,
} = authApi;
