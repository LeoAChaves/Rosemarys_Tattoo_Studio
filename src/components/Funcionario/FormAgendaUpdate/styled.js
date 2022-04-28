import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: calc(100vh - 130px);
  display: flex;
  align-items: flex-end;

  @media (max-width: 600px) {
    height: auto;
  }
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
    margin-bottom: 20px;
    color: ${({ theme }) => theme.text};
    font-size: 24px;
    font-weight: 400;
    text-align: center;
  }

  @media (max-width: 600px) {
    margin-top: 60px;
  }
`;

export const Form = styled.section`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 20px;

  .caixa {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }

  Input {
    width: 500px;
    height: 50px;
    background-color: ${({ theme }) => theme.input};
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 40px;
    border: none;
    font-size: 16px;
  }

  input::placeholder {
    color: ${({ theme }) => theme.input_placeholder};
  }

  input[type="time"] {
    color: ${({ theme }) => theme.input_placeholder};
  }

  input[type="date"] {
    color: ${({ theme }) => theme.input_placeholder};
  }

  .inputduracao {
    width: 500px;
    height: 50px;
    background-color: ${({ theme }) => theme.input};
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 40px;
    border: none;
    font-size: 16px;
    color: ${({ theme }) => theme.input_placeholder};
  }

  Button {
    align-self: flex-end;
    width: 130px;
    height: 50px;
    margin-top: 20px;
    background: ${({ theme }) => theme.button};
    border-radius: 10px;
    font-size: 14px;
    color: ${({ theme }) => theme.button_text};
    margin-left: 15px;
  }
  Button:hover {
    box-shadow: 0px 0px 10px 5px ${({ theme }) => theme.button_text};
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    Input {
      width: 350px;
      margin: 10px;
    }

    .inputduracao {
      width: 350px;
      margin: 10px;
    }

    .caixa {
      margin: 10px 0 0 10px;
    }
  }
`;
