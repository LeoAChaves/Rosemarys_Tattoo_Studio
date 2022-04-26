import funcBGdark from "../assets/images/funcBGdark.png";
import funcBGlight from "../assets/images/funcBGlight.png";
import BackgroundDark from "../assets/backgroundDark.png";
import BackgroundLight from "../assets/backgroundLight.png";

const branco_rosado_opaco = "#e5e1d2b6";
const amarelo = "#FFB930";
const preto = "#0A0807";
const vermelho = "#7B0000";

export const lightTheme = {
  body: "#FDFDFD",
  primary: "#E5E1D280",
  primary_solid: "#E5E1D2",
  text: "#7B0000",
  button: "#FFB930",
  button_text: "#282320",
  input: "#FDFDFD",
  card: "#FDFDFD",
  text: "#7B0000",
  input_placeholder: "#7B0000",
  card_border: "#7B0000",
  card_text: "#7B0000",
  card_text2: "#211F1E",
  card_info: "#5E5A57",
  funcBG: funcBGlight,
  homeBG: "#FDFDFD",
  homeBGSec: branco_rosado_opaco,
  branco_rosado_opaco,
  background: BackgroundLight,
  agendamento: "#FFB930",
  btn_agendamento: "#FFB930",
  portfolioAgendamento: "#000000",
  amarelo,
  preto,
  vermelho,
};

export const darkTheme = {
  body: "#000000",
  primary: "#7B000080",
  primary_solid: "#7B0000",
  text: "#E5E1D2",
  button: "#282320",
  button_text: "#E5E1D2",
  input: "#E5E1D2",
  input_placeholder: "#5E5A57",
  card: "#E5E1D2",
  card_border: "#000000",
  card_text: "#000000",
  card_text2: "#211F1E",
  card_info: "#5E5A57",
  funcBG: funcBGdark,
  homeBG: "#7B0000",
  homeBGSec: preto,
  btn_agendamento: "#0A0807",
  branco_rosado_opaco,
  background: BackgroundDark,
  agendamento: "#E5E1D280",
  portfolioAgendamento: "#FFB930",
  amarelo,
  preto,
  vermelho,
};
