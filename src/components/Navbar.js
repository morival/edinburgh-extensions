import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaTimes, FaBars } from 'react-icons/fa';
import { MenuIcon, NavbarSection, NavLink, NavList, NavListItem, NavListItemSpan, NavLogo, NavLogoContainer, NavLogoOnHover } from '../elements';


export const Navbar = () => {

  const { site, allFile } = useStaticQuery(graphql`
  query NavQuery {
    site {
      siteMetadata {
        links {
          link
          name
        }
      }
    }
    allFile(filter: {name: {glob: "Icon*"}}) {
      edges {
        node {
          id
          relativePath
          childImageSharp {
            gatsbyImageData(width: 512, layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
  }
  `);
  const iconPath = "Icon_Transparent.png"
  const hoverIconPath = "Icon_On_Hover.png"
  const image = getImage(allFile.edges.find(edge => edge.node.relativePath === iconPath).node)
  const hoverImage = getImage(allFile.edges.find(edge => edge.node.relativePath === hoverIconPath).node)
  
  const navListItems = site.siteMetadata.links.map(page => (
    page.link !== 'home' && <NavListItem key={page.link}><NavLink to={`/${page.link}`}>{page.name}</NavLink><NavListItemSpan /></NavListItem>
  ))

  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  // Block page scrolling when nav menu is open
  useEffect(() => {
    click ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'initial'
  }, [click])

  return (
    <NavbarSection>
      <NavLogoContainer>
        <NavLogo to="/" onClick={closeMobileMenu}>
          <div>
            <GatsbyImage image={image} alt="logo" />
          </div>
          <NavLogoOnHover>
            <GatsbyImage image={hoverImage} alt="logo" />
          </NavLogoOnHover>
        </NavLogo>
      </NavLogoContainer>
      <MenuIcon click={click} onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <NavList click={click} onClick={closeMobileMenu}>
        {navListItems}
      </NavList>
    </NavbarSection>
  )
};
