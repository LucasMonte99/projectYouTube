import styled from "styled-components";


export const YourVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: #f9f9f9;
  border-radius: 28px;
  margin-top: -30px;
`;


export const Container = styled.div<{ openMenu: boolean }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 24px;
  width: ${({ openMenu }) => (openMenu ? "80%" : "100%")};
  transition: width 0.3s ease-in-out;
  gap: 20px;
`;


export const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 20px 0;
`;


export const UserName = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export const MessageContainer = styled.div`
  width: 100%;
  margin-bottom: 8px;
  text-align: left; 
`;

export const InputEmpty = styled.span<{ valid: boolean }>`
  display: ${({ valid }) => (valid ? "none" : "block")};
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;


export const AddVideoButton = styled.button`
  padding: 10px 16px;
  font-size: 16px;
  background-color: #1a73e8;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0057c2;
  }
`;


export const Modal = styled.div<{ hideModal: boolean }>`
  display: ${({ hideModal }) => (hideModal ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;


export const ModalContent = styled.div`
  background-color: white;
  padding: 32px;
  width: 500px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`;


export const ModalTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
  color: #222;
  text-align: center;
`;


export const ThumbnailURL = styled.input<{ valid: boolean }>`
  padding: 12px;
  width: 100%;
  border: ${({ valid }) => (valid ? "1px solid #ccc" : "1px solid red")};
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    border-color: #1a73e8;
    outline: none;
  }
`;


export const VideoTitle = styled(ThumbnailURL)``;
export const VideoDescription = styled(ThumbnailURL)``;


export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 16px;
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;


export const ClearButton = styled(AddVideoButton)`
  background-color: #f44336;

  &:hover {
    background-color: #d32f2f;
  }
`;