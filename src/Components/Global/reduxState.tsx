import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface userData {
  name: string;
  userName: string;
  email: string;
  password: string;
  phoneNumber: string;
  confirmPassword: string;
  _id: any;
}

interface AdminData {
  name: string;
  userName: string;
  email: string;
  password: string;
  phoneNumber: string;
  confirmPassword: string;
  _id: any;
}

interface MarchInterface {
  TeamA: string;
  TeamB: string;
  Odds: string;
}
const initialState = {
  Client: {} as userData | null,
  Admin: {} as AdminData | null,
  Marches: {} as MarchInterface | null,
};

const ReduxState = createSlice({
  name: "easyPay",
  initialState,
  reducers: {
    registerClient: (state, { payload }: PayloadAction<userData>) => {
      state.Client = payload;
    },
    AdminLogin: (state, { payload }: PayloadAction<AdminData>) => {
      state.Admin = payload;
    },
    logOut: (state) => {
      state.Client = null;
    },
    AllMarches: (state, { payload }: PayloadAction<MarchInterface>) => {
      state.Marches = payload;
    },
  },
});

export const { registerClient, logOut, AllMarches } = ReduxState.actions;

export default ReduxState.reducer;
