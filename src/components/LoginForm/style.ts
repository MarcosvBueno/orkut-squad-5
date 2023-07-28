import styled from "styled-components";

const CreateAccountButton = styled.button`
    background-color: var(--bg-text);
    border: none;
    border-radius: 8px;
    color: var(--brand-color);
    cursor: pointer;
    flex-shrink: 0;
    height: 51px;
    padding: 10px 20px;
    width: 336px;
`;

const CustomCheckbox = styled.input`
    left: 0;
    opacity: 0;
    position: absolute;
`;

const EmailInput = styled.input`
    background-color: var(--bg-text);
    border: none;
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 10px;
    width: 100%;
`;

const ErrorContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-start;
    width: 100%;
`;

const ErrorMessage = styled.p`
    color: var(--error-color);
    font-size: 14px;
    margin-bottom: 10px;
`;

const ForgotPasswordLink = styled.a`
    color: var(--brand-color);
    margin-top: 10px;
    text-decoration: none;
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
    height: 51px;
    padding: 10px 20px;
    width: 336px;
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
`;

const LoginTitle = styled.h1`
    color: var(--brand-color);
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

const PasswordInput = styled.input`
    background-color: var(--bg-text);
    border: none;
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 10px;
    width: 100%;
`;

const RememberMeContainer = styled.div`
    align-items: center;
    color: var(--text-color);
    cursor: pointer;
    display: flex;
    user-select: none;
`;

const RememberMeText = styled.span`
    margin-left: 8px;
`;

export {
    CreateAccountButton,
    CustomCheckbox,
    EmailInput,
    ErrorContainer,
    ErrorMessage,
    ForgotPasswordLink,
    Form,
    LoginButton,
    LoginFormContainer,
    LoginTitle,
    PasswordInput,
    RememberMeContainer,
    RememberMeText,
};
