import { Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer,TitleShorts,ButtonIcon } from "./styles";
import ImagemShorts from '../../assets/videoframe_4380.png';
import ImagemShorts2 from '../../assets/videoframe_3741.png';
import ShortsIcon from '../../assets/yYicons/icons8-youtube-shorts-48 (1).png';
import ImagemShort3 from '../../assets/videoframe_3629.png';
import ImagemShort4 from '../../assets/videoframe_2417.png';

function Shorts(){
    return(
        <div>
            <ButtonIcon alt="" src={ShortsIcon} />
            <TitleShorts>
             <span id="title">Shorts</span>
            </TitleShorts>

            <Container>

                    <TitleContainer>
                        <ImageBanner src={ImagemShorts} />
                        <TextContainer>
                            <Title>DENJI E POCHITA ESTÃO NESSE ESTADO...</Title>
                            <TextCard>10 mil visualizações</TextCard>
                        </TextContainer>
                    </TitleContainer>

                    <TitleContainer>
                        <ImageBanner src={ImagemShorts2} />
                        <TextContainer>
                            <Title>O GOJO ODEIA ELE! O GRAU 1 MAIS FORTE</Title>
                            <TextCard>125 mil visualizações</TextCard>
                        </TextContainer>
                    </TitleContainer>

                    <TitleContainer>
                        <ImageBanner src={ImagemShort4} />
                        <TextContainer>
                            <Title>Esperma Negro Humilhou os Heróis Classe S</Title>
                            <TextCard>171 mil visualizações</TextCard>
                        </TextContainer>
                    </TitleContainer>

                    <TitleContainer>
                        <ImageBanner src={ImagemShort3} />
                        <TextContainer>
                            <Title>Esse herói é IGUAL ao Saitama?! 😱🔥</Title>
                            <TextCard>101 mil visualizações</TextCard>
                        </TextContainer>
                    </TitleContainer>
            </Container>
        </div>
    )
}

export default Shorts;