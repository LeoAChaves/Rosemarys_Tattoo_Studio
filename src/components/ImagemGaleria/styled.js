import styled from "styled-components";

export const Div = styled.div`
    margin: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    h1{
        margin: 20px;
        color: ${({ theme }) => theme.text};
    }

    .grid{
        display: grid;
        grid-template-columns: repeat(3, 3fr);
    }

    .container{
        display: flex;
        justify-content: space-around;
        align-items: center;

        position: relative;
        overflow: hidden;

        margin: 20px;

        width: 300px;
        height: 300px;

        background: linear-gradient(90deg, rgba(255,185,48,1) 0%, rgba(123,0,0,1) 35%);

        border-radius: 10px;
        border: 1px solid black;

    }

    .bordaAnimada{
        width: 500px;
        height: 290px;

        background-color: white;

        position: absolute;

        animation: rotate 4s infinite ease-in-out;
    }

    .corner{
        width: 290px;
        height: 290px;

        background-color: ${({ theme }) => theme.body};

        z-index: 1;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    @keyframes rotate{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`

export const Article = styled.article`

    img{
        width: 290px;
        height: 290px;
    }
`