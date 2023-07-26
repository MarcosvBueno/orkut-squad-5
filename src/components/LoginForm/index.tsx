import React, { useState, ChangeEvent } from 'react';
import {
    LoginFormContainer,
    LoginTitle,
    Form,
    EmailInput,
    ErrorMessage,
    LoginButton,
} from './style';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isLoginAttempted, setIsLoginAttempted] = useState(false);

    const handleLogin = () => {
        if (!email) {
            setError('Campo de e-mail não pode ser vazio.');
            setIsLoginAttempted(true);
        } else if (!isValidEmail(email)) {
            setError('Formato de e-mail inválido.');
            setIsLoginAttempted(true);
        } else {
            setError('');
            setIsLoginAttempted(false);
        }
    };

    const isValidEmail = (email: string) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        if (isLoginAttempted) {
            setError('');
            setIsLoginAttempted(false);
        }
    };

    return (
        <LoginFormContainer>
            <LoginTitle>Acesse o Orkut</LoginTitle>
            <Form>
                <EmailInput
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                />
                {isLoginAttempted && error && <ErrorMessage>{error}</ErrorMessage>}
                <LoginButton type="button" onClick={handleLogin}>Entrar na conta</LoginButton> { }
            </Form>
        </LoginFormContainer>
    );
}

export default LoginForm;
