import { configureStore } from "@reduxjs/toolkit";
import profileTabsReducer from "./slices/profileSlice";

export const store = configureStore({
  reducer: {
    profileTabs: profileTabsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
