import styled from "styled-components";

export const Div = styled.div`    
    .card{
        background-color: ${({ theme }) => theme.branco_rosado_opaco};
        width: 300px;
        min-height: 300px;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        margin: 30px;
        padding: 20px;

        border-radius: 10px;
    }

    h2{
        text-align: center;
    }

    span, h2{
        margin-bottom: 20px;
    }
`