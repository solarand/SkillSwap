import type { IGetForCatalog, IGetServices } from "@/utils/types/serviceType";
import { api } from "./api";

export const catalogApi = api.injectEndpoints({
  endpoints: (build) => ({
    getServices: build.query<IGetForCatalog, IGetServices>({
      query: (params) => ({
        url: `/api/catalog`,
        method: "GET",
        params: {
          page: params.page,
          filter: params.filter,
          sort: params.sort,
        },
      }),
    }),
  }),
});

export const { useGetServicesQuery } = catalogApi;
