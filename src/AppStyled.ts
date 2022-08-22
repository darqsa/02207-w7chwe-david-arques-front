import styled from "styled-components";

const MainAppContainerStyled = styled.main`
  display: flex;
  gap: 40px;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
  }
  .app-container {
  }
`;

export { MainAppContainerStyled };
