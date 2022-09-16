import * as React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Normalize } from 'styled-normalize'

const theme = {
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

const GlobalStyle = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.color.background};
        color: ${({ theme }) => theme.color.text};
        font-family: ${({ theme }) => theme.fonts.copy}, sans-serif;
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

export const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Normalize />
            {children}
    </ThemeProvider>
  )
}