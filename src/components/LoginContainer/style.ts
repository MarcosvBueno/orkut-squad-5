import styled from "styled-components";

const StyledContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 90vh;
    width: 100%;

    & > * {
        margin-right: 30px;
    }

    & > *:last-child {
        margin-right: 0;
    }

    @media (max-width: 576px) {
        align-items: center;
        flex-direction: column;

        & > * {
            margin-right: 0;
            margin-top: 20px;
        }

        & > *:first-child {
            display: none;
        }
    }

    @media (min-width: 577px) and (max-width: 768px) {
        align-items: center;
        flex-direction: row;

        & > * {
            margin-right: 10px;
            margin-top: 0;
        }

        & > *:first-child {
            display: flex;
        }
    }

    @media (min-width: 769px) {
        align-items: center;
        flex-direction: row;

        & > * {
            margin-right: 20px;
            margin-top: 0;
        }
    }
`;

export { StyledContainer };
