import styled from "styled-components";
import background_image from "../../assets/img/login-background.svg";

const StyledImage = styled.img`
    background: url(${background_image}) lightgray 50% / cover no-repeat;
    background-size: cover;
    border-radius: 20px;
    flex-shrink: 0;
    height: 598px;
    width: 800px;
`;

const StyledText = styled.h1`
    bottom: 20px;
    color: var(--bg-text);
    font-size: 24px;
    left: 20px;
    position: absolute;
`;

export { StyledImage, StyledText };
