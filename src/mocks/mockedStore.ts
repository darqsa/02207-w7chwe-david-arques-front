import { configureStore, createReducer } from "@reduxjs/toolkit";
import { ProtoUser } from "../users/models/User";

const initialState: ProtoUser[] = [
  {
    image: "",
    username: "",
    id: "",
  },
];

const mockReducer = createReducer<ProtoUser[]>(initialState, (builder) => {
  builder.addDefaultCase((state: ProtoUser[]) => [...state]);
});

const mockStore = configureStore({ reducer: { users: mockReducer } });

export default mockStore;
