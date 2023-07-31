import styled from "styled-components";

export const ProfileInfoSection = styled.section`
  width: 100%;

  border-radius: 16px;
  background: var(--dark-30);
  padding: 24px;
  display: flex;
  flex-direction: column;

  > h2 {
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    color: var(--dark-10);
  }

  @media (max-width: 968px) {
    margin-bottom: 16px; 
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 560px) {
      width: 100%;
      height: 100%;
      justify-content: center;
      margin: 0 auto;
      
      > h2{
        font-size: 20px;
      }

     
    }
`;

export const Triangle = styled.div`
  position: absolute;
  left: 38%; 
  top: 242px;
  transform: translateX(-50%);
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid var(--bg-text); 

  @media (max-width: 968px) {
    display: none;
  }
`;

export const PhraseContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-top: 24px;
  border-radius: 10px;
  background: var(--bg-text);
  width: 100%;
  height: 40px;
  padding: 12px;

  > p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--dark-10);
    padding: 12px;
  }

  @media (max-width: 560px) {
      width: 100%;
        margin-bottom: 40px;
        margin-top: 32px;


      > p {
        font-size: 12px;
      }
    
    }
`;


export const QualitiesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: left;
  margin-top: 32px;
  width:70%;
  margin-bottom: 32px;

  img {
    width: 24px;
    height: 24px;
    margin-right: 6px;
  }

  img:hover{
    cursor: pointer;
    scale: 1.1;
  }

  h3{
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  color: var(--dark-10);
  margin-bottom: 8px;
  }

  @media (max-width: 560px) {
        width: 100%;
        justify-content: space-between;
        margin: 0 auto;
        margin-bottom: 40px;

        img {
          width: 20px;
          height: 20px;
          margin-right: 6px;
        }

        h3{
          font-size: 16px;
        }

    
    }
  

`;

export const StarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;

  > p{
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    color: var(--dark-10);
  }

  @media (max-width: 590px) {
    gap: 0px
  
  }
`;

export const PersonalInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  > div {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }

  h3{
    color: var(--dark-20);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }

  p{
    color: var(--dark-10);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }

`;

export const UserInterests=  styled.section`

  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: left;
  

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }

  h3{
    color: var(--dark-20);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }

  p{
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
    transition:  all 0.2s ease-in-out;
  }

  button:hover {
    scale: 1.1;
  }

  @media (max-width: 590px) {
      width:100%;
      
       div p:nth-child(n+3) {
        display: none;
      }

    }
  
`;
