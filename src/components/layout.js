import * as React from 'react';
import { Header, Footer } from './';
import { LayoutWrapper } from '../elements';


export const Layout = ({ children }) => {
  return (
        <LayoutWrapper>
            <Header />
            {children}
            <Footer />
        </LayoutWrapper>
  )
}