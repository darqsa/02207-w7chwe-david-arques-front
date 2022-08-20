import { ProtoUser } from "../../users/models/User";
import { UserContainerStyled } from "./UserCardStyled";

interface UserCardProps {
  user: ProtoUser;
}
const UserCard = ({ user }: UserCardProps): JSX.Element => {
  return (
    <UserContainerStyled className="user-container">
      <div className="user-container__image-container">
        <img
          className="user-container__image"
          src={user.image}
          alt={`${user.username} profile avatar`}
          height={150}
        />
        <div className="user-container__button-container">
          <button className="user-container__button">Friend</button>
          <button className="user-container__button">Make enemy</button>
        </div>
      </div>
      <span className="user-container__name">{user.username}</span>
    </UserContainerStyled>
  );
};
export default UserCard;
