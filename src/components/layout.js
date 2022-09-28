import * as React from 'react';
import { Header, Footer } from './';
import { LayoutWrapper } from '../elements';
import { ParallaxProvider } from 'react-scroll-parallax';


export const Layout = ({ children }) => {
  return (
    <ParallaxProvider>
      <LayoutWrapper>
        <Header />
          {children}
        <Footer />
      </LayoutWrapper>
    </ParallaxProvider>
)
}