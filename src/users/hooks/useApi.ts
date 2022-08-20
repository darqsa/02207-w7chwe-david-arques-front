import { PayloadAction } from "@reduxjs/toolkit";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { ProtoUser } from "../models/User";
import { loadUsersActionCreator } from "../slices/usersSlice";

const useApi = () => {
  const url = process.env.API_URL;
  const dispatch = useDispatch();

  const getUsers = useCallback(async () => {
    const response = await fetch(`${url}users`);
    const { users }: { users: ProtoUser[] } = await response.json();

    dispatch<PayloadAction<ProtoUser[]>>(loadUsersActionCreator(users));
  }, [dispatch, url]);

  return { getUsers };
};
export default useApi;
