import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.primary};
  height: ${(props) => props.style.height};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 30px;

  .logoGeral {
    width: 300px;
  }

  .logoResponsivo {
    width: 80px;
    display: none;
  }

  .divLinks {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .divLinks > button {
    margin: 0 20px;

    cursor: pointer;
  }

  button {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.text};
  }

  .themeMode {
    margin: 0 20px;
    cursor: pointer;
    color: ${({ theme }) => theme.text};
  }

  @media (max-width: 600px) {
    width: 100%;
    button {
      width: 60px;
    }

    .logoResponsivo {
      display: block;
    }

    .logoGeral {
      display: none;
    }
  }
`;

export const Div = styled.div`
  display: ${(props) => props.div.display};
  color: ${({ theme }) => theme.text};
  font-size: 14px;

  @media (max-width: 600px) {
    display: none;
  }
`;
