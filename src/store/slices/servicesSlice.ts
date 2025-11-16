import type { IService } from "@/utils/types/serviceType";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export const UserServicesSlice = createSlice({
  name: "services",
  initialState: [] as IService[],
  reducers: {
    setServices: (_state, action: PayloadAction<IService[]>) => {
      return action.payload;
    },

    addServices: (state, action: PayloadAction<IService>) => {
      state.push({
        ...action.payload,
      });
    },
    deleteServices: (state, action: PayloadAction<string>) => {
      return state.filter((el) => {
        return el.id !== action.payload;
      });
    },
    updateUserService: (state, action: PayloadAction<IService>) => {
      return state.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
    },
  },
});

export const { setServices, addServices, deleteServices, updateUserService } =
  UserServicesSlice.actions;

export default UserServicesSlice.reducer;
