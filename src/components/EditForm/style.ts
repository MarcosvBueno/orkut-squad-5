import styled from 'styled-components';

export const EditFormContainer = styled.div`
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


    > h3 {
        font-size: 26px;
        font-style: normal;
        font-weight: 500;
        color: var(--brand-color);
        text-align: center;
        gap: 32px;
      }

      p[contenteditable="true"] {
        outline: none;
      }


`;