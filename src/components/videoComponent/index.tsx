import { Container,ChannelImage, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";


function VideoComponent({ video } : any){
    
    return(
        <Container>
            <ImageBanner src="https://i.ytimg.com/vi/rGiieksqZdI/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDbIY53z_7i7nX9UhBUhd1sWGArnA" />
            <TitleContainer>
                <ChannelImage>
                    LM
                </ChannelImage>
                <TextContainer>
                    <Title>{video.title}</Title>
                    <TextCard>{video.channel}</TextCard>
                    <TextCard>{video.views} visualizações  há {video.time}</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default VideoComponent;