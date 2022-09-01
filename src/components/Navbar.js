import React, { useState } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { FaTimes, FaBars } from 'react-icons/fa';
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const NavbarStyles = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: gainsboro;
    @media screen and (max-width: 768px) {
        justify-content: center;
    }
    
    ul li {
        height: 80px;
        @media screen and (max-width: 768px) {
            width: 100%;
        }
    }
`;
const MenuLinksStyles = styled.ul`
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
    text-align: center;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 100vh;
        position: absolute;
        top: ${({ click }) => (click ? '0' : '-2000px')};
        opacity: 1;
        transition: all 0.2s ease;
        background: mediumblue;
    }
`
const NavLogoStyles = styled(Link)`
    z-index: 999;
`
const NavLinkStyles = styled(Link)`
    display: inline-block;
    padding: 1rem;
    font-size: 1.5rem;
    text-decoration: none;
    color: ${({ theme }) => theme.color.text};
    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 1rem 0;
        max-width: 350px;
        font-size: 2rem;
        color: orange;
        &:hover {
            color: lightgoldenrodyellow;
            background-color: darkblue;
        }
    }
    /* @media screen and (max-width: 576px) {
        width: 80%;
    } */
`
const MenuIconStyles = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        z-index: 999;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 2rem;
        color: ${({ click }) => (click ? 'white' : 'black')};
        cursor: pointer;
    }
`

export default function Navbar() {

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
            <NavLogoStyles to="/" onClick={closeMobileMenu}><GatsbyImage image={image} alt="logo" /></NavLogoStyles>
            <MenuIconStyles click={click} onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </MenuIconStyles>
            <MenuLinksStyles click={click} onClick={handleClick}>
                <li><NavLinkStyles to="/services">Our Services</NavLinkStyles></li>
                <li><NavLinkStyles to="/projects">Our Projects</NavLinkStyles></li>
                <li><NavLinkStyles to="/about">About Us</NavLinkStyles></li>
                <li><NavLinkStyles to="/contact">Contact Us</NavLinkStyles></li>
            </MenuLinksStyles>
        </NavbarStyles>
    )
};
