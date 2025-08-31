import { config } from "@/utils/config";
import type { IAuthResponse, RegisterFormValues } from "@/utils/types/authType";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: config.API_URL,
    credentials: "include",
  }),
  endpoints: (build) => ({
    registration: build.mutation<IAuthResponse, RegisterFormValues>({
      query: (data) => ({
        url: "/api/registration",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useRegistrationMutation } = authApi;
