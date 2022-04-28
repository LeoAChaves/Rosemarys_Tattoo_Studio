import styled from "styled-components";

export const Div = styled.div`
    margin: 30px;

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
    .editHover{
        position: relative;
    }

    a{
        display:none;
    }

    .editHover:hover a {
        display:block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0; bottom: 0;
        left: 0; right: 0;
        margin: auto;
        z-index: 999;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .editHover:hover > *:not(.iconHover), .editHover:focus, .editHover:active {
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
        -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
        transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
        box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
        transition: all 1s ease;
        -webkit-filter: blur(5px); /* Chrome, Safari, Opera */
        filter: blur(5px);
    }

    .iconHover{
        font-size: 40px;
        color: ${({ theme }) => theme.body};
    }

    .iconHover:active{
        color: ${({ theme }) => theme.text};
    }

    img{
        width: 290px;
        height: 290px;
        object-fit: cover;
    }
`