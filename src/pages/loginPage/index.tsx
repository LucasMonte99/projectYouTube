import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { 
  Container, TextLogin, ImagemContainer, UserName, 
  Input, Button, SubTitle, ButtonCreate, ForgotEmail, 
  Alert, DropdownMenu, DropdownItem, StyledLink 
} from './styles';
import Logo from '../../assets/yYicons/icons8-google-logo-48.png';
import { useNavigate, useLocation } from "react-router-dom"; 

function Login() {
  const { handleLogin } = useContext(UserContext);
  const location = useLocation(); 
  const [email, setEmail] = useState(location.state?.email || "");
  const [password, setPassword] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const alternaDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSubmit = async () => {
    try {
      await handleLogin(email, password);
      navigate('/');
    } catch (err: any) {
      console.log("Falha ao fazer login. Tente novamente.");
    }
  };

  return (
    <>        
      <Container>
        <ImagemContainer>
          <img alt="" src={Logo} />
        </ImagemContainer>
        <UserName>{"Fazer login"}</UserName>
        <SubTitle>Prosseguir no YouTube</SubTitle>
        <TextLogin>
          <Input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email" 
          />
          <Input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Senha" 
          />
          <ForgotEmail>Esqueceu seu e-mail?</ForgotEmail>
          <Alert>
            Não está no seu computador? Use o modo visitante para fazer login com privacidade.
            <span>Saiba mais sobre como usar o Modo visitante</span>
          </Alert>
          <Button onClick={handleSubmit}>Login</Button>
          <ButtonCreate onClick={alternaDropdown}>Criar conta</ButtonCreate>
          <DropdownMenu isOpen={isDropdownOpen}>
            <StyledLink to="/cadastro">Para uso pessoal</StyledLink>
            <DropdownItem>Para uma criança</DropdownItem>
            <DropdownItem>Para trabalho ou empresa</DropdownItem>
          </DropdownMenu>
        </TextLogin>
      </Container>
    </>
  );
}

export default Login;
