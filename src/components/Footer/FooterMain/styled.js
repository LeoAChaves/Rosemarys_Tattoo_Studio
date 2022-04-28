import styled from "styled-components";

export const FM = styled.footer`
    color: ${({ theme }) => theme.branco_opaco};

    div{
        height: 200px;
        background-color: ${({ theme }) => theme.footer};
        display: flex;
        justify-content: flex-start;
        align-items: center;
        div{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            margin-left: 8%;
            width: 25%;
            h3{
                margin-bottom: 5px;
            }
            p{
                margin-top: 5px;
            }
            img{
                width: 150px;
            }
        }
    }
`