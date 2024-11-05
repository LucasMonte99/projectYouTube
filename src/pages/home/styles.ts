import styled from "styled-components";

export const Container = styled.div<{ openMenu:boolean }>`
    width: 100%;
    max-width: 1920px;
    display: grid;
    grid-template-columns: ${({ openMenu }) => openMenu ? 'repeat(4, 1fr)' : 'repeat(3, 1fr)'};
    column-gap: 20px;
    row-gap: 50px;

`;

