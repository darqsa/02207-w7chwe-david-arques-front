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
  },
});

export const { loginUser: loginUserActionCreator } = loginUserSlice.actions;
export default loginUserSlice.reducer;
