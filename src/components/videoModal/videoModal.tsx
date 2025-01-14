import React, { useRef } from "react";
import {
  Modal,
  ModalContent,
  ModalTitle,
  ThumbnailURL,
  VideoTitle,
  VideoDescription,
  CloseButton,
  AddVideoButton,
  ClearButton,
  MessageContainer,
  InputEmpty,
} from "../../pages/yourVideos/styles";

interface VideoModalProps {
  hideModal: boolean;
  closeModal: () => void;
  sendVideo: () => void;
  clearInputs: () => void;
  thumbnail: string;
  title: string;
  description: string;
  setThumbnail: (value: string) => void;
  setTitle: (value: string) => void;
  setDescription: (value: string) => void;
  thumbnailValid: boolean;
  titleValid: boolean;
  descriptionValid: boolean;
}

const VideoModal: React.FC<VideoModalProps> = ({
  hideModal,
  closeModal,
  sendVideo,
  clearInputs,
  thumbnail,
  title,
  description,
  setThumbnail,
  setTitle,
  setDescription,
  thumbnailValid,
  titleValid,
  descriptionValid,
}) => {
  const thumbnailRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  return (
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
          <InputEmpty valid={thumbnailValid}>Digite a URL da thumbnail</InputEmpty>
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
          <InputEmpty valid={descriptionValid}>Digite a descrição do vídeo</InputEmpty>
        </MessageContainer>

        <AddVideoButton onClick={sendVideo}>Adicionar Vídeo</AddVideoButton>
        <ClearButton onClick={clearInputs}>Limpar Campos</ClearButton>
      </ModalContent>
    </Modal>
  );
};

export default VideoModal;
