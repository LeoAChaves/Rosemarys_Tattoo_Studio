import styled from "styled-components";

function FFooter() {
  const FFooter = styled.footer`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.text};
    position: absolute;
    bottom: 0;
  `;
  return (
    <FFooter>
      <p>Todos os direitos reservados</p>
    </FFooter>
  );
}

export default FFooter;
