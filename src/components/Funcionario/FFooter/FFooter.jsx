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

    @media (max-width: 600px) {
      position: relative;
      height: 60px;
      bottom: none;
      margin-top: 10px;
    }
  `;
  return (
    <FFooter>
      <p>Todos os direitos reservados</p>
    </FFooter>
  );
}

export default FFooter;
