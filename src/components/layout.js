import * as React from 'react';
import { Header, Footer } from './';
import { LayoutWrapper } from '../elements';
import { ParallaxProvider } from 'react-scroll-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';


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