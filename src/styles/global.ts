import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        height: 100vh;
        background-color: ${(props) => props.theme['purple-500']};
    }
    
    body, a, button, input {
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 1.6rem;
    }

    a {
        text-decoration: none;
    }
`
