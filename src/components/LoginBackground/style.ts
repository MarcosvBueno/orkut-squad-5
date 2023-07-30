import styled from "styled-components";
import background_image from "../../assets/img/login-background.svg";

const StyledImage = styled.div`
    border-radius: 20px;
    height: 598px;
    overflow: hidden;
    position: relative;
    width: 100%;

    &::after {
        background-image: linear-gradient(171deg, rgba(20, 20, 20, 0) 0%, #141414 100%), url(${background_image});
        background-size: cover;
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }

    & img {
        display: none;
    }
`;

const StyledText = styled.h1`
    bottom: 20px;
    color: var(--bg-text);
    font-size: 24px;
    left: 20px;
    position: absolute;
`;

export { StyledImage, StyledText };
