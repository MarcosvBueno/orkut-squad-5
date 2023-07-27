import styled from "styled-components";

export const Details = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: left;
  @media (max-width: 768px) {
    width: 100%;
  }

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }

  h2 {
    color: var(--dark-20);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }

  p {
    color: var(--dark-10);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    border-radius: 30px;
    border: 1px solid var(--brand-color);
    padding: 2px 16px;
    transition: all 0.2s ease-in-out;
  }

  p:hover {
    background-color: var(--brand-color);
    color: var(--dark-40);
  }

  button {
    border: none;
    background: none;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    color: var(--brand-color);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  button:hover {
    scale: 1.1;
  }
`;
export const ParagraphHiddenInMobile = styled.p`
  @media (max-width: 768px) {
    display: none;
  }
`;
