import React from 'react'
import { Contact, ContactDetails, CopyRights, Follow, FooterWrapper, Logo, MainFooter, Menu, SiteLink, SiteMap, SocialMediaLink, Title } from '../elements';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaFacebook, FaInstagram } from 'react-icons/fa';


export const Footer = () => {

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
            facebook
            instagram
          }
          title
        }
      }
    }
  `)
  const image = getImage(file)
  const { title } = site.siteMetadata
  const { phone_1, phone_2, email } = site.siteMetadata.contact
  const { facebook, instagram } = site.siteMetadata.social
  
  const siteMapItems = site.siteMetadata.links.map(page => {
    return <div key={page.link}><SiteLink to={page.link==='home' ? `/`:`/${page.link}`}>{page.name}</SiteLink></div>
  })

  return (
    <FooterWrapper>
      <MainFooter>
        <Contact>
          <Logo to='/'><GatsbyImage image={image} alt="logo" /></Logo>
          <ContactDetails>
            <div>Bartek - {phone_1}</div>
            <div>Stan - {phone_2}</div>
            <div>{email}</div>
          </ContactDetails>
        </Contact>
        <Menu>
          <Title>menu</Title>
          <SiteMap>
            {siteMapItems}
          </SiteMap>
        </Menu>
      </MainFooter>
      <Follow>
        <SocialMediaLink href={facebook} aria-label='Facebook' color='#3b5998'><FaFacebook /></SocialMediaLink>
        <SocialMediaLink href={instagram} aria-label='Instagram' color='#c32aa3'><FaInstagram /></SocialMediaLink>
      </Follow>
      <CopyRights>© {new Date().getFullYear()} {title}. All Rights Reserved.</CopyRights>
    </FooterWrapper>
  )
};
