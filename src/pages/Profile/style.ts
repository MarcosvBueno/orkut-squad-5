import styled from 'styled-components'; 


export const Container = styled.main`
  margin: 0 352px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  margin-top: 80px;
  margin-bottom:54px;


  @media (max-width: 768px) {
    margin: 0 16px;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;  
  position: relative; 
  display:none;
  margin-top: 24px;
  margin-bottom: 15px;
 
 input{
  width: 320px;
  height: 44px;
  border-radius: 8px;
  background: var(--dark-30);
  padding: 0 45px;
  border: none;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
 }

 img{
  width: 21.634px;
  height: 24px;
  position: absolute;
  left: 13px;
 }

 @media (max-width: 768px) {
  display:flex;

  input{
    width: 592px;
    ;
  }

  }

`;

export const ContainerFAndC = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  

  > div {
    display: flex;
    flex-direction: column; 
    gap: 24px;
    width: 280px;
    height: 411px;
    background-color: var(--dark-30);
    border-radius: 16px;
    padding: 24px;
  }
  
  img {
    width: 56px;
    height: 56px;
    border-radius: 12px;
  }

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

  @media (max-width: 768px) { 

   >  div {
      width: 592px;
      justify-content: center;
      padding: 0px 40px;
      
    }
  
  }
`;