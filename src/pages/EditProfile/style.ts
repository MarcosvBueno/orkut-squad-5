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
  display: flex;
  flex-direction: column;
  gap: 32px;

  > button {
    width: 280px;
    height: 56px;
    border-radius: 16px;
    background: var(--dark-30);
    border: none;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    color: var(--brand-color);
    cursor: pointer;
    transition: 0.2s all ease-in-out;

    &:hover {
      background: var(--brand-color);
      color: var(--dark-30);
      scale: 1.03;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  width: 280px;
  height: 324px;
  background-color: var(--dark-30);
  justify-content: center;
  align-items: center;
  gap: 24px;

  > img {
    width: 170px;
    height: 170px;
    border-radius: 100px;
    border: 3px solid var(--brand-color);
    padding: 5px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
