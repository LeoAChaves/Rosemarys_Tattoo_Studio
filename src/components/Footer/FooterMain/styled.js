import styled from "styled-components";

export const FM = styled.footer`
  color: ${({ theme }) => theme.branco_opaco};

  div {
    height: 200px;
    background-color: ${({ theme }) => theme.footer};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      margin-left: 8%;
      width: 25%;
      h3 {
        margin-bottom: 5px;
      }
      p {
        margin-top: 5px;
      }
      img {
        width: 150px;
      }
      .iconF {
        margin-right: 20px;
        font-size: 27px;
        margin-top: 10px;
        margin-bottom: 18px;
        color: ${({ theme }) => theme.branco_opaco};
      }

      .iconF:active {
        color: ${({ theme }) => theme.branco_opaco};
      }
    }
  }

  @media (max-width: 1000px) {
    .respoF{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    div{
      display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    }
  }
  }
  
`;
