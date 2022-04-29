import styled, {keyframes} from "styled-components";
import { rollIn, fadeIn } from 'react-animations'
const rotateAnima = keyframes`${rollIn}`
const fadeAnime = keyframes`${fadeIn}`



export const Main = styled.main`
  color: ${({ theme }) => theme.text};

  height: auto;
  width: 100%;

  background-position: 30% 0%;
  background-size: cover;
`;

export const BlocoUm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: url(${({ theme }) => theme.background}) no-repeat bottom center scroll;
  background-position: 30% 0%;
  background-size: cover;

  height: 100vh;
  width: 100%;

  padding-left: 80px;

  div{
    animation: 1s ${rotateAnima};
    
  }

  .heroText {
    font-size: 75px;
    text-transform: uppercase;
    animation: 2.5s ${fadeAnime};
  }
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
`;

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
  height: 100%;
`;

export const H1 = styled.h1`
  font-size: 50px;
`;

export const H2 = styled.h2`
  font-size: 35px;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

export const Paragrafo = styled.p`
  font-size: 16px;
  width: 300px;
`;

export const H3 = styled.h3`
  font-size: 20px;
  width: 300px;
  color: ${({ theme }) => theme.branco_opaco};
  position: relative;
  z-index: 1000;
`;

export const Paragrafo2 = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.text};
`;

export const DivImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  img {
    width: 250px;
    height: 309px;
    border-radius: 5px;
    margin: 20px;
    object-fit: cover;
    border: 3px solid ${({ theme }) => theme.text};
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
  position: relative;
  margin: 50px 30px 50px 30px;
  text-align: center;
  cursor: pointer;
  img {
    width: 250px;
    height: 400px;
    border-radius: 3px;
    margin-bottom: 5px;
    object-fit: cover;
  }
  &:hover img {
    opacity: 80%;
    transition: all 1s ease;
    -webkit-filter: blur(2px); /* Chrome, Safari, Opera */
    filter: blur(2px);
  }

  div {
    display: none;
  }

  border: 2px solid ${({ theme }) => theme.branco_rosado_opaco};
  padding: 20px 20px 15px 20px;
  border-radius: 5px;
  transition: all 1s ease;

  &:hover div {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 999;
    font-size: 45px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

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
  .trabAnima{
    height: 300px;
    width: 100%;
    img {
      height: 100%;
    width: 100%;
    cursor: pointer;
    object-fit: cover;
    transition: all 1s ease;
  }
  }
  

  .fotoTrab:hover {
    opacity: 60%;
    transition: all 1s ease;
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
  background: url(${({ theme }) => theme.background}) no-repeat bottom center
    scroll;
  padding: 25px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;

  margin-top: 30px;
  background-color:  ${({ theme }) => theme.primary};
  min-height: 400px;
  
  .formContato{
    width: 500px;
    
    color: ${({ theme }) => theme.text};

    padding: 30px;
    border-radius: 15px;

    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }

  .cardForm {
    border-radius: 10px;
    border: none;

    margin: 10px;
    padding: 10px;

    width: 30vw;
  }

  input{
    height: 30px;
  }

  textarea {
    height: 60px;
  }

  .enviar {
    background-color: ${({ theme }) => theme.btn_agendamento};
    color: ${({ theme }) => theme.button_text};
  }

  .enviar:hover {
    box-shadow: 0px 0px 10px 5px ${({ theme }) => theme.btn_agendamento};
  }
`;
