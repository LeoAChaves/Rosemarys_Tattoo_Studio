import styled from "styled-components";

export const Main = styled.main`
  color: ${({ theme }) => theme.text};

  height: 100vh;
  width: 100%;

  
  background: url(${({ theme }) => theme.background}) no-repeat bottom center scroll;
  background-position: 30% 0%;
  background-size: cover;
`;

export const BlocoUm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100vh;
  width: 100%;

  padding-left: 50px;

  
`;

export const BlocoDois = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:  ${({ theme }) => theme.homeBG};
`;
export const BlocoTres = styled.div`
  height: 100vh;
  width: 100%;
  background-color:  ${({ theme }) => theme.homeBG};
`;

export const BlocoQuatro = styled.div`
  height: 100vh;
  width: 100%;
  background-color:  ${({ theme }) => theme.homeBG};
`;

export const BlocoCinco = styled.div`
  height: 100vh;
  width: 100%;
  background-color:  ${({ theme }) => theme.homeBG};
`;
