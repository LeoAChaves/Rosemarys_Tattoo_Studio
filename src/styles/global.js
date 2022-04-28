import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}

h1, h2, h3, .btn{
  font-family: 'Rye', cursive;;
  font-weight: 400;
}

body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Amaranth";
  }
li {
  list-style: none;
}
body {
  background: ${({ theme }) => theme.body};
}

textarea{
  resize: none;
}

/* BTN HEADER */
.btn {
  margin: 20px;
  outline: none;
}

.custom-btn {
  width: 100px;
  height: 40px;
  padding: 10px 25px;
  border: none;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  text-transform: uppercase;
}

.styleHeader {
  position: relative;
  color: #000;
  z-index: 2;
  line-height: 40px;
  padding: 0;
}
.styleHeader:hover{
  border: none;
}
.styleHeader:before,
.styleHeader:after {
  position: absolute;
  content: "";
  width: 0%;
  height: 0%;
  border: 2px solid;
  z-index: -1;
  transition: all 0.3s ease;
}
.styleHeader:before {
    top: 0;
    left: 0;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-top-color: ${({ theme }) => theme.text};
    border-left-color: ${({ theme }) => theme.text};
}
.styleHeader:after{
   bottom: 0;
   right: 0;
   border-top-color: transparent;
   border-left-color: transparent;
   border-bottom-color: ${({ theme }) => theme.text};
   border-right-color: ${({ theme }) => theme.text};
}
.styleHeader:hover:before,
.styleHeader:hover:after {
  border-color: ${({ theme }) => theme.text};
  height: 100%;
  width: 100%;
}

/* BTN FORM */
.styleForm {
  width: 120px;
  height: 40px;

  border-radius: 10px;
  border: none;
  margin-top: 20px;

  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.5s;
  transition-property: transform;
}

.styleForm:hover{
  transform: scale(1.1);
}

/* Tags "A" */
.linkTagA:hover{
  border-bottom: 1px solid black;
  cursor: pointer;
}
`;
