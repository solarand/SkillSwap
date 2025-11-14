import type { IService } from "@/utils/types/serviceType";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export const UserServicesSlice = createSlice({
  name: "services",
  initialState: [] as IService[],
  reducers: {
    setServices: (state, action: PayloadAction<IService[]>) => {
      state = [...action.payload];
    },
  },
});

export const { setServices } = UserServicesSlice.actions;

export default UserServicesSlice.reducer;
