import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F0F2F5;
        --shape: #FFFFFF;

        --text-title: #363F5F;
        --text-body: #969CB3;

        --red: #E62E4D;
        --green: #33CC95;
        --blue: #5429CC;

        --blue-light: #6933ff;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%
        }

        @media (max-width: 720px) {
            font-size: 87.5%
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }

    [diabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`