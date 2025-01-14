import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
  width: ${({ openMenu }) => (openMenu ? "310px" : "80px")};
  height: calc(100vh - 55px);
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  overflow-y: ${({ openMenu }) => (openMenu ? "auto" : "hidden")};
  position: fixed;
  background-color: white;
  transition: width 0.3s ease-in-out;
  z-index: 999;
`;

export const MenuItem = styled.div<{ openMenu: boolean }>`
    width: 98%;
    min-height: ${({ openMenu }) => openMenu? '45px' : '70px'};
    border-radius: 10px;
    cursor: pointer;
    padding: 2px 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: ${({ openMenu }) => openMenu? 'row' : 'column'};
    align-items: center;
    justify-content: ${({ openMenu }) => openMenu? 'none' : 'center'};
    position: relative;
    
    span{
        font-weight: ${({ openMenu }) => openMenu? '400' : '400'};
        margin-left: ${({ openMenu }) => openMenu? '20px' : 'none'};
        font-size: ${({ openMenu }) => openMenu? '16px' : '12px'};
    }

    
    &:hover {
        background-color: #f2f2f2;
    }

    
`;


export const MenuShorts = styled(MenuItem)``;

export const MenuInscricoes = styled(MenuItem)``;

export const MenuMusic = styled(MenuItem)<{ openMenu: boolean }>`
 flex-direction: ${({ openMenu }) => openMenu ? 'row' : 'column'};
 justify-content: ${({ openMenu }) => openMenu ? 'flex-start' : 'center'};

 span {
        margin-left: ${({ openMenu }) => openMenu ? '10px' : '0'};
        text-align: center;
    }
`;

export const MenuVoce = styled(MenuItem)<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu? 'none' : 'flex'};
`;

export const MenuDownloads = styled(MenuItem)<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu? 'none' : 'flex'};
`;

export const ButtonIcon = styled.img`
    width: 20px;
`;


export const Divisor = styled.div<{ openMenu: boolean }>`
    width: 100%;
    height: 1px;
    margin: 20px 0;
    border-top: ${({ openMenu }) => openMenu ? '1px solid #d3d3d3' : 'none'};

`;

export const MenuTitle = styled(MenuItem)<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu? 'flex' : 'none'};
    padding-right: 8px;
    flex: none;
    font-family: "Roboto", "Arial", sans-serif;
    font-size: 1.6rem;
    line-height: 2.2rem;
    white-space: normal;

    span {
        margin-left: ${({ openMenu }) => openMenu ? '5px' : '0'};
        font-weight: ${({ openMenu }) => openMenu? '600' : '400'};
    }

`;

export const MenuSeuCanal = styled(MenuItem)<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu? 'flex' : 'none'};
`;

export const MenuHistorico = styled(MenuItem)<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu? 'flex' : 'none'};
`;

export const MenuPlaylists = styled(MenuItem)<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu? 'flex' : 'none'};
`;

export const MenuSeusVideos = styled(MenuItem)<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu? 'flex' : 'none'};
    flex-direction: ${({ openMenu }) => openMenu ? 'row' : 'column'};
    justify-content: ${({ openMenu }) => openMenu ? 'flex-start' : 'center'};
`;

export const MenuAssistir = styled(MenuItem)<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu? 'flex' : 'none'};
    flex-direction: ${({ openMenu }) => openMenu ? 'row' : 'column'};
    justify-content: ${({ openMenu }) => openMenu ? 'flex-start' : 'center'};
`;

export const MenuVideosGostei = styled(MenuItem)<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu? 'flex' : 'none'};
    flex-direction: ${({ openMenu }) => openMenu ? 'row' : 'column'};
    justify-content: ${({ openMenu }) => openMenu ? 'flex-start' : 'center'};
`;

export const MenuDownloadsB2 = styled(MenuItem)<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu? 'flex' : 'none'};
`;

export const MenuTitleB3 = styled(MenuItem)<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu? 'flex' : 'none'};
    padding-right: 8px;
    flex: none;
    font-family: "Roboto", "Arial", sans-serif;
    font-size: 1.6rem;
    line-height: 2.2rem;
    white-space: normal;

    span {
        margin-left: ${({ openMenu }) => openMenu ? '5px' : '0'};
        font-weight: ${({ openMenu }) => openMenu? '600' : '400'};
    }

    &:not(:hover) {
    pointer-events: none;
    cursor: default;
}

`;

export const ProfissãoProgramador = styled(MenuItem)<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu? 'flex' : 'none'};
    flex-direction: ${({ openMenu }) => openMenu ? 'row' : 'column'};
    justify-content: ${({ openMenu }) => openMenu ? 'flex-start' : 'center'};
