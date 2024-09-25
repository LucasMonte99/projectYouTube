import { 
    ButtonIcon,
    ButtonIcons,
    Container,
    MenuItem,
    MenuShorts,
    MenuInscricoes,
    MenuMusic,
    MenuVoce,
    MenuDownloads,
    Divisor,
    MenuTitle,
    MenuSeuCanal,
    MenuHistorico,
    MenuPlaylists,
    MenuSeusVideos,
    MenuAssistir,
    MenuVideosGostei,
    MenuDownloadsB2,
    MenuTitleB3,
    ProfissãoProgramador,
    MenuTitleB4,
    MenuEmAlta,
    MenuShopping,
    MenuMusica,
    MenuFilmes,
    MenuAoVivo,
    MenuJogos,
    MenuNoticias,
    MenuEsportes,
    MenuCursos,
    MenuModaEBeleza,
    MenuPodcasts,
    MenuTitleB5,
    MenuYtStudio,
    MenuYtMusic,
    MenuYtKids,
    MenuConfig,
    MenuHist,
    MenuAjuda,
    MenuEnv,
    MenuInformativo,
    MenuInformativo2,
    Copyright,
} from "./styles";
import Home from '../../assets/yYicons/home.png';
import Shorts from '../../assets/yYicons/shorts.png';
import Inscrições from '../../assets/yYicons/youtube-inscrições.png';
import Music from '../../assets/yYicons/youtube-music.png';
import Voce from '../../assets/yYicons/voce.png';
import Downloads from '../../assets/yYicons/icon-download.png';
import Canal from '../../assets/yYicons/seuCanal.png';
import Historico from '../../assets/yYicons/historico.png';
import Playlists from '../../assets/yYicons/playlists.png';
import SeusVideos from '../../assets/yYicons/seusVideos.png';
import Assistir from '../../assets/yYicons/assistirMais.png';
import VideosGostei from '../../assets/yYicons/videosCom.png';
import DownloadsB2 from '../../assets/yYicons/downloads2.png';
import IconProgramador from '../../assets/yYicons/programador.png';
import EmAlta from '../../assets/yYicons/emAlta.png';
import Shopping from '../../assets/yYicons/shopping.png';
import Musica from '../../assets/yYicons/musica.png';
import Filmes from '../../assets/yYicons/filmes.png';
import AoVivo from '../../assets/yYicons/aoVivo.png';
import Jogos from '../../assets/yYicons/jogos.png';
import Noticias from '../../assets/yYicons/noticias.png';
import Esportes from '../../assets/yYicons/esportes.png';
import Cursos from '../../assets/yYicons/cursos.png';
import Moda from '../../assets/yYicons/modaEBeleza.png';
import Podcasts from '../../assets/yYicons/podcasts.png';
import YtStudio from '../../assets/yYicons/yYStudio.png';
import YtMusic from '../../assets/yYicons/icons8-youtube-music-32.png';
import YtKids from '../../assets/yYicons/yTKids.png';
import YtConfig from '../../assets/yYicons/configuracoes.png';
import YtHist from '../../assets/yYicons/historicoDeDenuncias.png';
import YtAjuda from '../../assets/yYicons/ajuda (1).png';
import YtEnviar from '../../assets/yYicons/enviarFeedback.png';









interface IProps {
    openMenu : boolean;
}

