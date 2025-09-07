import type { IAuthResponse, RegisterFormValues } from "@/utils/types/authType";
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
    logout: build.mutation<string, string>({
      query: (refresh) => ({
        url: "/api/logout",
        method: "POST",
        body: refresh,
      }),
    }),
  }),
});

export const { useRegistrationMutation, useLogoutMutation } = authApi;
