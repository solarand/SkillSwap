import { api } from "./api";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    updateInfoUser: build.mutation<any, { avatar: string; id: string }>({
      query: (data) => ({
        url: "/api/update",
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const { useUpdateInfoUserMutation } = userApi;