`;

export const ButtonIcons = styled.img`
    width: 20px;
    border-radius: 50%;
`;

export const MenuTitleB4 = styled(MenuItem)<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu? 'flex' : 'none'};
    padding-right: 8px;
    flex: none;
    font-family: "Roboto", "Arial", sans-serif;
    font-size: 1.6rem;
    line-height: 2.2rem;
    white-space: normal;
    
    span {
        margin-left: ${({ openMenu }) => openMenu ? '5px' : '0'};
        font-weight: ${({ openMenu }) => openMenu? '600' : '400'};
    }

    &:not(:hover) {
    pointer-events: none;
    cursor: default;
}

`;

export const MenuEmAlta = styled(MenuItem)<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu? 'flex' : 'none'};
`;

export const MenuShopping = styled(MenuItem)<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu? 'flex' : 'none'};
`;

export const MenuMusica = styled(MenuItem)<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu? 'flex' : 'none'};
`;

export const MenuFilmes = styled(MenuItem)<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu? 'flex' : 'none'};
`;

export const MenuAoVivo = styled(MenuItem)<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu? 'flex' : 'none'};
`;

export const MenuJogos = styled(MenuItem)<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu? 'flex' : 'none'};
`;

export const MenuNoticias = styled(MenuItem)<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu? 'flex' : 'none'};
`;

export const MenuEsportes = styled(MenuItem)<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu? 'flex' : 'none'};
`;

export const MenuCursos = styled(MenuItem)<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu? 'flex' : 'none'};
`;

export const MenuModaEBeleza = styled(MenuItem)<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu? 'flex' : 'none'};
`;

export const MenuPodcasts = styled(MenuItem)<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu? 'flex' : 'none'};
`;

export const MenuTitleB5 = styled(MenuItem)<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu? 'flex' : 'none'};
    padding-right: 8px;
    flex: none;
    font-family: "Roboto", "Arial", sans-serif;
    font-size: 1.6rem;
    line-height: 2.2rem;
    white-space: normal;
    
    
    span {
        margin-left: ${({ openMenu }) => openMenu ? '5px' : '0'};
        font-weight: ${({ openMenu }) => openMenu? '600' : '400'};
    }

    &:not(:hover) {
    pointer-events: none;
    cursor: default;
}

`;

export const MenuYtStudio = styled(MenuItem)<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu? 'flex' : 'none'};
`;

export const MenuYtMusic = styled(MenuItem)<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu? 'flex' : 'none'};
`;

export const MenuYtKids = styled(MenuItem)<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu? 'flex' : 'none'};
`;

export const MenuConfig = styled(MenuItem)<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu? 'flex' : 'none'};
`;

export const MenuHist = styled(MenuItem)<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu? 'flex' : 'none'};
`;

export const MenuAjuda = styled(MenuItem)<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu? 'flex' : 'none'};
`;

export const MenuEnv = styled(MenuItem)<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu? 'flex' : 'none'};
`;

export const MenuInformativo = styled(MenuItem)<{ openMenu: boolean }>`
    width:98%;
    display: ${({ openMenu }) => openMenu? 'flex' : 'none'};
    flex-direction: ${({ openMenu }) => openMenu? "row" : "none"};
    text-decoration: none;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 30px;
    span {
        
        font-size: ${({ openMenu }) => openMenu? "14px" : "none"};
        font-weight: ${({ openMenu }) => openMenu? "500" : "none"};
        line-height: ${({ openMenu }) => openMenu? "1rem" : "none"};
        color:#606060;
    }

    &:not(:hover) {
    pointer-events: none;
    cursor: default;
}

`;

export const MenuInformativo2 = styled(MenuInformativo)<{ openMenu: boolean }>`
    display: ${({ openMenu }) => openMenu? 'flex' : 'none'};
   
    &:not(:hover) {
    pointer-events: none;
    cursor: default;
}
`;

export const Copyright = styled(MenuItem)<{ openMenu: boolean }>`
width:98%;
padding: 16px ;
display: ${({ openMenu }) => openMenu? "flex" : "none"};
flex-direction: ${({ openMenu }) => openMenu? "row" : "none"};
text-decoration: none;
margin-top:10px;


span{
    font-size: ${({ openMenu }) => openMenu? "10px" : "none"};
    font-weight: ${({ openMenu }) => openMenu? "400" : "none"};
    line-height: ${({ openMenu }) => openMenu? "1rem" : "none"};
    color:#909090;
    font-family: "Roboto", "Arial", sans-serif;
};
&:not(:hover) {
    pointer-events: none;
    cursor: default;
}
`;

