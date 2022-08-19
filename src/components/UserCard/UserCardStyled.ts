import styled from "styled-components";

const UserContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  align-items: center;
  gap: 20px;
  background-color: #a5c9ca;
  padding: 30px 20px;
  border-radius: 50px;
  margin: 20px;
  .user-container {
    &__image {
      cursor: pointer;
    }
    &__name {
      font-weight: bold;
      color: #2c3333;
      text-shadow: 1px 2px 2px #00000010;
      transition: 0.1s;
      &:hover {
        color: #e7f6f2;
        cursor: pointer;
        text-shadow: 1px 2px 2px #00000050;
      }
    }
  }
`;

export { UserContainerStyled };
