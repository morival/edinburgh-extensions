import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaTimes, FaBars } from 'react-icons/fa';
import { MenuIcon, NavbarWrapper, NavLink, NavList, NavListItem, NavListItemSpan, NavLogo, NavLogoContainer, NavLogoOnHover } from '../elements';


export const Navbar = () => {

    // const data = useStaticQuery(graphql`
    //   query NavQuery {
    //     file(name: {eq: "Icon_Transparent"}) {
    //       childImageSharp {
    //         gatsbyImageData(width: 200, height: 200, layout: CONSTRAINED, placeholder: BLURRED)
    //       }
    //     }
    //     site {
    //       siteMetadata {
    //         links {
    //           link_2
    //           link_3
    //           link_4
    //           link_5
    //         }
    //       }
    //     }
    //   }
    // `);
    const { site, allFile } = useStaticQuery(graphql`
    query NavQuery {
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
    // const icon = allFile.edges.find(edge => edge.node.relativePath === iconPath)
    // const hoverIcon = allFile.edges.find(edge => edge.node.relativePath === hoverIconPath)
    const image = getImage(allFile.edges.find(edge => edge.node.relativePath === iconPath).node)
    const hoverImage = getImage(allFile.edges.find(edge => edge.node.relativePath === hoverIconPath).node)
    // console.log(image)
    const { link_2, link_3, link_4, link_5 } = site.siteMetadata.links;

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    // Block page scrolling when nav menu is open
    useEffect(() => {
      click ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'initial'
    },[click])

    return (
        <NavbarWrapper>
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
                <NavListItem><NavLink to="/services">{link_2}</NavLink><NavListItemSpan /></NavListItem>
                <NavListItem><NavLink to="/projects">{link_3}</NavLink><NavListItemSpan /></NavListItem>
                <NavListItem><NavLink to="/about">{link_4}</NavLink><NavListItemSpan /></NavListItem>
                <NavListItem><NavLink to="/contact">{link_5}</NavLink><NavListItemSpan /></NavListItem>
            </NavList>
        </NavbarWrapper>
    )
};
