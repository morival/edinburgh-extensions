import * as React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Normalize } from 'styled-normalize'

const theme = {
    color: {
        background: 'white',
        text: 'black',
    }
};

const GlobalStyle = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.color.background};
        color: ${({ theme }) => theme.color.text};
    }
`;

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Normalize />
            {children}
    </ThemeProvider>
  )
}

export default Theme;