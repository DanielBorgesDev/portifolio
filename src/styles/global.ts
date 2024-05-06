import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    body {
        background-color: #fbfbfb;
        flex-direction: column;
        align-items: center;
        display: flex;
     
    }
    h2 {
        color: #141414;
        margin-top: 0;
        margin-bottom: 8px;
        font-size: 26px;
        font-weight: 500;
        line-height: 1.385em;
    }
    
    body, input, textarea, button {
        color: black;
        font-family: Inter, sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.714em;
    }
`