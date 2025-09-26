import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  name: string;
  isActive: boolean;
}

const initialState: CounterState[] = [
  {
    name: "Профиль",
    isActive: true,
  },
  {
    name: "Мои услуги",
    isActive: false,
  },
  {
    name: "История обменов",
    isActive: false,
  },
];

export const profileTabsSlice = createSlice({
  name: "profileTabs",
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<string>) => {
      state.map((el) => {
        if (el.name === action.payload) {
          el.isActive = true;
        } else {
          el.isActive = false;
        }
      });
    },
  },
});

export const { setActive } = profileTabsSlice.actions;

export default profileTabsSlice.reducer;
