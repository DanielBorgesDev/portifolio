import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-600']};
    }

    body {
        background-color: #fbfbfb;
        flex-direction: column;
        align-items: center;
        display: flex;
    }
    
    body, input, textarea, button {
        color: black;
        font-family: Inter, sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.714em;
    }
`