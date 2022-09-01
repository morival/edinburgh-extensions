import * as React from 'react';

import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';


const LayoutStyles = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
`;


export default function Layout({ pageTitle, children }) {
  return (
        <LayoutStyles>
            <Header />
            {/* <title>{pageTitle}</title> */}
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
            <Footer />
        </LayoutStyles>
  )
}