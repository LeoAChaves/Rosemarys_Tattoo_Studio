import styled from "styled-components";

export const Div = styled.div`    
    .card{
        background-color: ${({ theme }) => theme.branco_rosado_opaco};
        width: 300px;
        height: 440px;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        margin: 30px;
        padding: 20px;

        border-radius: 20px;
    }

    h2{
        text-align: center;
    }

    span, h2{
        margin-bottom: 20px;
        text-align: center;
    }

    .apagar{
        background-color: ${({ theme }) => theme.text};
        color: ${({ theme }) => theme.body};
    }

    .apagar:hover{
        box-shadow: 0px 0px 10px 5px ${({ theme }) => theme.text};
    }
`