import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../models/User";

const initialState: User[] = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loadUsers: (previousUsers, action: PayloadAction<User[]>) => [
      ...action.payload,
    ],
  },
});

export const { loadUsers: loadUsersActionCreator } = usersSlice.actions;
export default usersSlice.reducer;
