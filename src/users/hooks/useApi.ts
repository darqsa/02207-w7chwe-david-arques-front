import { PayloadAction } from "@reduxjs/toolkit";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { fetchToken } from "../../utils/auth";
import { ProtoUser, User } from "../models/User";
import { loginUserActionCreator } from "../slices/loginUserSlice";
import { loadUsersActionCreator } from "../slices/usersSlice";

const apiUrl = process.env.REACT_APP_USERS_API_URL;

const useApi = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users);

  const getUsers = useCallback(async () => {
    const response = await fetch(`${apiUrl}users`);
    const { users }: { users: ProtoUser[] } = await response.json();

    dispatch<PayloadAction<ProtoUser[]>>(loadUsersActionCreator(users));
  }, [dispatch]);

  const loginUser = async (userData: ProtoUser) => {
    const data = await fetch(`${apiUrl}users/login`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-type": "application/json",
      },
    });

    const {
      user: { token },
    } = await data.json();
    const user = fetchToken(token);

    dispatch<PayloadAction<User>>(loginUserActionCreator(user));
    localStorage.setItem("token", user.token);
  };

  const registerUser = async (userData: ProtoUser) => {
    await fetch(`${apiUrl}users/register`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return { users, getUsers, registerUser, loginUser };
};
export default useApi;
