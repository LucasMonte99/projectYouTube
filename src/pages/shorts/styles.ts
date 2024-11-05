import styled from "styled-components";

export const TitleShorts = styled.span`
    font-family: "Roboto", "Arial", sans-serif;
    font-size: 1.2rem;
    line-height: 7rem;
    font-weight: 600;
    color: #0f0f0f;
    margin-left: 10px;
`;

export const ButtonIcon = styled.img`
    width: 20px;
    margin-left: 5px;


`;

export const Container = styled.div`
    width: 100%;
    max-width: 1920px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;
`;

export const ImageBanner = styled.img`
    width: 100%;
    height: auto;
    border-radius: 12px;
    cursor: pointer;
`;

export const TitleContainer = styled.div`
    width: 100%;
    margin-bottom: 4px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
    cursor: pointer;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.span`
    font-weight: 600;
    color: #0f0f0f;
`;

export const TextCard = styled.span`
    color: #0c0c0c;
    font-size: 14px;
`;