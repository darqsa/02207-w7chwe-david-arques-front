import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import mockedStore from "../../mocks/mockedStore";
import UserList from "./UsersList";

describe("Given a UserList component", () => {
  describe("When invoked", () => {
    test("Then it should render as much robots as the store has", () => {
      render(
        <Provider store={mockedStore}>
          <UserList />
        </Provider>
      );

      const robots = screen.getAllByRole("img");

      robots.forEach((robot) => expect(robot).toBeInTheDocument());
    });
  });
});
