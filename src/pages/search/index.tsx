import { Container, SearchContainer, VideoContainer } from "./styles";
import { useAppContext } from "../../contexts/menuContext";
import { useSearchContext } from "../../contexts/searchContext";
import { useState, useEffect } from "react";
import axios from 'axios';
import moment from "moment";

function SearchPage() {

  interface Videos {
    id: {
      videoId: string;
    } 
    snippet: {
      title: string;
      thumbnails: {
        high: {
          url: string;
        }
      };
      channelTitle: string;
      publishedAt: string;
      description: string;
    }
  }

  const { openMenu } = useAppContext();
  const { search } = useSearchContext();

  useEffect(() => {
    if (search !== '') {
      load();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const [videos, setVideosapi] = useState<Videos[]>([]);
  const API_KEY = 'AIzaSyAmYCxC6IFesjhJtCKNa1jd-5wbKB2DQ5M';
  const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&maxResults=48&&key=${API_KEY}`;

  async function load() {
    if (search !== '') {
      try {
        const resposta = await axios.get(URL);
        const filteredVideos = resposta.data.items.filter(
          (item: Videos) => item.id.videoId
        );
        setVideosapi(filteredVideos);
      } 
      catch (erro) {
        console.log(erro);
      }
    }
  }

  function getPublishedTime(publishedAt: string) {
    return moment(publishedAt).fromNow();
  }


  return (
    <SearchContainer>
      <Container openMenu={openMenu}>
        {videos.map((video, index) => (
          <VideoContainer key={index}>
            <img src={video.snippet.thumbnails.high?.url} alt={video.snippet.title} />
            <div className="text-content">
              <h3>{video.snippet.title}</h3>
              <p>{video.snippet.channelTitle}</p>
              <p>{getPublishedTime(video.snippet.publishedAt)}</p>
              <p>{video.snippet.description}</p>
            </div>
          </VideoContainer>
        ))}
      </Container>
    </SearchContainer>
  );
}

export default SearchPage;
