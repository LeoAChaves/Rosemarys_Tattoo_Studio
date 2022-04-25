import styled from "styled-components";

export const Header = styled.header`
    background-color: ${({ theme }) => theme.primary};
    height: ${props => props.style.height};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 30px;
    
    img{
        width: 100px;
    }

    .divLinks{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .divLinks > button{
        margin: 0 5px;

        cursor: pointer;
    }

    button{
        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.text};
    }

    .themeMode{
        margin-left: 5px;
        cursor: pointer;
        color: ${({ theme }) => theme.text};
    }
`

export const Div = styled.div`
    display: ${props => props.div.display};
`