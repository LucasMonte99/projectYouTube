import styled from "styled-components";


export const Container = styled.div<{ openMenu: boolean }>`
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: ${({ openMenu }) => (openMenu ? '100px 20px 0 0' : '100px 0 0 0')};
  box-sizing: border-box;
  align-items: flex-start; 
  margin-top: -110px;
  
  @media (max-width: 834px) {
    padding: 100px 10px 0 0;
  }
  @media (max-width: 600px) {
    row-gap: 30px;
    padding: 100px 10px 0 0;
  }
  @media (max-width: 414px) {
    padding: 100px 10px 0 0;
  }
`;

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start; /* Alinha o container à esquerda */
`;


export const VideoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  

  img {
    width: 450px;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;
  }

  
  .text-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    
     

    h3 {
      margin: 0;
      font-size: 19px;
      font-weight: bold;
      color: #111;
      line-height: 19px;
    }

    .channel-info {
      font-size: 14.4px;
      color: #606060;
      margin: 0;
      line-height: 14px;
    }

    .description {
      font-size: 14px;
      color: #606060;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 14px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    img {
      width: 100%;
      height: auto;
    }

    .text-content {
      width: 100%;
      align-items: center;
      text-align: center;
    }
  }
`;





