import styled from "styled-components";

const StyledContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;

    & > *:not(:last-child) {
        margin-right: 30px;
    }
`;

export { StyledContainer };
