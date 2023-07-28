import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  background-color: var(--dark-30);
  bottom: 0;
  height: 48px;
  left: 0;
  padding: 10px;
  position: relative;
  text-align: center;
  width: 100%;

  h2 {
    color: var(--brand-color);
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 24px;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 14px;
    }
  }
`;
