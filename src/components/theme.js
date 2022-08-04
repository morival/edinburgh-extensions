import * as React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Normalize } from 'styled-normalize'

const theme = {
    color: {
        background: 'white',
        text: 'orange',
    }
};

const GlobalStyle = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.color.background};
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