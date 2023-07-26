import styled from "styled-components";
import background_image from "../../assets/img/login-background.jpg";

const StyledImage = styled.img`
    width: 800px;
    height: 598px;
    flex-shrink: 0;
    border-radius: 20px;
    background: url(${background_image}) lightgray 50% / cover no-repeat;
`;

const StyledText = styled.h1`
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: var(--bg-text);
    font-size: 24px;
`;

export { StyledImage, StyledText };
