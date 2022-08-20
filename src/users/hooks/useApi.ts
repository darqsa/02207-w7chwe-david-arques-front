import { PayloadAction } from "@reduxjs/toolkit";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { ProtoUser } from "../models/User";
import { loadUsersActionCreator } from "../slices/usersSlice";

const useApi = () => {
  // const url = process.env.API_URL as string;
  const url = "http://localhost:7452/";
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users);

  const getUsers = useCallback(async () => {
    const response = await fetch(`${url}users`);
    const { users }: { users: ProtoUser[] } = await response.json();

    dispatch<PayloadAction<ProtoUser[]>>(loadUsersActionCreator(users));
  }, [dispatch, url]);

  const registerUser = async (userData: ProtoUser) => {
    await fetch(`${url}users/register`, {
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
