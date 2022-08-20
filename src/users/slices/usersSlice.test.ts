import { ProtoUser } from "../models/User";
import usersSlice, { loadUsersActionCreator } from "./usersSlice";

describe("Given a usersSlice function", () => {
  describe("When invoked with an initial state as previous users and a loadUsers with a fakeUser inside", () => {
    test("Then it should return an array with the fakeUser", () => {
      const initialState: ProtoUser[] = [];
      const fakeUser: ProtoUser[] = [
        {
          id: "patata",
          image: "patata2",
          username: "mrpotato",
        },
      ];

      const users = usersSlice(initialState, loadUsersActionCreator(fakeUser));

      expect(users).toStrictEqual(fakeUser);
    });
  });
});
