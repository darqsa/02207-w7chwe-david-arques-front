import { UserContainerStyled } from "./UserCardStyled";

const UserCard = (): JSX.Element => {
  return (
    <UserContainerStyled className="user-container">
      <img
        className="user-container__image"
        src="https://navigatedlearning.org/assets/gooru/profile-d8cfa58723f9c1daaa7ff6986738f816.png"
        alt="profile"
        width={150}
      />
      <span className="user-container__name">@DavidPutoAmo</span>
    </UserContainerStyled>
  );
};
export default UserCard;
