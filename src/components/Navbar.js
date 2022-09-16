import React, { useState } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import media from "styled-media-query";
import { FaTimes, FaBars } from 'react-icons/fa';
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const NavbarStyles = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    background-color: gainsboro;
    ${media.lessThan('medium')`
        justify-content: center;
    `}
`;
const NavList = styled.ul`
    ${media.lessThan('medium')`
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 100vh;
        position: absolute;
        top: ${({ click }) => (click ? '0' : '-2000px')};
        opacity: 1;
        transition: all 0.2s ease;
        background: mediumblue;
        z-index: 1;
    `}
`;
const  NavListItem = styled.li`
    display: flex;
    align-items: center;
    height: 80px;
    ${media.lessThan('medium')`
        width: 100%;
        justify-content: center;
    `}
`;
const NavLogo = styled(Link)`
    z-index: 999;
`;
const NavLink = styled(Link)`
    padding: 1rem;
    font-size: 1.5rem;
    ${media.lessThan('medium')`
        width: 100%;
        padding: 1rem 0;
        max-width: 350px;
        font-size: 2rem;
        color: orange;
        &:hover {
            color: lightgoldenrodyellow;
            background-color: darkblue;
        }
    `}
`;
const MenuIcon = styled.div`
    display: none;
    ${media.lessThan('medium')`
        z-index: 999;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 2rem;
        color: ${({ click }) => (click ? 'white' : 'black')};
        cursor: pointer;
    `}
`;

export const Navbar = () => {

    const data = useStaticQuery(graphql`
    query Logo {
        file(name: {eq: "project_04"}) {
          childImageSharp {
            gatsbyImageData(height: 80)
          }
        }
    }
    `)
    const image = getImage(data.file)

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
        <NavbarStyles>
            <NavLogo to="/" onClick={closeMobileMenu}><GatsbyImage image={image} alt="logo" /></NavLogo>
            <MenuIcon click={click} onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </MenuIcon>
            <NavList click={click} onClick={handleClick}>
                <NavListItem><NavLink to="/services">Our Services</NavLink></NavListItem>
                <NavListItem><NavLink to="/projects">Our Projects</NavLink></NavListItem>
                <NavListItem><NavLink to="/about">About Us</NavLink></NavListItem>
                <NavListItem><NavLink to="/contact">Contact Us</NavLink></NavListItem>
            </NavList>
        </NavbarStyles>
    )
};
