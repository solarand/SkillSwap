import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IUser, ProfileInfoCard } from "@/utils/types/profileType";

const localStorageNull: IUser = {} as IUser;
const initialStr = localStorage.getItem("UserData");
const initialState: IUser = initialStr
  ? (() => {
      try {
        return JSON.parse(initialStr) as IUser;
      } catch (e) {
        return localStorageNull;
      }
    })()
  : localStorageNull;

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authentication: (state, action: PayloadAction<IUser>) => {
      if (action.payload) {
        localStorage.removeItem("UserData");
        localStorage.setItem("UserData", JSON.stringify(action.payload));
        return { ...action.payload };
      }
      return state;
    },
    updateInfo: (state, action: PayloadAction<ProfileInfoCard>) => {
      if (action.payload) {
        const newState = { ...state, ...action.payload };
        localStorage.setItem("UserData", JSON.stringify(newState));
        return newState;
      }
      return state;
    },
    updateAvatar: (state, action: PayloadAction<string>) => {
      if (action.payload) {
        state.avatar = action.payload;
        localStorage.setItem("UserData", JSON.stringify(state));
      }
    },
    clearInLogout: () => {
      localStorage.clear();
      return localStorageNull;
    },
  },
});

export const { updateInfo, updateAvatar, authentication, clearInLogout } =
  UserSlice.actions;

export default UserSlice.reducer;
