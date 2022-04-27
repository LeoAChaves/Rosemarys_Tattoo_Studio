import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: calc(100vh - 130px);
  display: flex;
  align-items: flex-start;
`;

export const Quadro = styled.section`
  background-color: ${({ theme }) => theme.primary};
  width: 100%;
  height: 90%;
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
    width: 100px;
    height: 40px;
    margin-top: 20px;
    background: ${({ theme }) => theme.button};
    border-radius: 10px;
    font-size: 13px;
    color: ${({ theme }) => theme.button_text};
    margin-left: 15px;
  }
  Button:hover {
    box-shadow: 0px 0px 10px 5px ${({ theme }) => theme.button_text};
  }
`;
