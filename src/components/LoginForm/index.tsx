import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
    CreateAccountButton,
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
} from './style';

import logo from "../../assets/img/logo-orkut-simples.svg";

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isLoginAttempted, setIsLoginAttempted] = useState(false);
    const [rememberPassword, setRememberPassword] = useState(false);

    const handleLogin = () => {
        if (!email) {
            setEmailError('Campo de e-mail não pode ser vazio.');
            setIsLoginAttempted(true);
        } else if (!isValidEmail(email)) {
            setEmailError('Formato de e-mail inválido.');
            setIsLoginAttempted(true);
        } else if (!password) {
            setPasswordError('Campo de senha não pode ser vazio.');
            setIsLoginAttempted(true);
        } else {
            setEmailError('');
            setPasswordError('');
            setIsLoginAttempted(false);
        }
    };

    const isValidEmail = (email: string) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        if (isLoginAttempted) {
            setEmailError('');
            setIsLoginAttempted(false);
        }
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        if (isLoginAttempted) {
            setPasswordError('');
            setIsLoginAttempted(false);
        }
    };

    const handleRememberMeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRememberPassword(e.target.checked);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleLogin();
    };

    return (
        <LoginFormContainer>
            <LogoImage src={logo} alt="Logo" />
            <LoginTitle>Acesse o Orkut</LoginTitle>
            <Form onSubmit={handleSubmit}>
                <EmailInput
                    id="email"
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="E-mail"
                />
                {isLoginAttempted && !email && (
                    <ErrorContainer>
                        <ErrorMessage>{emailError}</ErrorMessage>
                    </ErrorContainer>
                )}
                {isLoginAttempted && email && !isValidEmail(email) && (
                    <ErrorContainer>
                        <ErrorMessage>{emailError}</ErrorMessage>
                    </ErrorContainer>
                )}
                <PasswordInput
                    id="password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Senha"
                />
                {isLoginAttempted && !password && (
                    <ErrorContainer>
                        <ErrorMessage>{passwordError}</ErrorMessage>
                    </ErrorContainer>
                )}
                <RememberMeContainer>
                    <CustomCheckboxInput
                        id="rememberMe"
                        type="checkbox"
                        checked={rememberPassword}
                        onChange={handleRememberMeChange}
                    />
                    <CustomCheckboxLabel />
                    <label htmlFor="rememberMe">
                        <RememberMeText>Lembrar minha senha</RememberMeText>
                    </label>
                </RememberMeContainer>
                <LoginButton type="submit">Entrar na conta</LoginButton>
                <CreateAccountButton type="button">Criar uma conta</CreateAccountButton>
                <ForgotPasswordLink href="./" title="Esqueci a minha senha">
                    Esqueci a minha senha
                </ForgotPasswordLink>
            </Form>
        </LoginFormContainer>
    );
}

export default LoginForm;