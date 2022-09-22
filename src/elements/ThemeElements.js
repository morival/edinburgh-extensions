import { createGlobalStyle } from "styled-components";


export const theme = {
    color: {
        background: 'white',
        text: 'black',
        social_icons: '#B9B9B9',
    },
    fonts: {
        header: 'Montserrat',
        copy: 'Source Sans Pro',
    },
};

export const GlobalStyle = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.color.background};
        border: 0;
        color: ${({ theme }) => theme.color.text};
        font-family: ${({ theme }) => theme.fonts.copy}, sans-serif;
        margin: 0;
        padding: 0;
    }
    h1, h2, h3 {
        font-family: ${({ theme }) => theme.fonts.header}, sans-serif;
    }
    ul {
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;
        list-style: none;
        text-align: center;
    }
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.color.text};
    }
`;