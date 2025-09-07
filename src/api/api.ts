import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn, FetchArgs } from "@reduxjs/toolkit/query";
import type { RootState } from "@/store/store";
import { config } from "@/utils/config";
import { clearToken, setTokens } from "@/store/slices/authSlice";

interface RefreshResponse {
  accessToken: string;
  refreshToken: string;
}

const baseQuery = fetchBaseQuery({
  baseUrl: config.API_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const token = state.auth.accessToken;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  unknown
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    try {
      const state = api.getState() as RootState;
      const refreshToken = state.auth.refreshToken;

      if (refreshToken) {
        const refreshResult = await baseQuery(
          { url: "/refresh", method: "POST", body: { refreshToken } },
          api,
          extraOptions
        );

        if (refreshResult.data) {
          const refreshData = refreshResult.data as RefreshResponse;
          if (typeof refreshData.accessToken === "string") {
            api.dispatch(setTokens(refreshData));
            result = await baseQuery(args, api, extraOptions);
          }
        } else {
          api.dispatch(clearToken());
        }
      } else {
        api.dispatch(clearToken());
      }
    } catch {
      api.dispatch(clearToken());
    }
  }

  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithReauth,
  reducerPath: "api",
  tagTypes: [],
  endpoints: () => ({}),
});
