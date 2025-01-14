import {
    MainContainer,
    ImagemContainer,
    ButtonsContainer,
    CheckBoxContainer,
    ComparePassword,
    MessageContainer,
    PasswordContainer,
    PasswordSpan,
    SignIn,
    SignUpButton,
    SignUpContainer,
    SubTitle,
    Title,
    UserEmailInput,
    InputEmpty,
    UserNameInput,
    UserPasswordInput,
  } from "./styles";
  import Logo from '../assets/yYicons/icons8-google-logo-48.png';
  import { useState, useContext, useRef, useEffect } from "react";
  import { useNavigate } from "react-router-dom";
  import { UserContext } from "../context/userContext";


  interface FormState {
    userName: string;
    userEmail: string;
    userPassword: string;
    comparePassword: string;
  }
  
  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
  const validatePassword = (password: string) => password.length >= 8;

function SignUp() {

    const navigate = useNavigate();
  const { handleCreateUser } = useContext(UserContext);

  const [formState, setFormState] = useState<FormState>({
    userName: "",
    userEmail: "",
    userPassword: "",
    comparePassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({
    userNameValid: true,
    userEmailValid: true,
    userPasswordValid: true,
    formatEmailValid: true,
    samePassword: true,
  });

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const comparePasswordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (nameRef.current) nameRef.current.focus();
  }, []);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleValidation = (): boolean => {
    const isNameValid = formState.userName.trim() !== "";
    const isEmailValid = formState.userEmail.trim() !== "";
    const isEmailFormatValid = validateEmail(formState.userEmail);
    const isPasswordValid = validatePassword(formState.userPassword);
    const isPasswordMatch = formState.userPassword === formState.comparePassword;

    setFormErrors({
      userNameValid: isNameValid,
      userEmailValid: isEmailValid,
      formatEmailValid: isEmailFormatValid,
      userPasswordValid: isPasswordValid,
      samePassword: isPasswordMatch,
    });

    if (!isNameValid) nameRef.current?.focus();
    else if (!isEmailValid || !isEmailFormatValid) emailRef.current?.focus();
    else if (!isPasswordValid) passwordRef.current?.focus();
    else if (!isPasswordMatch) comparePasswordRef.current?.focus();

    return isNameValid && isEmailValid && isEmailFormatValid && isPasswordValid && isPasswordMatch;
  };

  const createUser = () => {
    if (handleValidation()) {
      handleCreateUser(formState.userName, formState.userEmail, formState.userPassword);
      navigate("/login", { state: { email: formState.userEmail } });
    }
  };

  const handleNavigate = () => {
    if (Object.values(formState).some((value) => value.trim() !== "")) {
      if (window.confirm("Você perderá os dados inseridos. Deseja continuar?")) {
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  }
  

    return (
        <MainContainer>
            <SignUpContainer>
                <ImagemContainer>
                    <img alt="" src={Logo} />
                </ImagemContainer>
                <Title>Criar sua conta nesse projeto</Title>
                <SubTitle>Prosseguir no Youtube</SubTitle>

                <UserNameInput
                valid={formErrors.userNameValid}
                name="userName"
                type="text"
                placeholder="Nome Sobrenome"
                value={formState.userName}
                ref={nameRef}
                onChange={handleChange}
                />
                <MessageContainer>
                <InputEmpty valid={formErrors.userNameValid}>Digite o seu nome</InputEmpty>
                </MessageContainer>

                <UserEmailInput
                valid={formErrors.userEmailValid && formErrors.formatEmailValid}
                name="userEmail"
                type="email"
                placeholder="Seu endereço de e-mail"
                value={formState.userEmail}
                ref={emailRef}
                onChange={handleChange}
                />
                <MessageContainer>
                <InputEmpty valid={formErrors.userEmailValid && formErrors.formatEmailValid}>
                    {formErrors.formatEmailValid ? "Digite seu e-mail." : "O formato desse e-mail é inválido. Digite um e-mail válido."}
                </InputEmpty>
                </MessageContainer>

                <PasswordContainer>
                    <UserPasswordInput
                        valid={formErrors.userPasswordValid}
                        name="userPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="Senha"
                        value={formState.userPassword}
                        ref={passwordRef}
                        onChange={handleChange}
                        maxLength={8}
                        onKeyDown={(e) => {
                        if (e.key === " ") e.preventDefault();
                        if (e.key === "Enter") createUser();
                        }}
                    />
                <ComparePassword
                    valid={formErrors.userPasswordValid && formErrors.samePassword}
                    name="comparePassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirmar"
                    value={formState.comparePassword}
                    ref={comparePasswordRef}
                    onChange={handleChange}
                    maxLength={8}
                    onKeyDown={(e) => {
                    if (e.key === " ") e.preventDefault();
                    if (e.key === "Enter") createUser();
                    }}
                />
                </PasswordContainer>

                <MessageContainer>
                <InputEmpty valid={formErrors.userPasswordValid && formErrors.samePassword}>
                    {formErrors.samePassword ? "Digite uma senha de pelo menos 8 caracteres e confirme." : "Senha inválida. Verifique se estão iguais."}
                </InputEmpty>
                </MessageContainer>

                <PasswordSpan>Use 8 caracteres com uma combinação de letras, números e símbolos.</PasswordSpan>

                <CheckBoxContainer>
                <input type="checkbox" id="show-password" checked={showPassword} onChange={handleShowPassword} />
                <label htmlFor="show-password">Mostrar senha</label>
                </CheckBoxContainer>
                
                <ButtonsContainer>
                <SignIn onClick={handleNavigate}>Faça login em vez disso</SignIn>
                <SignUpButton onClick={createUser}>Próxima</SignUpButton>
                </ButtonsContainer>
                

            </SignUpContainer>
        </MainContainer>
        
    )
};

export default SignUp;
