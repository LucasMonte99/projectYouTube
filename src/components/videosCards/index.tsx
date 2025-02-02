import { Banner, ChannelImage, Container, TextCard, TextContainer, Title, TitleContainer} from "./styles";

interface Props {
    title: string
    thumbnail: string
    channelImage: string
    channelName: string;
    details: string;
    description?: string;
    publishedAt: string;
}


  

function VideoCard(props: Props) {

    return(
        <Container>
            <Banner src={props.thumbnail} alt="Thumbnail do vídeo" />
            <TitleContainer>
                <ChannelImage>{props.channelImage}</ChannelImage>
            <TextContainer>
                    <Title>{props.title}</Title>
                    <TextCard>{props.channelName}</TextCard>
                    <TextCard>{props.details}</TextCard>
                    <TextCard>{(props.publishedAt)}</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default VideoCard;