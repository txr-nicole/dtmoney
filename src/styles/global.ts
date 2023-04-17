import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background-gray1:#121214;
        --shapePrincipal-gray2:#202024;
        --shapeSecundaria-gray3:#29292E;
        --shapeTerciaria-gray4:#323238;
        --placeholder-gray5:#7C7C8A;
        --textoBase-gray6:#C4C4CC;
        --titulos-gray7:#E1E1E6;
        --branco-white1:#FFFFFF;

        --green-dark:#015F43;
        --green:#00875F;
        --green-light:#00B37E;

        --red-dark:#AA2834;
        --red:#F75A68;

    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        @media (max-width:1080px){
            font-size: 93.75% // 15px
        }
        @media (max-width:720px){
            font-size:87.5% // 14px
        }
    }

    body{
        background:var(--background-gray1);
        -webkit-font-smoothing:antialiased;
    }

    body,input, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-weight:400;
    }

    button{
        cursor:pointer;
    }

    [disabled]{
        opacity:0.6;
        cursor:not-allowed;
    }
`;
