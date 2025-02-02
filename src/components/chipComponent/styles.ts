import styled from "styled-components";


interface ContainerProps {
  openMenu: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: ${({ openMenu }) => (openMenu ? "82%" : "93%")};
  height: 56px;
  position: fixed;
  top: 55px;
  right: 0;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  z-index: 1;

  @media (max-width: 1024px) {
    width: ${({ openMenu }) => (openMenu ? "75%" : "92%")};
  }

  @media (max-width: 688px) {
    width: ${({ openMenu }) => (openMenu ? "85%" : "100%")};
  }

  @media (max-width: 414px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;

export const Button = styled.button.attrs(() => ({
  role: "button",
  "aria-label": "Botão de Categoria",
}))`
  min-height: 90%;
  max-height: 90%;
  display: inline-block;
  white-space: nowrap;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.bgColor};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.borderColor};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const Slider = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  column-gap: 20px;
  height: 70%;
  overflow-x: hidden;
  position: relative;
  padding: 0 10px;
`;

export const SliderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 20px;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  will-change: transform;
  
`;

export const SliderButtons = styled.div`
  min-width: 40px;
  max-width: 40px;
  min-height: 40px;
  max-height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bgColor};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const ButtonIcon = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  
`;






