import styled from "styled-components";

export const Container = styled.main`
  margin: 0 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  margin-top: 80px;
  margin-bottom: 54px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProfileSide = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
`;
