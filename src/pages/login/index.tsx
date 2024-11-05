import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import {Container,TextLogin,ImagemContainer,UserName, Input, Button} from './styles'
import Logo from '../../assets/yYicons/icons8-google-logo-48.png';
import { useNavigate } from "react-router-dom";

function Login(){
    const { handleLogin } = useContext(UserContext);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    return(
        <>        
            <Container>
                <ImagemContainer>
                    <img alt="" src={Logo} />
                </ImagemContainer>
                <UserName>{"Bem-Vindo(a)"}</UserName>
                <TextLogin>
                    <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />
                    <Button onClick={() => {handleLogin(email, password).then(() => {
                        navigate('/');
                        }).catch((err:any) => {
                            console.log('Falha ao fazer login. Tente novamente.');
                        });
                    }}>
                        Login
                    </Button>
                </TextLogin>
            </Container>
        </>

    )
}

export default Login;