import { 
    Container,
    LogoContainer,
    ButtonContainer,
    ButtonIcon,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButton,
    KeyboardIcon,
    FazerLogin
} from "./styles";
import HamburguerIcon from '../../assets/hamburger.png';
import Logo from '../../assets/YouTube-Logo.png';
import SearchIcon from '../../assets/search.png';
import MicIcon from '../../assets/microfone-gravador.png';
import VideoIcon from '../../assets/video.png';
import NotificationIcon from '../../assets/sino.png';
import Keyboard from '../../assets/teclado1.png';
import LogoLogin from '../../assets/yYicons/fazer login.png';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import Dropdown from "../../dropdown/dropdown";


interface Iprops{
    openMenu: boolean,
    setOpenMenu: (openMenu:boolean) => void,

}







function Header({ openMenu, setOpenMenu }: Iprops){
    const { login, logOut } = useContext(UserContext)

    const navigate = useNavigate();
    



    return (
        
            <Container>
                <LogoContainer onClick={ ()=> navigate('/')}>
                    <ButtonContainer onClick={() => setOpenMenu(!openMenu)} margin='0 10px 0 0'>
                        <ButtonIcon alt="" src={HamburguerIcon} />
                    </ButtonContainer>
                    <img
                        style={{cursor: 'pointer' , width: '100px'}}
                        alt=""
                        src={Logo}
                    />
                </LogoContainer>

                <SearchContainer>
                    <SearchInputContainer>
                        <SearchInput placeholder="Pesquisar" />
                        <KeyboardIcon alt= "" src={Keyboard}/>
                    </SearchInputContainer>
                    <SearchButton>
                        <ButtonIcon alt="" src={SearchIcon} />
                    </SearchButton>
                    <ButtonContainer margin='0 0 0 10px'>
                        <ButtonIcon alt="" src={MicIcon} />
                    </ButtonContainer>
                </SearchContainer>
                
                <HeaderButton>
                    <ButtonContainer margin='0 0 0 10px'>
                        <ButtonIcon alt="" src={VideoIcon} />
                    </ButtonContainer>
                    <ButtonContainer margin='0 0 0 10px'>
                        <ButtonIcon alt="" src={NotificationIcon} />
                    </ButtonContainer>
                    
                    {login? 
                        <>                    
                        <ButtonContainer margin='0 0 0 10px'>                       
                        </ButtonContainer>
                        <Dropdown />
                        
                                                
                        <span onClick={() => logOut()}>Sair</span>
                    </>                      
                    :
                        <FazerLogin onClick={() => navigate('/login')}>
                            <ButtonIcon alt="" src={LogoLogin} />
                            
                           <span>Fazer Login</span> 
                        </FazerLogin>
                    }

                </HeaderButton>
                

            </Container>
            
        
    )
}

export default Header;