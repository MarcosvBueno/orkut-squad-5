import styled from "styled-components";
import background_image from "../../assets/img/login-background.svg";

const StyledImage = styled.div`
    position: relative;
    width: 800px;
    height: 598px;
    border-radius: 20px;
    overflow: hidden;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(171deg, rgba(20, 20, 20, 0) 0%, #141414 100%), url(${background_image});
        background-size: cover;
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
