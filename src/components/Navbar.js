import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FaTimes, FaBars } from 'react-icons/fa';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MenuIcon, NavbarWrapper, NavLink, NavList, NavListItem, NavLogo } from '../elements';


export const Navbar = () => {

    const data = useStaticQuery(graphql`
        query NavQuery {
            file(name: {eq: "project_04"}) {
                childImageSharp {
                  gatsbyImageData(height: 80)
                }
              }
              site {
                siteMetadata {
                  links {
                    link_2
                    link_3
                    link_4
                    link_5
                  }
                }
              }
            }
    `);

    const image = getImage(data.file)
    const { link_2, link_3, link_4, link_5 } = data.site.siteMetadata.links;

    const [click, setClick] = useState(false)
    // const [scroll, setScroll] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
 
    // console.log(image)
   
    // const changeNav = () => {
    //     if (window.scrollY >= 80) {
    //         setScroll(true)
    //     } else {
    //         setScroll(false)
    //     }
    // }
    
    // useEffect(() => {
    //     changeNav();
    //     window.addEventListener('scroll', changeNav)
    // }, [])

    return (
        <NavbarWrapper>
            <NavLogo to="/" onClick={closeMobileMenu}><GatsbyImage image={image} alt="logo" /></NavLogo>
            <MenuIcon click={click} onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </MenuIcon>
            <NavList click={click} onClick={handleClick}>
                <NavListItem><NavLink to="/services">{link_2}</NavLink></NavListItem>
                <NavListItem><NavLink to="/projects">{link_3}</NavLink></NavListItem>
                <NavListItem><NavLink to="/about">{link_4}</NavLink></NavListItem>
                <NavListItem><NavLink to="/contact">{link_5}</NavLink></NavListItem>
            </NavList>
        </NavbarWrapper>
    )
};
