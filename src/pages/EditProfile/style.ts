import styled from 'styled-components';

export const Container = styled.main`
  margin: 0 16px; 
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 32px; 
  margin-top: 80px;
  margin-bottom: 54px;
`;

export const ProfileSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  > button {
    width: 280px;
    height: 56px;
    border-radius: 16px;
    background: var(--dark-30);
    border: none;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    color: var(--brand-color);
    cursor: pointer;
    transition: 0.2s all ease-in-out;

    &:hover {
      background: var(--brand-color);
      color: var(--dark-30);
      scale: 1.030;
    }

  }

`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  width: 280px;
    height: 324px;
    background-color: var(--dark-30);
    justify-content: center;
    align-items: center;
    gap: 24px;

`;

export const EditForm = styled.div`
    width: 592px;
    height: 854px;
    background: var(--dark-30);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
    
    div {
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;
        gap: 12px;

    }

    h2 {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    color: var(--dark-20);
    }

    p {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        color: var(--dark-10);
    }


`;

export const Details = styled.section`
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

h2{
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
`;



