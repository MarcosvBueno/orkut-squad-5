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
  height: 51px;
  line-height: normal;
  margin-top: 20px;
  padding: 10px 20px;
  width: 336px;
`;

const CustomCheckboxContainer = styled.div`
  align-items: center;
  color: var(--text-color);
  cursor: pointer;
  display: flex;
  margin-top: 20px;
  user-select: none;
`;

const CustomCheckboxInput = styled.input.attrs({ type: "checkbox" })`
  height: 0;
  opacity: 0;
  width: 0;
`;

const CustomCheckboxLabel = styled.label`
  background: var(--bg-text);
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  cursor: pointer;
  height: 20px;
  margin-right: 8px;
  position: relative;
  width: 20px;

  &::before {
    background-color: var(--brand-color);
    border-radius: 4px;
    content: "";
    display: block;
    height: 12px;
    left: 50%;
    opacity: 0;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
  }

  ${CustomCheckboxInput}:checked + &::before {
    opacity: 1;
  }
`;

const EmailInput = styled.input`
  background-color: var(--bg-text);
  border: none;
  border-radius: 8px;
  flex-shrink: 0;
  font-size: 16px;
  height: 51px;
  margin-bottom: 20px;
  padding: 10px;
  width: 336px;
`;

const ErrorContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  width: 100%;
`;

const ErrorMessage = styled.p`
  color: var(--error-color);
  font-size: 14px;
  margin-bottom: 10px;
`;

const ForgotPasswordLink = styled.a`
  color: var(--brand-color);
  display: block;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 20px;
  text-align: center;
  text-decoration-line: underline;
`;

const Form = styled.form`
  align-items: flex;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 20px;
  width: 384px;
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
  height: 51px;
  line-height: normal;
  margin-top: 20px;
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
  height: 598px;
  justify-content: center;
  position: relative;
  width: 384px;
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
  margin-bottom: 20px;
  margin-top: 20px;
`;

const PasswordInput = styled.input`
  background-color: var(--bg-text);
  border: none;
  border-radius: 8px;
  flex-shrink: 0;
  font-size: 16px;
  height: 51px;
  margin-bottom: 20px;
  padding: 10px;
  width: 336px;
`;

const RememberMeContainer = styled.div`
  color: var(--text-color);
  cursor: pointer;
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 10px;
  user-select: none;
`;

const RememberMeText = styled.span`
  color: #868686;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 8px;
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
