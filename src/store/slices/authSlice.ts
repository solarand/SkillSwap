import { useCheckAuthAPIQuery } from "@/api/authApi";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuth: boolean;
  accessToken: string;
  refreshToken: string;
}

interface AuthPayload {
  accessToken: string;
  refreshToken: string;
}

const initialState: AuthState = {
  isAuth: false,
  accessToken: "",
  refreshToken: "",
};

const authSluce = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setTokens(state, action: PayloadAction<AuthPayload>) {
      if (action.payload) {
        state.isAuth = true;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        localStorage.setItem("token", action.payload.accessToken);
      }
    },
    clearToken(state) {
      state.isAuth = false;
      state.accessToken = "";
      state.refreshToken = "";
      localStorage.removeItem("token");
      localStorage.removeItem("UserData");
    },

    isNotUnauthorized(state) {
      state.isAuth = false;
    },
  },
});

export const { setTokens, clearToken, isNotUnauthorized } = authSluce.actions;
export default authSluce.reducer;
