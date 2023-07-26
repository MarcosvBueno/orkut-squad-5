import styled from "styled-components";

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
`;

export const FriendList = styled.div`


  img {
    border-radius: 100px;
  }

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;

  }

  :nth-child(1) {
    margin-bottom: 4px;
  }

`;

export const CommunityList = styled.div`

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center; 
  }

  :nth-child(1) {
    margin-bottom: 4px;
  }
`;