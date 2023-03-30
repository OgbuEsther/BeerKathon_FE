import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface loginClient {
  email: string;
  password: string;
}

interface userData {
  name: string;
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
  confirmPassword: string;
}

const initialState = {
  Client: {} as userData | null,
};

const ReduxState = createSlice({
  name: "easyPay",
  initialState,
  reducers: {
    registerClient: (state, { payload }: PayloadAction<userData>) => {
      state.Client = payload;
    },
    logOut: (state) => {
      state.Client = null;
    },
  },
});

export const { registerClient, logOut } = ReduxState.actions;

export default ReduxState.reducer;
