import { UserSlice } from "./slices/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import profileTabsReducer from "./slices/profileSlice";
import authReducer from "./slices/authSlice";
import { api } from "@/api/api";
import { UserServicesSlice } from "./slices/servicesSlice";

export const store = configureStore({
  reducer: {
    profileTabs: profileTabsReducer,
    user: UserSlice.reducer,
    auth: authReducer,
    services: UserServicesSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
