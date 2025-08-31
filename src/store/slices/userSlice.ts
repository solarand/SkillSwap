import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IUser, ProfileInfoCard } from "@/utils/types/profileType";
import type { IAuthResponse } from "@/utils/types/authType";

const localStorageNull: IUser = {} as IUser;

const initialStr = localStorage.getItem("UserData");
const initialState: IUser = initialStr
  ? (JSON.parse(initialStr) as IUser)
  : localStorageNull;

export let isAuth = false;

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateInfo(state, action: PayloadAction<ProfileInfoCard>) {
      if (action.payload) {
        Object.assign(state, action.payload);
        localStorage.setItem("UserData", JSON.stringify(state));
      }
    },
    updateAvatar: (state, action: PayloadAction<string>) => {
      if (action.payload) {
        state.avatar = action.payload;
        const userStr = localStorage.getItem("UserData");
        const user: IUser = userStr ? (JSON.parse(userStr) as IUser) : state;

        user.avatar = action.payload;

        localStorage.setItem("UserData", JSON.stringify(user));
      }
    },

    registrationAction: (state, action: PayloadAction<IAuthResponse>) => {
      if (action.payload) {
        Object.assign(state, action.payload.user);
        localStorage.removeItem("UserData");
        localStorage.setItem("UserData", JSON.stringify(state));
        localStorage.setItem("token", action.payload.accessToken);
        isAuth = true;
      }
    },
  },
});

export const { updateInfo, updateAvatar, registrationAction } =
  UserSlice.actions;

export default UserSlice.reducer;
