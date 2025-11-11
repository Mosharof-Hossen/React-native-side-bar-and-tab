import { LoginResponseData, User } from "@/schema/auth";
import { RootState } from "@/store/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type AuthState = {
  token: string | null;
  user: User | null;
};

const initialState: AuthState = {
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<LoginResponseData>) => {
      console.log(action);
      state.token = action.payload?.data?.access_token ?? null;
      state.user = action.payload?.data?.user ?? null;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const useCurrentUser = (state:RootState) => state.auth.user
export const useCurrentToken = (state:RootState) => state.auth.token

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;

