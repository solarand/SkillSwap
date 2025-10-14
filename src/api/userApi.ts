import type { ProfileFormData } from "@/utils/types/profileType";
import { api } from "./api";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    updateAvatar: build.mutation<
      { user: string; msg: string },
      { avatar: string; id: string }
    >({
      query: (data) => ({
        url: "/api/updateAvatar",
        method: "PATCH",
        body: data,
      }),
    }),
    updateUser: build.mutation<
      { status: number; msg: string },
      { id: string; data: ProfileFormData }
    >({
      query: (data) => ({
        url: "/api/updateInfo",
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const { useUpdateAvatarMutation, useUpdateUserMutation } = userApi;
