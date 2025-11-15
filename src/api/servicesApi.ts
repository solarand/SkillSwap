import type { IService } from "@/utils/types/serviceType";
import { api } from "./api";
import type { IResponse } from "@/utils/types/api";

export const servicesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUserServices: build.query<IService[], void>({
      query: () => ({
        url: `/api/userServices/`,
        method: "GET",
      }),
    }),
    addUserService: build.mutation<IResponse, IService>({
      query: (data) => ({
        url: "/api/createService/",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetUserServicesQuery, useAddUserServiceMutation } =
  servicesApi;
