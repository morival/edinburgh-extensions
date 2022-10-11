import React from 'react'
import { Contact, ContactDetails, CopyRights, Follow, FooterWrapper, Logo, MainFooter, Menu, SiteLink, SiteMap, SocialMediaLink, Title } from '../elements';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaFacebook, FaInstagram } from 'react-icons/fa';


export const Footer = () => {

    const data = useStaticQuery(graphql`
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
              link_1
              link_2
              link_3
              link_4
              link_5
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
    const image = getImage(data.file)
    const { title } = data.site.siteMetadata
    const { link_1, link_2, link_3, link_4, link_5 } = data.site.siteMetadata.links
    const { phone_1, phone_2, email } = data.site.siteMetadata.contact
    const { facebook, instagram } = data.site.siteMetadata.social

    // console.log(image)
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
                        <div><SiteLink to="/">{link_1}</SiteLink></div>
                        <div><SiteLink to="/services">{link_2}</SiteLink></div>
                        <div><SiteLink to="/projects">{link_3}</SiteLink></div>
                        <div><SiteLink to="/about">{link_4}</SiteLink></div>
                        <div><SiteLink to="/contact">{link_5}</SiteLink></div>
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
