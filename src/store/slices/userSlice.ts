import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

import testImg from "@/assets/png/start-page/eng.jpg";

export interface IUser {
  name: string;
  surname: string;
  avatar: string;
  skills: string[];
  rating: number;
  completedProjects: number;
  email: string;
  description: string;
}

interface ProfileInfoCard {
  name: string;
  surname: string;
  email: string;
  description: string;
  skills: string[];
}

const localStorageNull: IUser = {
  name: "Иван",
  surname: "Иванов",
  avatar: testImg,
  skills: ["Frontend", "UI/UX", "React", "TypeScript"],
  rating: 4.8,
  completedProjects: 24,
  email: "ivanov@gmail.com",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
};

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
  },
});

export const { updateInfo, updateAvatar } = UserSlice.actions;

export default UserSlice.reducer;
