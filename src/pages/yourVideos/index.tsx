import {
    AddVideoButton,
    ClearButton,
    CloseButton,
    Container,
    UserContainer,
    Modal,
    ModalContent,
    ModalTitle,
    ThumbnailURL,
    UserName,
    VideoDescription,
    VideoTitle,
    YourVideosContainer,
    MessageContainer,
    InputEmpty,
  } from "./styles";

  import { useAppContext } from "../../contexts/menuContext";
  import { useState, useContext, useRef} from "react";
  import { UserContext } from "../../context/userContext";
  import VideoCard from "../../components/videosCards";
  
  function YourVideos() {
    
    interface Videos {
      id: string;
      title: string;
      thumbnail: string;
      description: string;
      publishedAt: string;
    }
  
    const { openMenu } = useAppContext(); 
    const { user, userVideos, createVideos, token } = useContext(UserContext);
  
    const USER_ID = user.id; 
  
    
    const [thumbnail, setThumbnail] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [hideModal, setHideModal] = useState(true); 
  
    
    const thumbnailRef = useRef<HTMLInputElement>(null);
    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);
  
   
    const [thumbnailValid, setThumbnailValid] = useState(true);
    const [titleValid, setTitleValid] = useState(true);
    const [descriptionValid, setDescriptionValid] = useState(true);
  
    
    const handleValidation = (): boolean => {
      const isThumbnailValid = thumbnail.trim() !== "";
      const isTitleValid = title.trim() !== "";
      const isDescriptionValid = description.trim() !== "";
  
      setThumbnailValid(isThumbnailValid);
      setTitleValid(isTitleValid);
      setDescriptionValid(isDescriptionValid);
  
      if (!isThumbnailValid) thumbnailRef.current?.focus();
      else if (!isTitleValid) titleRef.current?.focus();
      else if (!isDescriptionValid) descriptionRef.current?.focus();
  
      return isThumbnailValid && isTitleValid && isDescriptionValid;
    };
  
    
    const sendVideo = () => {
      if (handleValidation()) {
        const date: Date = new Date();
        createVideos(token, USER_ID, title, description, thumbnail, date); 
        setHideModal(true); 
        clearInputs(); 
      }
    };
  
    
    const clearInputs = () => {
      setThumbnail("");
      setTitle("");
      setDescription("");
      if (thumbnailRef.current) thumbnailRef.current.value = "";
      if (titleRef.current) titleRef.current.value = "";
      if (descriptionRef.current) descriptionRef.current.value = "";
    };
  
    
    const closeModal = () => {
      clearInputs();
      setHideModal(true);
      setThumbnailValid(true);
      setTitleValid(true);
      setDescriptionValid(true);
    };
  
    
    function getTimeDifference(publishedAt: string): string {
      const diff = Date.now() - Date.parse(publishedAt);
      const minute = 60 * 1000;
      const hour = 60 * minute;
      const day = 24 * hour;
      const week = 7 * day;
      const month = 30 * day;
      const year = 12 * month;
  
      if (diff < minute * 5) {
        return "Agora";
      } else if (diff < hour) {
        const minutes = Math.floor(diff / minute);
        return `Há ${minutes} ${minutes < 2 ? "minuto" : "minutos"}`;
      } else if (diff < day) {
        const hours = Math.floor(diff / hour);
        return `Há ${hours} ${hours < 2 ? "hora" : "horas"}`;
      } else if (diff < week) {
        const days = Math.floor(diff / day);
        return `Há ${days} ${days < 2 ? "dia" : "dias"}`;
      } else if (diff < month) {
        const weeks = Math.floor(diff / week);
        return `Há ${weeks} ${weeks < 2 ? "semana" : "semanas"}`;
      } else if (diff < year) {
        const months = Math.floor(diff / month);
        return `Há ${months} ${months < 2 ? "mês" : "meses"}`;
      } else {
        const years = Math.floor(diff / year);
        return `Há ${years} ${years < 2 ? "ano" : "anos"}`;
      }
    }
    

  
    
    return (
      <YourVideosContainer>
        
        <Container openMenu={openMenu}>
          <UserContainer>
            <UserName>{user && user.name ? user.name : ''}</UserName>
            <AddVideoButton onClick={() => setHideModal(false)}>
              Cadastrar Vídeo
            </AddVideoButton>
          </UserContainer>
  
          
          <Modal hideModal={hideModal}>
            <ModalContent>
              <CloseButton onClick={closeModal}>X</CloseButton>
              <ModalTitle>Enviar Novo Vídeo</ModalTitle>
  
              <ThumbnailURL
                type="text"
                placeholder="URL da thumbnail (ex: https://...)"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
                ref={thumbnailRef}
                valid={thumbnailValid}
              />
              <MessageContainer>
                <InputEmpty valid={thumbnailValid}>
                  Digite a URL da thumbnail
                </InputEmpty>
              </MessageContainer>
  
              <VideoTitle
                type="text"
                placeholder="Título do vídeo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                ref={titleRef}
                valid={titleValid}
              />
              <MessageContainer>
                <InputEmpty valid={titleValid}>Digite o título do vídeo</InputEmpty>
              </MessageContainer>
  
              <VideoDescription
                type="text"
                placeholder="Descrição do vídeo"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                ref={descriptionRef}
                valid={descriptionValid}
              />
              <MessageContainer>
                <InputEmpty valid={descriptionValid}>
                  Digite a descrição do vídeo
                </InputEmpty>
              </MessageContainer>
  
              <AddVideoButton onClick={sendVideo}>Adicionar Vídeo</AddVideoButton>
              <ClearButton onClick={clearInputs}>Limpar Campos</ClearButton>
            </ModalContent>
          </Modal>
  
          
          {Array.isArray(userVideos) && userVideos.length > 0 ? (
            userVideos.map((video: Videos) => (
              <VideoCard
              key={video.id}
              title={video.title}               
              thumbnail={video.thumbnail}       
              channelImage={user?.nome?.charAt(0).toUpperCase() || ""}  
              channelName={user?.nome || "Canal Desconhecido"}          
              details={video.description || "Sem descrição disponível"} 
              publishedAt={getTimeDifference(video.publishedAt)}                   
            />
            ))
          ) : (
            <h1>Este canal não possui vídeos</h1>
          )}
        </Container>
      </YourVideosContainer>
    );
  }
  
  export default YourVideos;
