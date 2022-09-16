import * as React from 'react';
import { Header, Footer } from './';
import styled from 'styled-components';


const LayoutStyles = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
`;


export const Layout = ({ children }) => {
  return (
        <LayoutStyles>
            <Header />
            {children}
            <Footer />
        </LayoutStyles>
  )
}