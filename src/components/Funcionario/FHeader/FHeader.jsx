import styled from "styled-components";

function FHeader() {
  const FHeader = styled.header`
    width: 100%;
    height: 100px;
    background-color: ${({ theme }) => theme.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    font-weight: 700;
    h1 {
      text-transform: uppercase;
      color: ${({ theme }) => theme.text};
    }
    ul {
      color: ${({ theme }) => theme.text};
    }
    .logout {
      width: 120px;
      display: flex;
      justify-content: space-between;
    }
  `;
  return (
    <FHeader>
      <ul>
        <li>ID:</li>
        <li>Nome:</li>
        <li>Função:</li>
        <li>Status:</li>
      </ul>
      <h1>Rosemary's</h1>
      <ul className="logout">
        <li>Return</li>
        <li>Logout</li>
      </ul>
    </FHeader>
  );
}

export default FHeader;
