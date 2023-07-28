import styled from "styled-components";

const StyledContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;

    & > * {
        margin-right: 20px;
        margin-top: 100px;
    }

    & > *:last-child {
        margin-right: 0;
    }

    @media (max-width: 1024px) {
        flex-direction: column;
        & > * {
            margin-right: 0;
        }
    }
`;

export { StyledContainer };
