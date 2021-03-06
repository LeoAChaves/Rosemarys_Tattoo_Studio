import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  position: absolute;
  bottom: 0;

  @media (max-width: 600px) {
    position: relative;
    margin-top: 20px;
  }
`;
