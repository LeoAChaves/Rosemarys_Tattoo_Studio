import styled from "styled-components";

export const Div = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .icon{
        color: white;
        font-size: 50px;
        margin-bottom: 150px;
    }
    .wrapper{
        width:200px;
        height:60px;
        position: absolute;
        left:48%;
        top:50%;
        transform: translate(-50%, -50%);
    }
    .circle{
        width:20px;
        height:20px;
        position: absolute;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.button_text};
        left:15%;
        transform-origin: 50%;
        animation: circle .5s alternate infinite ease;
    }

    @keyframes circle{
        0%{
            top:60px;
            height:5px;
            border-radius: 50px 50px 25px 25px;
            transform: scaleX(1.7);
        }
        40%{
            height:20px;
            border-radius: 50%;
            transform: scaleX(1);
        }
        100%{
            top:0%;
        }
    }
    .circle:nth-child(2){
        left: 45%;
        animation-delay: .2s;
    }
    .circle:nth-child(3){
        left:auto;
        right: 15%;
        animation-delay: .3s;
    }
    .circle:nth-child(4){
        left: 100%;
        right:auto;
        animation-delay: .4s;
    }
    .shadow{
        width:20px;
        height:4px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.primary};
        position: absolute;
        top:62px;
        transform-origin: 50%;
        z-index: -1;
        left:15%;
        filter: blur(1px);
        animation: shadow .1s alternate infinite ease;
    }

    @keyframes shadow{
        0%{
            transform: scaleX(1.5);
        }
        40%{
            transform: scaleX(1);
            opacity: .7;
        }
        100%{
            transform: scaleX(.2);
            opacity: .4;
        }
    }
    .shadow:nth-child(5){
        left: 45%;
        animation-delay: .2s
    }
    .shadow:nth-child(6){
        left:auto;
        right: 15%;
        animation-delay: .3s;
    }
    .shadow:nth-child(7){
        left: 100%;
        right:auto;
        animation-delay: .4s;
    }
    .wrapper span{
        position: absolute;
        top:75px;
        font-size: 20px;
        letter-spacing: 12px;
        color: ${({ theme }) => theme.text};
        left:15%;
    }
`