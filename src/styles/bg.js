import styled from "styled-components";
export const bg = styled.body`
  height: 100vh;
  width: 100%;
  background-image: url(${({ theme }) => theme.funcBG});
  background-size: cover;
  background-position: center;
`;
