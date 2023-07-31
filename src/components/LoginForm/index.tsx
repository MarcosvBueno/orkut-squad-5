import React, { useState, ChangeEvent, FormEvent,useContext,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/user-context';
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
    const [loginError, setLoginError] = useState('');

    const { setUserIsLogged,userIsLogged } = useContext(UserContext)!;

    useEffect(() => {
       setUserIsLogged(false);
    },[]);

    const handleLogin = () => {
        if (!email || !password || !isValidEmail(email)) {
            setIsLoginAttempted(true);
            setEmailError(email ? (isValidEmail(email) ? '' : 'Formato de e-mail inválido.') : 'Campo de e-mail não pode ser vazio.');
            setPasswordError(password ? '' : 'Campo de senha não pode ser vazio.');
            setLoginError('');
        } else {
            setIsLoginAttempted(false);
            setEmailError('');
            setPasswordError('');
            setLoginError('');
            setUserIsLogged(true);
            navigate('/profile');
        }
    };

    const isValidEmail = (email: string) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleEmailBlur = () => {
        if (isLoginAttempted) {
            setEmailError(email ? '' : 'Campo de e-mail não pode ser vazio.');
        }
    };

    const handlePasswordBlur = () => {
        if (isLoginAttempted) {
            setPasswordError(password ? '' : 'Campo de senha não pode ser vazio.');
        }
    };

    const handleRememberMeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRememberPassword(e.target.checked);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleLogin();
    };

    const navigate = useNavigate();

    const handleCreateProfile = () => {
        navigate('/register');

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
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={handleEmailBlur}
                    placeholder="E-mail"
                />
                {isLoginAttempted && emailError ? (
                    <ErrorContainer>
                        <ErrorMessage>{emailError}</ErrorMessage>
                    </ErrorContainer>
                ) : null}
                <PasswordInput
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={handlePasswordBlur}
                    placeholder="Senha"
                />
                {isLoginAttempted && passwordError ? (
                    <ErrorContainer>
                        <ErrorMessage>{passwordError}</ErrorMessage>
                    </ErrorContainer>
                ) : null}
                {isLoginAttempted && loginError ? (
                    <ErrorContainer>
                        <ErrorMessage>{loginError}</ErrorMessage>
                    </ErrorContainer>
                ) : null}
                <RememberMeContainer>
                    <CustomCheckboxInput
                        id="rememberMe"
                        type="checkbox"
                        checked={rememberPassword}
                        onChange={handleRememberMeChange}
                    />
                    <CustomCheckboxLabel htmlFor="rememberMe" />
                    <label htmlFor="rememberMe">
                        <RememberMeText>Lembrar minha senha</RememberMeText>
                    </label>
                </RememberMeContainer>

                <LoginButton type="submit">Entrar na conta</LoginButton>
                <CreateAccountButton type="button" onClick={handleCreateProfile}>
                    Criar uma conta
                </CreateAccountButton>
                <ForgotPasswordLink href="./" title="Esqueci a minha senha">
                    Esqueci a minha senha
                </ForgotPasswordLink>
            </Form>
        </LoginFormContainer>
    );
}

export default LoginForm;
