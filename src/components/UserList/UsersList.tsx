import { useEffect } from "react";
import useApi from "../../users/hooks/useApi";
import UserCard from "../UserCard/UserCard";

const UserList = (): JSX.Element => {
  const { users, getUsers } = useApi();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div className="user-list-container">
      <h2 className="user-list-container__heading">👤Current Users:</h2>
      <ul className="user-list-container__user-list">
        {users.map((user) => (
          <li className="user-list-container__list-item">
            <UserCard user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserList;
