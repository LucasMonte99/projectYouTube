import styled from "styled-components";

interface InputValid {
  valid: boolean;
}

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1920px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
`;


export const SignUpContainer = styled.div`
  width: 450px;
  height: 620px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 45px 0px 45px;
  box-sizing: border-box;

  @media (max-width: 834px) {
    width: 550px;
    height: 530px;
    padding: 60px 10px;
  }

  @media (max-width: 414px) {
    width: 350px;
    height: 530px;
    padding: 60px 10px;
  }
`;


export const ImagemContainer = styled.div`
  display: flex;
  margin-left: 30px;
  max-width: 50px;

`;


export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 400;
  margin: 10px 0;
`;

export const SubTitle = styled.h4`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 400;
  font-size: 1.1rem;
  margin: 0 0 30px 0;
`;

export const BaseInput = styled.input<InputValid>`
  width: 100%;
  height: 50px;
  border: ${({ valid, theme }) => valid ? `1px solid ${theme.colors.borderDefault}` : `1px solid ${theme.colors.error}`};
  border-radius: 5px;
  font-size: 17px;
  padding: 0 10px;
  box-sizing: border-box;

  &:focus {
    border-color: ${({ valid, theme }) => valid ? theme.colors.primaryBorderFocus : theme.colors.error};
    border-width: 2px;
    outline: none;
  }
`;

export const UserNameInput = styled(BaseInput)``;
export const UserEmailInput = styled(BaseInput)`
  margin-top: 30px;
`;

export const UserPasswordInput = styled(BaseInput)`
  height: 35px;
`;

export const ComparePassword = styled(BaseInput)`
  height: 35px;
`;

export const InputEmpty = styled.span<InputValid>`
  display: ${({ valid }) => (valid ? "none" : "block")};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.error};
`;

export const MessageContainer = styled.div`
  width: 100%;
`;

export const PasswordContainer = styled.div`
  display: flex;
  width: 100%;
  column-gap: 15px;
  margin-top: 10px;
`;

export const PasswordSpan = styled.span`
  color: rgba(0, 0, 0, 0.7);
  font-size: 14px;
  font-weight: 400;
`;

export const CheckBoxContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 5px;
  margin-top: 5px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  box-sizing: border-box;
  margin-top: 30px;
`;

export const SignIn = styled.span`
  color: ${({ theme }) => theme.colors.primaryButton};
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.hoverButton};
  }
`;

export const SignUpButton = styled.button`
  width: 100px;
  height: 100%;
  border: none;
  background-color: ${({ theme }) => theme.colors.primaryButton};
  border-radius: 5px;
  color: #fff;
  font-weight: 600;
  font-size: 0.8rem;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverButton};
  }
`;

