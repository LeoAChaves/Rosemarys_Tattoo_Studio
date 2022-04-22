import styled from "styled-components";

function FFooter() {
  const FFooter = styled.footer`
    width: 100%;
    height: 50px;
    background-color: ${({ theme }) => theme.primary};
    position: absolute;
    bottom: 0;
  `;
  return <FFooter />;
}

export default FFooter;
