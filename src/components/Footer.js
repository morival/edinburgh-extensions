import React from 'react'
import { Contact, ContainerHalfMedium, FooterInstagramIcon, FooterPrimary, FooterSecondary, FooterWrapper, Logo, MarginAuto, Menu, SiteLink, SiteMapItems, Title } from '../elements';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"


export const Footer = ({ location }) => {

  const { file, site } = useStaticQuery(graphql`
  query FooterQuery {
      file(name: {eq: "Transparent Logo"}) {
        childImageSharp {
          gatsbyImageData(height: 160)
        }
      }
      site {
        siteMetadata {
          contact {
            phone_1
            phone_2
            email
          }
          links {
            link
            name
          }
          social {
            instagram
          }
          siteTitle
        }
      }
    }
  `)
  const image = getImage(file)
  const { siteTitle } = site.siteMetadata
  const { phone_1, phone_2, email } = site.siteMetadata.contact
  const { instagram } = site.siteMetadata.social

  const path = location.pathname.slice(1) || "home"
  const siteMapItems = site.siteMetadata.links.map(page => {
    return <div key={page.link}><SiteLink to={page.link === 'home' ? `/` : `/${page.link}`} selected={page.link === path}>{page.name}</SiteLink></div>
  })

  return (
    <FooterWrapper>
      <FooterPrimary>
        <Contact>
          <ContainerHalfMedium>
            <Logo to='/'><GatsbyImage image={image} alt="logo" /></Logo>
          </ContainerHalfMedium>
          <ContainerHalfMedium>
            <MarginAuto>
              <div><a href={instagram} aria-label='Instagram' alt='Instagram'><FooterInstagramIcon /></a></div>
              <div>Bartek - {phone_1}</div>
              <div>Stan - {phone_2}</div>
              <div>{email}</div>
            </MarginAuto>
          </ContainerHalfMedium>
        </Contact>
        <Menu>
          <MarginAuto>
            <Title>menu</Title>
            <SiteMapItems>{siteMapItems}</SiteMapItems>
          </MarginAuto>
        </Menu>
      </FooterPrimary>
      <FooterSecondary>
        <div>© {new Date().getFullYear()} {siteTitle}. All Rights Reserved.&nbsp;</div>
        <div>
          <SiteLink to='/terms'>Terms of Use</SiteLink>
          <span>&nbsp;|&nbsp;</span>
          <span>Privacy Policy</span>
        </div>
      </FooterSecondary>
    </FooterWrapper>
  )
};
