import { configureStore, createReducer } from "@reduxjs/toolkit";
import { User } from "../users/models/User";

const initialState: User[] = [
  {
    enemies: [],
    friends: [],
    image: "",
    username: "",
    id: "",
  },
];

const mockReducer = createReducer<User[]>(initialState, (builder) => {
  builder.addDefaultCase((state: User[]) => [...state]);
});

const mockStore = configureStore({ reducer: { users: mockReducer } });

export default mockStore;
