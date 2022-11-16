import * as React from 'react';
import { GlobalStyle, theme } from '../elements';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';


export const Theme = ({ children }) => {

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Normalize />
        {children}
    </ThemeProvider>
  )
}