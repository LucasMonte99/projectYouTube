import React, { useState } from "react";
import{ MenuContainer,DropdownMenu,ImageLogo, Ul, Li, DropdownItems, UserImage, A, DropdownItemComponent, ButtonIcon, Divisor,OverflowDropdownMenu} from "./styles";
import fotografia from '../assets/yYicons/Lucas1.jpg';
import googleLogo from '../assets/dropdownImage/icons8-google-logo-30.png';
import mudarContaLogo from '../assets/dropdownImage/mudarConta.png';
import sairLogo from '../assets/dropdownImage//icons8-sair-24.png';
import studioLogo from '../assets/dropdownImage/studioLogo.jpeg';
import premiumLogo from '../assets/dropdownImage/premiumLogo.jpeg';
import cifraoLogo from '../assets/dropdownImage/icons8-cifrão-24.png';
import dadosLogo from '../assets/dropdownImage/dadosLogo.jpeg';
import luaLogo from '../assets/dropdownImage/icons8-lua-crescente-25.png';
import idiomaLogo from '../assets/dropdownImage/idiomaLogo.jpeg';
import restritoLogo from '../assets/dropdownImage/restritoLogo.jpeg';
import globoLogo from '../assets/dropdownImage/icons8-globo-50.png';
import keyboardLogo from '../assets/dropdownImage/icons8-keyboard-32.png';
import configLogo from '../assets/dropdownImage/icons8-configurações-50.png';
import ajudaLogo from '../assets/dropdownImage/icons8-ajuda-50.png';
import feedbackLogo from '../assets/dropdownImage/feedbackLogo.jpeg';
import user from '../assets/yYicons/Lucas1.jpg'


interface Idrop {
    
    children?: React.ReactNode;
    onClick?: () => void;
}

interface DropdownItemProps {
    img: string;
    text: string;
    onClick?: () => void;
}



function Dropdown({ children }: Idrop){
    
    const [open,setOpen] = useState(false);
    
    return(
        <div>
            <MenuContainer>
                <div onClick={() => {setOpen(!open)}}>
                    <ImageLogo alt="" src={fotografia} />
                </div>
                
            </MenuContainer>
            {open &&(
                
                <DropdownMenu>
                    <DropdownItemComponent>
                        <ButtonIcon alt="" src={user} />
                        <span>Lucas Matheus</span>
                        <h2>@lucasmatheus8299</h2>
                        <h3>Acessar seu canal </h3> 
                    </DropdownItemComponent>
                    <Divisor />
                    

                    <OverflowDropdownMenu>
                        <Ul>

                            <DropdownItems>
                                {children}
                                
                                <DropdownItemCompnent img={googleLogo} text="Conta do Google" />
                                <DropdownItemCompnent img={mudarContaLogo} text="Mudar de conta" />
                                <DropdownItemCompnent img={sairLogo} text="Sair" />
                                <Divisor />
                                <DropdownItemCompnent img={studioLogo} text="YouTube Studio" />
                                <DropdownItemCompnent img={premiumLogo} text="Seus benefícios do Premium" />
                                <DropdownItemCompnent img={cifraoLogo} text="Compras e assinaturas" />
                                <Divisor />
                                <DropdownItemCompnent img={dadosLogo} text="Seus dados no YouTube" />
                                <DropdownItemCompnent img={luaLogo} text="Aparência: claro" />
                                <DropdownItemCompnent img={idiomaLogo} text="Idioma: Português" />
                                <DropdownItemCompnent img={restritoLogo} text="Modo restrito: desativado" />
                                <DropdownItemCompnent img={globoLogo} text="Local: Brasil" />
                                <DropdownItemCompnent img={keyboardLogo} text="Atalhos do teclado" />
                                <Divisor />
                                <DropdownItemCompnent img={configLogo} text="Configurações" />
                                <Divisor />
                                <DropdownItemCompnent img={ajudaLogo} text="Ajuda" />
                                <DropdownItemCompnent img={feedbackLogo} text="Enviar feedback" />

                            </DropdownItems>
                        </Ul>
                    </OverflowDropdownMenu>
                </DropdownMenu>

            )}

        </div>
    )
};

const DropdownItemCompnent = ({ img, text }: DropdownItemProps)=> {
    return(
        <Li>
            <UserImage src={img}></UserImage>
            <A>{text}</A>
        </Li>
    );
}

export default Dropdown;