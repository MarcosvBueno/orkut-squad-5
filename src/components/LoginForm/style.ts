import styled from "styled-components";

const LoginFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LoginTitle = styled.h1`
    font-size: 24px;
    margin-bottom: 20px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    width: 300px;
`;

const EmailInput = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
    width: 100%;
`;

const ErrorMessage = styled.p`
    color: var(--error-color);
    font-size: 14px;
    margin-bottom: 10px;
`;

const LoginButton = styled.button`
    background-color: var(--brand-color);
    color: var(--dark-40);
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

export { LoginFormContainer, LoginTitle, Form, EmailInput, ErrorMessage, LoginButton };
