import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  cursor: pointer;

`;

export const Banner = styled.img`
  width: 100%;
  height: 210px;
  border-radius: 12px;
  object-fit: cover;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 12px 0;
`;

export const ChannelImage = styled.div`
  background-color: #ddd;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.span`
  font-weight: 600;
  color: #0f0f0f;
  font-size: 16px;
  line-height: 1.4;
`;

export const TextCard = styled.span`
  color: #8c8c8c;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
