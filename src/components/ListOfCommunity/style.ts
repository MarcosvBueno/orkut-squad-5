import styled from "styled-components";

export const CommunityList = styled.div`

display: flex;
  flex-direction: column;
  width: 280px;
  background-color: var(--dark-30);
  border-radius: 16px;
  padding: 24px;
  gap: 24px;

  h3 {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    color: var(--dark-10);
  }

  button {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    color: var(--brand-color);
    background: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  button:hover {
    scale: 1.1;
  }


  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center; 
  }
  
  img {
    width: 56px;
    height: 56px;
    border-radius: 12px;
  }

  :nth-child(1) {
    margin-bottom: 4px;
  }

  @media (max-width: 968px) {
    width: 100%;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 30px;
    
    h3 {
      font-size: 20px;
    }

    button{
      font-size: 18px;
    }
  }

  @media (max-width: 560px) {
      width: 100%;
      justify-content: center;
      margin: 0 auto;
      
      h3 {
        font-size: 16px;
      }

      button{
        font-size: 18px;
      }
    }

`;