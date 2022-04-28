import styled from "styled-components";

export const Container = styled.div`
    /* MODAL */
    @-webkit-keyframes example {
        from {top:-100px;opacity: 0;}
        to {top:0px;opacity:1;}
    }
    

    @keyframes example {
        from {top:-100px;opacity: 0;}
        to {top:0px;opacity:1;}
    }

    .modalContainer{
        display: none;
        width: 100vw;
        min-height: 100vh;
        background-color: ${({ theme }) => theme.branco_rosado_opaco};
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: 2000;
        justify-content: center;
        align-items: center;
        padding-top: 40px;
    }

    .modalContainer:target {
        display: flex;
        position: absolute;
        
        width: 100%;
    }


    .modal{
        background-color: ${({ theme }) => theme.body};
        
        width: 50%;
        min-width: 300px;

        overflow-x: hidden;
        box-shadow: 0 0 0 10px ${({ theme }) => theme.text};
        position: relative;

        display: flex;
        flex-direction:column;
        align-items: center;

        -webkit-animation-name: example; 
        -webkit-animation-duration: 0.5s; 
        animation-name: example;
        animation-duration: 0.5s;
    }

    .detalhes-modal{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        margin: 20px;
    }

    p{
        color: ${({ theme }) => theme.text};
    }

    .descricao-modal{
        margin: 20px;
    }

    .paragrafo-modal{
        color: ${({ theme }) => theme.text};
    }

    .imgModal{
        max-width:400px;
        max-height:400px;
        width: auto;
        height: auto;
    }

    .fechar{
        width: 100%;

        margin-right: 20px;

        display: flex;
        justify-content: end;
    }

    .closebtn {
        text-decoration: none;
        font-size: 35px;
        font-weight: bold;
        color: ${({ theme }) => theme.text};
    }

    .closebtn:hover,
    .closebtn:focus {
        color: ${({ theme }) => theme.text};
        text-decoration: none;
        cursor: pointer;
    }
`