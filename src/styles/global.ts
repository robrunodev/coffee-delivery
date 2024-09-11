import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
    }

    body{
        background-color: ${(props) => props.theme['white']};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    .baloo-2--bold {
        font-family: "Baloo 2", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
    }

    .baloo-2--extra-bold {
        font-family: "Baloo 2", sans-serif;
        font-optical-sizing: auto;
        font-weight: 800;
        font-style: normal;
    }

`