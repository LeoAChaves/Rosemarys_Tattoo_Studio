import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`


* {
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
  
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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
button{
  border: none;
  background-color: transparent;
}

.btn {
	line-height: 50px;
	height: 50px;
	text-align: center;
	width: 150px;
	cursor: pointer;
}

.btn-three {
  color: black;
	transition: all 0.5s;
	position: relative;
}

.btn-three::before {
  content: 'Criar nova conta';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
  z-index: 1;
	background-color: #ffb930;
	transition: all 0.3s;
}

.btn-three:hover::before {
	opacity: 0 ;
	transform: scale(0.5,0.5);
}

.btn-three::after {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	opacity: 0;
	transition: all 0.3s;
	border: 1px solid #ffb930;
	transform: scale(1.2,1.2);
}

.btn-three:hover::after {
	opacity: 1;
	transform: scale(1,1);
}

`;