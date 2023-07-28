import styled from "styled-components";

const CreateAccountButton = styled.button`
    background-color: var(--bg-text);
    border: none;
    border-radius: 8px;
    color: var(--brand-color);
    cursor: pointer;
    flex-shrink: 0;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    height: 51px;
    padding: 10px 20px;
    width: 336px;
    margin-top: 20px;
`;

const CustomCheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    color: var(--text-color);
    cursor: pointer;
    user-select: none;
    margin-top: 20px;
`;

const CustomCheckboxInput = styled.input.attrs({ type: "checkbox" })`
    opacity: 0;
    width: 0;
    height: 0;
`;

const CustomCheckboxLabel = styled.label`
    width: 20px;
    height: 20px;
    position: relative;
    border-radius: 6px;
    border: 1px solid #dcdcdc;
    background: var(--bg-text);
    margin-right: 8px;
    cursor: pointer;

    &::before {
        content: "";
        display: block;
        width: 12px;
        height: 12px;
        border-radius: 4px;
        background-color: var(--brand-color);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
    }

    ${CustomCheckboxInput}:checked + &::before {
        opacity: 1;
    }
`;

const EmailInput = styled.input`
    background-color: var(--bg-text);
    border: none;
    border-radius: 8px;
    margin-bottom: 20px;
    padding: 10px;
    width: 100%;
`;

const ErrorContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-bottom: 20px;
`;

const ErrorMessage = styled.p`
    color: var(--error-color);
    font-size: 14px;
    margin-bottom: 10px;
`;

const ForgotPasswordLink = styled.a`
    color: var(--brand-color);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 20px;
    text-decoration-line: underline;
`;

const Form = styled.form`
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 384px;
    min-height: 598px;
    flex-shrink: 0;
`;

const LoginButton = styled.button`
    background-color: var(--brand-color);
    border: none;
    border-radius: 8px;
    color: var(--dark-40);
    cursor: pointer;
    flex-shrink: 0;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    height: 51px;
    padding: 10px 20px;
    width: 336px;
    margin-top: 20px;
`;

const LoginFormContainer = styled.div`
    align-items: center;
    background-color: var(--dark-40);
    border: none;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    min-height: 598px;
    width: 384px;
    justify-content: center;
    position: relative;
`;

const LoginTitle = styled.h1`
    color: var(--brand-color);
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 20px;
`;

const LogoImage = styled.img`
    margin-top: 20px;
    margin-bottom: 20px;
`;

const PasswordInput = styled.input`
    background-color: var(--bg-text);
    border: none;
    border-radius: 8px;
    margin-bottom: 20px;
    padding: 10px;
    width: 100%;
`;

const RememberMeContainer = styled.div`
    align-items: center;
    color: var(--text-color);
    cursor: pointer;
    display: flex;
    user-select: none;
    margin-top: 20px;
`;

const RememberMeText = styled.span`
    margin-left: 8px;
    color: #868686;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export {
    CreateAccountButton,
    CustomCheckboxContainer,
    CustomCheckboxInput,
    CustomCheckboxLabel,
    EmailInput,
    ErrorContainer,
    ErrorMessage,
    ForgotPasswordLink,
    Form,
    LoginButton,
    LoginFormContainer,
    LoginTitle,
    LogoImage,
    PasswordInput,
    RememberMeContainer,
    RememberMeText,
};
