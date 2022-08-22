import styled from "styled-components";

const FormStyled = styled.form`
  background-color: #dee2e6;
  padding: 40px 20px;
  height: 140px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 30px;
  .form {
    &__heading {
      margin: 0;
      font-size: 1.6em;
    }

    &__input-container {
      display: flex;
      gap: 10px;
      padding: 10px 0 20px 0;
    }
  }
`;

const LoginContainerStyled = styled.div`
  width: 200px;
  gap: 20px;
  background-color: #dee2e6;
  padding: 40px 20px;
  height: auto;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 600px) {
    width: 85%;
  }
  .logged-container {
    &__text {
      font-size: 1.4em;
    }
    &__button {
      width: 50%;
      color: grey;
      border: 1px solid grey;
      &:hover {
        border: 1px solid black;
      }
    }
  }
`;

export { FormStyled, LoginContainerStyled };
