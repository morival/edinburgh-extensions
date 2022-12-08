import * as React from 'react';
import { Banner, Header, Footer } from './';
import { LayoutWrapper } from '../elements';
import { ParallaxProvider } from 'react-scroll-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Layout = ({ children, location }) => {

  return (
    <ParallaxProvider>
      <LayoutWrapper>
        <Header location={location} />
        <Banner location={location} />
        {children}
        <Footer location={location} />
      </LayoutWrapper>
    </ParallaxProvider>
  )
}