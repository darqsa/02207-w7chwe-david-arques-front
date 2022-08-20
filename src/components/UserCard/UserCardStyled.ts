import styled from "styled-components";

const UserContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  align-items: center;
  gap: 10px;
  background-color: #a5c9ca;
  padding: 30px 20px;
  border-radius: 10px;
  margin: 20px;
  border: 1px solid #3a3b3c20;
  .user-container {
    &__image-container {
      border-radius: 50%;
      overflow: hidden;
      width: 150px;
      height: 150px;
      border: 6px solid grey;
      position: relative;

      &--friend {
        border: 6px solid #5bb318;
      }
      &--friend {
        border: 6px solid #d61c4e;
      }
    }
    &__button-container {
      display: flex;
      flex-direction: column;
      width: 150px;
      height: 150px;
      align-items: center;
      justify-content: center;
      z-index: 1;
      position: absolute;
      top: 0px;
      border-radius: 50%;
      opacity: 0;
      transition: 0.15s;
      &:hover {
        opacity: 100;
        background-color: #2c333370;
      }
    }
    &__button {
      cursor: pointer;
    }
    &__image {
      width: 100%;
      height: 100;
      object-fit: cover;
    }
    &__name {
      font-weight: bold;
      color: #3a3b3c;
      font-size: 1.4em;
      transition: 0.1s;
      &:hover {
        color: #e7f6f2;
        cursor: pointer;
      }
    }
  }
`;

export { UserContainerStyled };
