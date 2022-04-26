import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: calc(100vh - 110px);
  display: flex;
  align-items: center;
`;

export const Quadro = styled.section`
  background-color: ${({ theme }) => theme.primary};
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    padding: 30px 10px 0 0;
    color: ${({ theme }) => theme.text};
    font-size: 24px;
    font-weight: 400;
    text-align: center;
  }
`;

export const Form = styled.section`
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 40px 0;

  Input {
    width: 500px;
    height: 50px;
    background-color: ${({ theme }) => theme.input};
    border-radius: 10px;
    padding-left: 10px;
    margin: 0 40px;
    border: none;
    font-size: 16px;
  }

  input::placeholder {
    color: ${({ theme }) => theme.input_placeholder};
  }
  Button {
    align-self: flex-end;
    width: 130px;
    height: 50px;
    margin-right:40px;
    background: ${({ theme }) => theme.button};
    border-radius: 10px;
    font-size: 14px;
    color:  ${({ theme }) => theme.button_text};
    
`;