function Menu({ openMenu }: IProps){
    return (
        <Container openMenu={openMenu}>
            
                <MenuItem openMenu={openMenu}>   
                    <ButtonIcon alt="" src={Home} />
                    <span>Home</span>
                </MenuItem>

                <MenuShorts openMenu={openMenu}>
                    <ButtonIcon alt="" src={Shorts} />
                    <span>Shorts</span>
                </MenuShorts>

                <MenuInscricoes openMenu={openMenu}>
                    <ButtonIcon alt="" src={Inscrições} />
                    <span>Inscrições</span>
                </MenuInscricoes>

                <MenuMusic openMenu={openMenu}>
                    <ButtonIcon alt="" src={Music} />
                    <span>Youtube Music</span>
                </MenuMusic>

                <MenuVoce openMenu={openMenu}>
                    <ButtonIcon alt="" src={Voce} />
                    <span>Você</span>
                </MenuVoce>

                <MenuDownloads openMenu={openMenu}>
                    <ButtonIcon alt="" src={Downloads} />
                    <span>Downloads</span>
                </MenuDownloads>
            <Divisor openMenu={openMenu} />
        

            
            <MenuTitle openMenu={openMenu}>
                <span>Você</span>
            </MenuTitle>

            <MenuSeuCanal openMenu={openMenu}>
                    <ButtonIcon alt="" src={Canal} />
                    <span>Seu Canal</span>
            </MenuSeuCanal>

            <MenuHistorico openMenu={openMenu}>
                    <ButtonIcon alt="" src={Historico} />
                    <span>Histórico</span>
            </MenuHistorico>

            <MenuPlaylists openMenu={openMenu}>
                    <ButtonIcon alt="" src={Playlists} />
                    <span>Playlists</span>
            </MenuPlaylists>

            <MenuSeusVideos openMenu={openMenu}>
                    <ButtonIcon alt="" src={SeusVideos} />
                    <span>Seus Vídeos</span>
            </MenuSeusVideos>

            <MenuAssistir openMenu={openMenu}>
                    <ButtonIcon alt="" src={Assistir} />
                    <span>Assistir mais tarde</span>
            </MenuAssistir>

            <MenuVideosGostei openMenu={openMenu}>
                    <ButtonIcon alt="" src={VideosGostei} />
                    <span>Vídeos com "Gostei"</span>
            </MenuVideosGostei>

            <MenuDownloadsB2 openMenu={openMenu}>
                    <ButtonIcon alt="" src={DownloadsB2} />
                    <span>Downloads</span>
            </MenuDownloadsB2>

            <Divisor openMenu={openMenu} />

            <MenuTitleB3 openMenu={openMenu}>
                <span>Inscrições</span>
            </MenuTitleB3>

            <ProfissãoProgramador openMenu={openMenu}>
                    <ButtonIcons alt="" src={IconProgramador} />
                    <span>Profissão Programador</span>
            </ProfissãoProgramador>

            <Divisor openMenu={openMenu} />

            <MenuTitleB4 openMenu={openMenu}>
                <span>Explorar</span>
            </MenuTitleB4>

            <MenuEmAlta openMenu={openMenu}>
                    <ButtonIcon alt="" src={EmAlta} />
                    <span>Em Alta</span>
            </MenuEmAlta>

            <MenuShopping openMenu={openMenu}>
                    <ButtonIcon alt="" src={Shopping} />
                    <span>Shopping</span>
            </MenuShopping>

            <MenuMusica openMenu={openMenu}>
                    <ButtonIcon alt="" src={Musica} />
                    <span>Música</span>
            </MenuMusica>

            <MenuFilmes openMenu={openMenu}>
                    <ButtonIcon alt="" src={Filmes} />
                    <span>Filmes</span>
            </MenuFilmes>

            <MenuAoVivo openMenu={openMenu}>
                    <ButtonIcon alt="" src={AoVivo} />
                    <span>Ao vivo</span>
            </MenuAoVivo>

            <MenuJogos openMenu={openMenu}>
                    <ButtonIcon alt="" src={Jogos} />
                    <span>Jogos</span>
            </MenuJogos>

            <MenuNoticias openMenu={openMenu}>
                    <ButtonIcon alt="" src={Noticias} />
                    <span>Notícias</span>
            </MenuNoticias>

            <MenuEsportes openMenu={openMenu}>
                    <ButtonIcon alt="" src={Esportes} />
                    <span>Esportes</span>
            </MenuEsportes>

            <MenuCursos openMenu={openMenu}>
                    <ButtonIcon alt="" src={Cursos} />
                    <span>Cursos</span>
            </MenuCursos>

            <MenuModaEBeleza openMenu={openMenu}>
                    <ButtonIcon alt="" src={Moda} />
                    <span>Moda e Beleza</span>
            </MenuModaEBeleza>

            <MenuPodcasts openMenu={openMenu}>
                    <ButtonIcon alt="" src={Podcasts} />
                    <span>Podcasts</span>
            </MenuPodcasts>

            <Divisor openMenu={openMenu} />

            <MenuTitleB5 openMenu={openMenu}>
                <span>Mais do YouTube</span>
            </MenuTitleB5>

            <MenuYtStudio openMenu={openMenu}>
                    <ButtonIcon alt="" src={YtStudio} />
                    <span>YouTube Studio</span>
            </MenuYtStudio>

            <MenuYtMusic openMenu={openMenu}>
                    <ButtonIcon alt="" src={YtMusic} />
                    <span>YouTube Music</span>
            </MenuYtMusic>

            <MenuYtKids openMenu={openMenu}>
                    <ButtonIcon alt="" src={YtKids} />
                    <span>YouTube Kids</span>
            </MenuYtKids>

            <Divisor openMenu={openMenu} />

            <MenuConfig openMenu={openMenu}>
                    <ButtonIcon alt="" src={YtConfig} />
                    <span>Configurações</span>
            </MenuConfig>

            <MenuHist openMenu={openMenu}>
                    <ButtonIcon alt="" src={YtHist} />
                    <span>Histórico de denún...</span>
            </MenuHist>

            <MenuAjuda openMenu={openMenu}>
                    <ButtonIcon alt="" src={YtAjuda} />
                    <span>Ajuda</span>
            </MenuAjuda>

            <MenuEnv openMenu={openMenu}>
                    <ButtonIcon alt="" src={YtEnviar} />
                    <span>Enviar feedback</span>
            </MenuEnv>

            <Divisor openMenu={openMenu} />

                
            <MenuInformativo openMenu={openMenu}>
                <span>Sobre Imprensa Direitos autorais Entre em contato Criadores de conteúdo Publicidade Desenvolvedores</span>
            </MenuInformativo>

            <MenuInformativo2 openMenu={openMenu}>
                <span>Termos Privacidade Política e segurança Como funciona o YouTube Testar os novos recursos </span>
            </MenuInformativo2>

            <Copyright openMenu={openMenu}>
                <span>© 2024 Google LLC </span>
            </Copyright>


        </Container>
        
    )
}

export default Menu;