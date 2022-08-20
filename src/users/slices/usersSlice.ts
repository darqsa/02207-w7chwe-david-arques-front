import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProtoUser } from "../models/User";

const initialState: ProtoUser[] = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loadUsers: (previousUsers, action: PayloadAction<ProtoUser[]>) => [
      ...action.payload,
    ],
  },
});

export const { loadUsers: loadUsersActionCreator } = usersSlice.actions;
export default usersSlice.reducer;
