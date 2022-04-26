import styled from "styled-components";
import Image from "../../components/Image";

export const Main = styled.main`
  color: ${({ theme }) => theme.text};

  height: 100vh;
  width: 100%;

  background: url(${({ theme }) => theme.background}) no-repeat bottom center
    scroll;
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
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  padding: 20px;
`;

export const IconFD = styled.div`
font-size: 45px;
margin-top: 28px;
`

export const Line = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  height: 2px;
  background-color: ${({ theme }) => theme.text};
  margin: 2px 0 7px 0;
`;

export const Line2 = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 1px;
  background-color: ${({ theme }) => theme.text};
`;

export const DivCard = styled.div`
  display: inline-grid;
  grid-template-columns: 3fr 3fr;
  margin: 20px;
  height: 80vh;
`;

export const DivTexto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const H1 = styled.h1`
  font-size: 50px;
`;

export const H2 = styled.h1`
  font-size: 35px;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

export const Paragrafo = styled.p`
  font-size: 16px;
  width: 300px;
`;

export const Paragrafo2 = styled.p`
  font-size: 20px;
  width: 300px;
  color: ${({ theme }) => theme.branco_rosado_opaco};
`;

export const Paragrafo3 = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.text};
`;

export const DivImage = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 250px;
    height: 309px;
    border-radius: 5px;
    margin: 20px;
  }
`;

export const BlocoTres = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 100%;
  background-color: ${({ theme }) => theme.preto};
  padding: 20px;
`;

export const Time = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 3fr);
`;

export const Artista = styled.div`
margin: 30px 30px 100px 30px;
text-align: center;
img {
    width: 250px;
    height: 250px;
    border-radius: 3px;
    margin-bottom: 5px;
    cursor: pointer;
  }
  border: 2px solid ${({ theme }) => theme.branco_rosado_opaco};
  padding: 20px 0 15px 0;
  border-radius: 5px;
`

export const BlocoQuatro = styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  padding-top: 20px;
`;

export const Trabalhos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 4fr);
  img {
    height: 300px;
    width: 100%;
    cursor: pointer;
  }
  margin-top: 45px;
`;

export const BlocoCinco = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  width: 100%;
  background: url(${({ theme }) => theme.background}) no-repeat bottom center scroll;
  padding: 25px;
`;
