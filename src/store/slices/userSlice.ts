import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IUser, ProfileInfoCard } from "@/utils/types/profileType";

const localStorageNull: IUser = {} as IUser;

const initialStr = localStorage.getItem("UserData");
const initialState: IUser = initialStr
  ? (JSON.parse(initialStr) as IUser)
  : localStorageNull;

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

    authentication: (state, action: PayloadAction<IUser>) => {
      if (action.payload) {
        Object.assign(state, action.payload);
        localStorage.removeItem("UserData");
        localStorage.setItem("UserData", JSON.stringify(state));
      }
    },
  },
});

export const { updateInfo, updateAvatar, authentication } = UserSlice.actions;

export default UserSlice.reducer;
