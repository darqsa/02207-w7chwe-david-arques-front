import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  background-color: #dee2e6;
  padding: 40px 20px;
  gap: 15px;
  border-radius: 20px;
  height: 300px;
  .form {
    &__heading {
      margin: 0;
      font-size: 1.6em;
    }
    &__input {
      background-color: #e9ecef;
    }
  }
`;

export { FormStyled };
