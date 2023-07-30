import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: var(--dark-30);
  height: 92px;
  display: flex;
  align-items: center;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    padding: 0 24px;

    
    @media (max-width: 768px) {
      justify-content: center;
    }
  }

  nav {
    display: flex;
    align-items: center;
    gap: 40px;

    a {
      color: var(--dark-10);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      text-decoration: none;
    }


    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const HeaderLogin = styled.div`
  width: 100%;
  background-color: var(--dark-30);
  height: 92px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  

  > div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1248px;
    width: 100%;
    margin: 0 auto;
    gap: 120px;
    padding: 0 24px;
  }

  @media (max-width: 960px) {
    

    > div {
      gap: 24px;
      width: 100%;
      padding: 0 24px;
    }

  }

  @media (max-width: 768px) {
    
    > div {
      display: flex;
      padding: 0 24px;
      width: 100%;
      
    }
  }
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
  width: 100%;

  ul {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 40px;
  }

  li{
    list-style: none;
    cursor: pointer;
    color: var(--dark-10);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
  }

  li:nth-child(2){
    color: var(--brand-color);
  }

  @media (max-width: 960px) {
    width: 100%;
    gap: 48px;

    > nav {
      margin: 0 auto;
    }

    ul {
      width: 100%;
      gap: 50px;
    }

  }

  @media (max-width: 768px) {
    
    nav {
      display: none;
    }
  }
`;


export const ContainerInputWUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  gap: 40px;

`;

export const InputContent = styled.div`
  display: flex;
  justify-content: flex;
  align-items: center;
  width: 100%;
  position: relative;

  
    input{
    width: 100%;
    height: 43.959px;
    border-radius: 8px;
    border: none;
    background-color: var(--bg-text);
    padding: 0 51px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    }

    img{
      width: 24px;
      height: 23.978px;
      position: absolute;
      left: 16px;
    }

    @media (max-width: 960px) {
     input {
      display: none;

     }

     img{
      left: 20px;
     }

    }

    @media (max-width: 768px) {
      display: none;
    }
`;

export const PerfilContent = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 80px;

    &:nth-of-type(2) {
      width: 24px;
      height: 24px;
    }

  }

  p{
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  }
    
  @media (max-width: 960px) {
    width: 100%;
    justify-content: flex-end;
    gap:14px;
  
  }  

  @media (max-width: 768px){
    justify-content: flex-end;

    p{
      display: none;
    }
  }
`;