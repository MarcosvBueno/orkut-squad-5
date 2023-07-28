import styled from "styled-components";


export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;


 > button {
  width: 100%;
  height: 56px;
  border-radius: 16px;
  border: none;
  color: var(--brand-color);
  background-color: var(--dark-30);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
 }

  button:hover {
    background-color: var(--brand-color);
    color : var(--dark-30);
    scale: 1.030;
  }

  @media (max-width: 968px) {
     justify-content: center;
     align-items: center;
    
    > button {
      width: 100%;
      justify-content: center;
      align-items: center;
      margin-bottom: 16px;
      @media (max-width: 768px) {
        width: 100%;
      }
    }
  
  }


`;


export const UserProfile = styled.div`
  width: 280px;
  height: 324px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--dark-30);
  border-radius: 16px;
  color: var(--dark-10);
  gap: 24px;

  > img {
    width: 170px;
    height: 170px;
    border-radius: 100px;
    border: 3px solid var(--brand-color);
    padding: 5px
  }

  > h2 {
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  }

  > p {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
  }

  @media (max-width: 968px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    
  }

  @media (max-width: 768px) {
    width: 100%;
  }
    
    > h2 {
      font-size: 32px;
    }

    > p {
      font-size: 20px;
    }
  
  


`;
