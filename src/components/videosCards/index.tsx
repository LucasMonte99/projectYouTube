import { useLocation } from "react-router-dom";
import { Container, Banner, TitleContainer, ChannelImage, TextContainer, Title, TextCard } from "./styles";

interface Props {
    title: string;
    thumbnail: string;
    channelImage: string;
    channelName: string;
    details: string;
    publishedAt: string;
}

function VideoCard(props: Props) {
    const location = useLocation();
    const isVideosPage = location.pathname === "/videos";

    return (
        <Container isVideosPage={isVideosPage}>
            <Banner src={props.thumbnail} alt="Thumbnail do vídeo" isVideosPage={isVideosPage} />
            <TitleContainer>
                <ChannelImage>{props.channelImage}</ChannelImage>
                <TextContainer>
                    <Title>{props.title}</Title>
                    <TextCard>{props.channelName}</TextCard>
                    <TextCard>{props.details}</TextCard>
                    <TextCard>{props.publishedAt}</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    );
}

export default VideoCard;
