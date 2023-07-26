import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: var(--dark-30);
  height: 92px;
  display: flex;
  align-items: center;
  width: 100%;

  div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 352px;
  }

  nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;

    a{
      color: var(--dark-10);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      text-decoration: none;
    }
  }
`;
