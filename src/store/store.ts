import { UserSlice } from "./slices/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import profileTabsReducer from "./slices/profileSlice";
import { authApi } from "@/api/authApi";

export const store = configureStore({
  reducer: {
    profileTabs: profileTabsReducer,
    user: UserSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
