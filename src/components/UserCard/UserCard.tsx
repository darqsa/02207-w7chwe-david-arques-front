import { UserContainerStyled } from "./UserCardStyled";

const UserCard = (): JSX.Element => {
  return (
    <UserContainerStyled className="user-container">
      <div className="user-container__image-container user-container__image-container--friend">
        <img
          className="user-container__image"
          src="https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
          alt="profile"
          height={160}
        />
        <div className="user-container__button-container">
          <button className="user-container__button">Unfriend</button>
          <button className="user-container__button">Make enemy</button>
        </div>
      </div>
      <span className="user-container__name">@DavidPutoAmo</span>
    </UserContainerStyled>
  );
};
export default UserCard;
