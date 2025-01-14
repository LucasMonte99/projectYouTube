import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 80%;
    height: 460px;
    background-color: #EAEAEA;
    margin: 0 auto;
    border-radius: 18px;
`;

export const TextLogin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    width: 95%;
    margin-top: -80px;
   
`;

export const SubTitle = styled.div`
    display: flex;
    flex-direction: inherit;
    color: #1f1f1f;
    font-family: "Google Sans", roboto, "Noto Sans Myanmar UI", arial, sans-serif;
    margin-left: 30px;
    max-width: 180px;
`;

   

export const ImagemContainer = styled.div`
    display: flex;
    padding-top: 40px;
    margin-left: 30px;
    max-width: 50px;

`;

export const UserName = styled.span`
    
    color: #1f1f1f;
    margin-left: 30px;
    font-family: "Google Sans", roboto, "Noto Sans Myanmar UI", arial, sans-serif;
    font-weight: 400;
    line-height: 100px;
    font-size: 40px;
    max-width: 200px;
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
    border-radius: 20px;
    cursor: pointer;
    font-size: 16px; 
    width: 100px; 
    transition: background-color 0.3s;
    

    &:hover {
        background-color: #155ab6;
    }
`;

export const ButtonCreate = styled.button`
    color: #0b57d0;
    background-color: transparent;
    border: none; 
    border-radius: 20px;
    font-family: "Google Sans", roboto, "Noto Sans Myanmar UI", arial, sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    margin-right: 120px;
    margin-top: -40px;
    
    &:hover {
        background-color: rgba(11, 87, 208, 0.1);
    }
`;

export const ForgotEmail = styled.div`
    display: flex;
    
    color: #0b57d0;
    font-family: "Google Sans", roboto, "Noto Sans Myanmar UI", arial, sans-serif;
    
    
    background-color: transparent;
    border: none;
    border-radius: 4px;
    letter-spacing: 0.015625rem;
    cursor: pointer;
    margin-bottom: 20px;
    margin-right: 160px;
    outline: none;
    padding: 0;
    position: relative ;
    text-align: left;

    &:hover {
        background-color: rgba(11, 87, 208, 0.1);
    }
`;

export const Alert = styled.span`
    margin-bottom: 40px;
    font-size: 15px;
    color: #444746;
    font-family: "Google Sans", roboto, "Noto Sans Myanmar UI", arial, sans-serif;
    letter-spacing: 0rem;
    max-width: 320px;
    span{
        text-decoration: underline;
        color: #0b57d0;
    }
`;

export const DropdownMenu = styled.div<{ isOpen:boolean }>`
  padding: 20px;
  position: absolute;
  background-color: rgb(240 244 249 / 1);
  border: 1px solid #ddd;
  border-radius: 18px;
  margin-top: 22px;
  margin-right: -20px;  
  display: ${(props: { isOpen: boolean }) => (props.isOpen ? 'block' : 'none')};

  
`;

export const DropdownItem = styled.div`
    display: flex;
    padding: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    cursor: pointer;
    font-weight: bold;
    font-size: 1rem;
    line-height: 2rem;


    &:hover {
        background-color: #e6f3ff;
        
    }

`;

export const StyledLink = styled(Link)`
    display: flex;
    padding: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    cursor: pointer;
    font-weight: bold;
    font-size: 1rem;
    line-height: 2rem;
    text-decoration: none;
    color: inherit;

    &:hover {
        background-color: #e6f3ff;
        
    }

  
`;
