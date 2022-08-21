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

export { FormStyled };
