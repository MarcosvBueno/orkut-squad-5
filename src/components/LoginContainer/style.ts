import styled from "styled-components";

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 100px;

  & > * {
    margin-right: 30px;
  }

  & > *:last-child {
    margin-right: 0;
  }

  @media (max-width: 576px) {
    flex-direction: column;

    & > * {
      margin-right: 0;
      margin-top: 20px;
    }

    & > *:first-child {
      display: none;
    }
  }

  @media (min-width: 577px) and (max-width: 768px) {
    flex-direction: row;

    & > * {
      margin-right: 20px;
      margin-top: 0;
    }

    & > *:first-child {
      display: initial;
    }
  }

  @media (min-width: 769px) {
    & > * {
      margin-right: 20px;
      margin-top: 0;
    }
  }
`;

export { StyledContainer };
