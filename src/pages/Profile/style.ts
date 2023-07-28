import styled from 'styled-components'; 


export const Container = styled.main`
  max-width: 1215px;
  margin : 0 auto;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 80px;
  margin-bottom:20px;
  display: grid;
  grid-template-columns: 280px 592px 280px; 
  grid-template-rows: 411px 411px ;
  grid-gap: 32px;
  
  & .profileHeaderDiv{
    grid-row: 1 ; 
  }

  & .ProfileInfoDiv {
    grid-row: 1 / 3;
  }

  & .ListFriendsDiv {
    grid-row: 1 ;
    
  }

  & .ListCommunityDiv {
    grid-row: 2 ;
    grid-column: 3; 
  }


  @media (max-width: 968px) {
    overflow-x: hidden;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr; 
    grid-template-rows: auto; 
    padding: 0 24px;

    & .inputDiv{
      grid-row: 1;
    }

    & .profileHeaderDiv{
      grid-row: 2;
    }

    & .ProfileInfoDiv {
      grid-row: 4;
    }

    & .ListFriendsDiv {
      grid-row: 3;
      grid-column: 1;
    }

    & .ListCommunityDiv {
      grid-row: 5;
      grid-column: 1; 
    }
  }

  @media (max-width: 768px) {
    overflow-x: hidden;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    padding: 0 24px;
    margin-top: 30px;
    margin-bottom: 24px;
    & .profileHeaderDiv {
      margin: 0 auto;
      width: 100%;
    
  }
  }

  @media (max-width: 560px) {
    margin-bottom: 54px;
    & .profileHeaderDiv {
      width: 100%;
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
    display: flex;
    padding: 0 5px;
    input{
      width: 100%;
      
    }
      img{
        left: 13px;
        
      }

  }
  @media (max-width: 560px) {
    
      width: 100%;
      justify-content: center;
      margin: 0 auto;
      padding: 0 5px;
    }

`;
