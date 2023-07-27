import { styled } from "styled-components";


export const FooterContainer = styled.footer`

  background-color: var(--dark-30);
  height: 48px;
  text-align: center;
  padding: 10px;
  margin-top: 193px;
 
  h2{
font-family: SF Pro Display;
font-size: 18px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0px;
    color: var( --brand-color);
  }
  
  @media (max-width: 768px) {
    margin-top: 80px;

    h2 {
      font-size: 16px;
    }
  }

`;
