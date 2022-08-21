import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import loginUserSlice from "../users/slices/loginUserSlice";
import usersSlice from "../users/slices/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    loginUser: loginUserSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
