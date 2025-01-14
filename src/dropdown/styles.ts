import styled from "styled-components";


export const MenuContainer = styled.div`
    position: relative;
    display: inline-block;
    align-items: center;
    justify-content: center;
    
    
`;

export const OverflowDropdownMenu = styled.div`
  max-height: 420px;
  overflow-y: auto;
  
`;



export const ImageLogo = styled.img`
    display:flex;
    height:35px;
    width:35px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    margin-left: 75px;
`;

export const DropdownMenu = styled.div`
  display: block;
  position: absolute;
  top: 60px;
  right: 0;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 300px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 100;
`;




export const Ul = styled.ul`
    width: 98%;
    cursor: pointer;
    padding: 2px 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -50px;


`;

export const Li = styled.li`
    padding: 10px 0;
    list-style: none;
    cursor: pointer;
   
`;

export const Divisor = styled.div `
    width: 100%;
    height: 1px; 
    border-top: 1px solid #d3d3d3;

`;


export const DropdownItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px auto;

    img{
        width: 20px;
    }
`;

export const UserImage = styled.img`
    max-width: 20px;
    margin-right: 10px;
    cursor: pointer;
    
`;

export const A = styled.a`
    max-width: 100px;
    margin-left: 10px;
    
    
`;

export const DropdownItemComponent = styled.div`
    display: flex;
    align-self: start;
    
    span{
        margin-left: 15px;
        display: flex;
        flex-direction: row;
        
    }
    
    h2{
        display:block;
        flex-direction: column;
        margin-left: -110px;
        padding:5px;
        font-size: 15px;
        font-weight: 400;
        color: black;
        
    }

    h3{
        display: flex;
        text-align: center;
        align-items:center;
        color: #065fd4;
        cursor: pointer;
        margin-left: -140px;
        margin-top: 40px;
        font-weight: 400;
        font-size: 15px;
    }
`;

export const ButtonIcon = styled.img`
    height:35px;
    width:35px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
   
`;










