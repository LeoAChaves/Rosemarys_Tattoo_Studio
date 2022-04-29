import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.primary};
  height: ${(props) => props.style.height};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 30px;

  .logoGeral {
    width: 200px;
  }

  .logoResponsivo {
    width: 80px;
    display: none;
  }

  p {
    color: ${({ theme }) => theme.text};
    font-size: 14px;
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

    .dadosFunc {
      display: none;
    }

    .responsivo {
      display: block;
    }

    .logoGeral {
      display: none;
    }
  }
`;
