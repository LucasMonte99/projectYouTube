import React, { useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
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
  FazerLogin,
  CloseImg,
  ClearButton,
} from "./styles";
import HamburguerIcon from "../../assets/hamburger.png";
import Logo from "../../assets/YouTube-Logo.png";
import SearchIcon from "../../assets/search.png";
import MicIcon from "../../assets/microfone-gravador.png";
import VideoIcon from "../../assets/video.png";
import NotificationIcon from "../../assets/sino.png";
import Keyboard from "../../assets/teclado1.png";
import LogoLogin from "../../assets/yYicons/fazer login.png";
import CloseIcon from '../../assets/close.png'
import { UserContext } from "../../context/userContext";
import { useAppContext } from "../../contexts/menuContext";
import { useSearchContext } from "../../contexts/searchContext";
import Dropdown from "../../dropdown/dropdown";

const Header: React.FC = () => {
  const { openMenu, setOpenMenu } = useAppContext();
  const { setSearch } = useSearchContext();
  const { login, handleLogout } = useContext(UserContext);
  const [inputValue, setInputValue] = useState("");
  const [openSearch, setOpenSearch] = useState(false);
  const [clearButton, setClearButton] = useState(false)
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleSearch = () => {
    if (inputValue.trim() === "") {
      alert("Digite uma palavra-chave antes de pesquisar.");
      return;
    }
    setSearch(inputValue);
    navigate("/search");
    setOpenSearch(false);
  };

  const clearInput = () => {
    setInputValue('')
    setClearButton(false)
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }





  return (
    <Container>
      
      <LogoContainer onClick={() => navigate("/")}>
        <ButtonContainer onClick={(e) =>{ e.stopPropagation(); setOpenMenu(!openMenu)}} margin="0 10px 0 0">
          <ButtonIcon alt="Menu" src={HamburguerIcon} />
        </ButtonContainer>
        <img style={{ cursor: "pointer", width: "100px" }} alt="Logo do YouTube" src={Logo} />
      </LogoContainer>

      
      <SearchContainer openSearch={openSearch}>
        <SearchInputContainer>
          <SearchInput
            ref={inputRef}
            value={inputValue}
            placeholder="Pesquisar"
            onChange={(e) => handleInputChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <KeyboardIcon alt="Teclado" src={Keyboard} />
          
          <ClearButton
            clearButton={clearButton}
            onClick={clearInput}
          >

            <CloseImg src={CloseIcon} />

          </ClearButton>
        </SearchInputContainer>
        <SearchButton onClick={handleSearch}>
          <ButtonIcon alt="Pesquisar" src={SearchIcon} />
        </SearchButton>
        <ButtonContainer margin="0 0 0 10px">
          <ButtonIcon alt="Microfone" src={MicIcon} />
        </ButtonContainer>
      </SearchContainer>

      
      <HeaderButton>
        <ButtonContainer margin="0 0 0 10px">
          <ButtonIcon alt="Vídeo" src={VideoIcon} />
        </ButtonContainer>
        <ButtonContainer margin="0 0 0 10px">
          <ButtonIcon alt="Notificações" src={NotificationIcon} />
        </ButtonContainer>

        
        {login ? (
          <>
            <Dropdown onLogout={handleLogout}>
              <ButtonContainer margin="0 0 0 10px" />
            </Dropdown>
          </>
        ) : (
          <FazerLogin onClick={() => navigate("/login")}>
            <ButtonIcon alt="Fazer Login" src={LogoLogin} />
            <span>Fazer Login</span>
          </FazerLogin>
        )}
      </HeaderButton>
    </Container>
  );
};

export default Header;
