import React from 'react'
import { AddressDetails, Contact, ContactDetails, CopyRights, Follow, FooterWrapper, Logo, MainFooter, Menu, SiteLink, SiteMap, SocialMediaLink, SocialMediaList, Title } from '../elements';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaFacebook, FaInstagram } from 'react-icons/fa';


export const Footer = () => {

    const data = useStaticQuery(graphql`
    query FooterQuery {
        file(name: {eq: "project_04"}) {
          childImageSharp {
            gatsbyImageData(height: 80)
          }
        }
        site {
          siteMetadata {
            contact {
              street
              city
              postcode
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
    const { street, city, postcode, phone_1, phone_2, email } = data.site.siteMetadata.contact
    const { facebook, instagram } = data.site.siteMetadata.social

    // console.log(image)
    return (
        <FooterWrapper>
            <MainFooter>
                <Logo to='/'><GatsbyImage image={image} alt="logo" /></Logo>
                <Contact>
                    <Title>contact us</Title>
                    <AddressDetails>
                        <div>{title}</div>
                        <div>{street}</div>
                        <div>{city}</div>
                        <div>{postcode}</div>
                    </AddressDetails>
                    <ContactDetails>
                        <div>{phone_1}</div>
                        <div>{phone_2}</div>
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
                <Follow>
                    <Title>follow us</Title>
                    <SocialMediaList>
                        <SocialMediaLink href={facebook} aria-label='Facebook' color='#3b5998'><FaFacebook /></SocialMediaLink>
                        <SocialMediaLink href={instagram} aria-label='Instagram' color='#c32aa3'><FaInstagram /></SocialMediaLink>
                    </SocialMediaList>
                </Follow>
            </MainFooter>
            <CopyRights>© {new Date().getFullYear()} {title}. All Rights Reserved.</CopyRights>
        </FooterWrapper>
    )
};
