import styled from "styled-components";

export const Container = styled.header`
    width:100%;
    height: 55px;
    background-color: #fff;
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
`;

export const LogoContainer = styled.header`
    display: flex;
    align-items: center;
`;

export const ButtonContainer = styled.div<{ margin? : string }>`
    width: 40px;
    height: 40px;
    margin:${({ margin }) => margin? margin : 0 };
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
   

    &:hover {
        background-color: #f2f2f2;
        
    }
    
`;

export const ButtonIcon = styled.img`
    width: 20px;

`;

export const SearchContainer = styled.div`
    display:flex;
`;

export const SearchInputContainer = styled.div`
    width:450px;
    height:35px;
    border: 1px solid #d3d3d3;
    border-radius: 40px 0 0 40px;
    display:flex;
    align-items:center;
    padding:0 16px;
`;

export const SearchInput = styled.input`
    width:100%;
    height:25px;
    outline:none;
    border:none;
`;

export const KeyboardIcon = styled.img`
    width: 20px;
    cursor: pointer;
`;

export const SearchButton = styled.div`
    border-radius:0 40px 40px 0;
    height:35px;
    width:70px;
    background-color:#f8f8f8;
    border: 1px solid #d3d3d3;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
`;

export const HeaderButton = styled.div`
    width:300px;
    display:flex;
`;

export const FazerLogin = styled.button`
    display: flex;
    height: 36px;
    font-size: 14px;
    line-height: 36px;
    color: #065fd4;
    border: 1px solid #d3d3d3;
    border-radius: 18px;
    font-family: "Roboto", "Arial", sans-serif;
    font-weight:500;
    cursor: pointer;
    box-sizing:border-box;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    margin-left: 50px;
    margin-top: 2px;
    background-color: white;
    img{
        width: 20px;
        height: 20px;
    }

    span{
        display: block;
        margin: 5px;
    }

    &:hover {
        background-color: #3ea6ff54;
        border:none;
    }
`;

