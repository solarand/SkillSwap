import { UserSlice } from "./slices/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import profileTabsReducer from "./slices/profileSlice";
import authReducer from "./slices/authSlice";
import { api } from "@/api/api";

export const store = configureStore({
  reducer: {
    profileTabs: profileTabsReducer,
    user: UserSlice.reducer,
    auth: authReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
