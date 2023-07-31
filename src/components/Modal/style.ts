import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000080;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  > div {
    background-color: var(--dark-30);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 40px;  
    gap: 24px;
  }

  button {
    background-color: var(--brand-color);
    color: var(--dark-40);
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;

    &:hover {
      filter: brightness(0.9);
    }
 
    a{
      color: var(--dark-40);
      text-decoration: none;
    }
  }
`;