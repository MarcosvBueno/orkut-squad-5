import styled from 'styled-components'; 


export const Container = styled.main`
  max-width: 1215px;
  margin : 0 auto;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 80px;
  margin-bottom:24px;
  display: grid;
  grid-template-columns: 280px 592px 280px; 
  grid-template-rows: 411px 411px ;
  grid-gap: 32px;
  
  & .div1 {
    grid-row: 1 ; 
  }

  & .div2 {
    grid-row: 1 / 3;
  }

  & .div3 {
    grid-row: 1 ;
    
  }

  & .div4 {
    grid-row: 2 ;
    grid-column: 3; 
  }


  @media (max-width: 968px) {
    overflow-x: hidden;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr; 
    grid-template-rows: auto; 
    margin-top: 30px;
    & .div0{
      grid-row: 1;
    }

    & .div1 {
      grid-row: 2;
    }

    & .div2 {
      grid-row: 4;
    }

    & .div3 {
      grid-row: 3;
      grid-column: 1;
    }

    & .div4 {
      grid-row: 5;
      grid-column: 1; 
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;  
  position: relative; 
  display:none;
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
    
  }
    img{
      left: 100px;
      
    }

  }

`;

export const ContainerFAndC = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  

  > div > div{
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