import type { IService } from "@/utils/types/serviceType";
import { api } from "./api";

export const servicesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUserServices: build.query<IService[], void>({
      query: () => ({
        url: `/api/userServices/`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUserServicesQuery } = servicesApi;
