import React, { useEffect, useState } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { FaTimes, FaBars } from 'react-icons/fa';
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const NavbarStyles = styled.nav`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
        justify-content: center;
    }
    
    ul li {
        height: 80px;
        @media screen and (max-width: 768px) {
            width: 100%;
        }
    }
    ul li a {
        display: inline-block;
        padding: 1rem;
        font-size: 1.5rem;
        text-decoration: none;
        color: ${({ theme }) => theme.color.text};
    }
`;
const MenuLinks = styled.ul`
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
        /* padding-top: 80px; */
        top: ${({ click }) => (click ? '0' : '-2000px')};
        opacity: 1;
        transition: all 0.2s ease;
        background: red;
    }
`
    

const MenuIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 2rem;
        cursor: pointer;
    }
`
const NavLogo = styled(Link)`
    z-index: 999;
    @media screen and (max-width: 768px) {

    }
`
const NavLink = styled(Link)`

`


export default function Navbar() {

    const data = useStaticQuery(graphql`
    query Logo {
        file(name: {eq: "project_04"}) {
          childImageSharp {
            gatsbyImageData(height: 120)
          }
        }
    }
    `)
    const image = getImage(data.file)

    const [click, setClick] = useState(false)
    const [scroll, setScroll] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }
    // console.log(image)

    useEffect(() => {
        changeNav();
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <NavbarStyles>
            <NavLogo to="/" onClick={closeMobileMenu}><GatsbyImage image={image} alt="logo" /></NavLogo>
            <MenuIcon click={click} onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
            </MenuIcon>
            <MenuLinks click={click} onClick={handleClick}>
                <li><Link to="/services">Our Services</Link></li>
                <li><Link to="/projects">Our Projects</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </MenuLinks>
        </NavbarStyles>
    )
};
