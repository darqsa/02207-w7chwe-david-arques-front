import { PayloadAction } from "@reduxjs/toolkit";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { ProtoUser } from "../models/User";
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

  const registerUser = async (userData: ProtoUser) => {
    await fetch(`${apiUrl}users/register`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return { users, getUsers, registerUser };
};
export default useApi;
