import styled from 'styled-components';

export const Container = styled.form`
  max-width: 550px;
  margin: 56px auto; 
  padding: 20px;
  border-radius: 16px;
  background-color: var( --dark-30);
  display: flex;
  flex-direction: column;
  align-items: center; 


  h2 {
    font-family: SF Pro Display;
    font-size: 24px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: center; 
    color: var(--brand-color);

    margin-bottom: 53px; 
  }

  img {
    width: 32px; 
    height: 32px; 
    margin-bottom: 24px; 
    margin-top: 32px; 
  }

  input,
  select {
    display: block;
    width: 100%;
    height:51px;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #EFF3F8;
    padding-left: 15px;
    padding-right: 15px;
    

  }


  input:not(:last-child),
  select:not(:last-child) {
    margin-bottom: 15px;
  }
  span{
    font-family: SF Pro Display;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    color: var( --error-color);
  }
  p{
    font-family: SF Pro Display;
font-size: 18px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0px;
    color: var(--success-color);
    }

  button {
    display: block;
    width: 100%;
    height:51px;
    padding: 10px;
    background-color: var(--brand-color);
    color:  #EFF3F8;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    margin-top: 10px;

    &:hover {
       
        background-color: #EFF3F8;
        color: var(--brand-color);
    }
  }
  .btn-back{
    background-color: #EFF3F8;
    color: var(--brand-color);
    

    &:hover {
        background-color: var(--brand-color);
        color:  #EFF3F8;
      

    }

  }
  @media (max-width: 768px) {
    margin: 24px auto;
    padding: 10px;
    width: 90%;

    h2 {
      font-size: 20px;
      margin-bottom: 40px;
    }

    img {
      width: 24px;
      height: 24px;
      margin-bottom: 16px;
      margin-top: 24px;
    }

    input,
    select {
      height: 44px;
      font-size: 16px;
    }

    button {
      height: 44px;
      font-size: 16px;
    }
  }
`;


