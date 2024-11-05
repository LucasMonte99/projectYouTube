import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    height: 400px;
    background-color: #EAEAEA;
    margin: 0 auto;
    border-radius: 18px;
    
`;

export const TextLogin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 400px;
   
    
`;

export const ImagemContainer = styled.div`
    display: flex;
    padding-top: 40px;
    margin-left: 30px;
`;

export const UserName = styled.span`
    
    color: #1f1f1f;
    margin-left: 30px;
    font-family: "Google Sans", roboto, "Noto Sans Myanmar UI", arial, sans-serif;
    font-weight: 400;
    line-height: 100px;
    font-size: 40px;
`;

export const Input = styled.input`
    padding: 12px; 
    border: 1px solid #ccc; 
    border-radius: 4px; 
    margin-bottom: 16px; 
    font-size: 16px; 
    width: 300px; 
    box-shadow: none; 

    &:focus {
        outline: none; 
        border-color: #1a73e8; 
        box-shadow: 0 0 5px rgba(26, 115, 232, 0.5); 
    }
`;

export const Button = styled.button`
    background-color: #1a73e8;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px; 
    width: 100px; 
    transition: background-color 0.3s;

    &:hover {
        background-color: #155ab6;
    }
`;