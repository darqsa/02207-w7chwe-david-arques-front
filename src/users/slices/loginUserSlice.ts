import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../models/User";

const initialState: User = {
  id: "",
  token: "",
  username: "",
};

const loginUserSlice = createSlice({
  name: "loginUser",
  initialState,
  reducers: {
    loginUser: (previousUsers, action: PayloadAction<User>) => action.payload,
    logoutUser: (previousUsers) => initialState,
  },
});

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = loginUserSlice.actions;
export default loginUserSlice.reducer;
