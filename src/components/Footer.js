import React from 'react'
import styled from 'styled-components'
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';


const FooterStyles = styled.footer`
    padding: 1rem;
    color: white;
    background-color: #191970;
`;
const MainFooter = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;
const Contact = styled.div`

`;
const Logo = styled(Link)`

`;
const ContactDetails = styled.div`

`;
const SocialMedia = styled.div`
    display: inline-grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 10px;
    svg {
        width: 30px;
        height: 30px;
        color: ${({ theme }) => theme.color.social_icons}
    }
`;
const SiteMap = styled.div`

`;
const SiteLink = styled(Link)`
    color: white;
`;
const CopyRights = styled.div`
    text-align: center;
`;


export default function Footer() {

    const data = useStaticQuery(graphql`
        query FootLogo {
            file(name: {eq: "project_04"}) {
                childImageSharp {
                    gatsbyImageData(height: 80)
                }
            }
            site {
                siteMetadata {
                  links {
                    link_1
                    link_2
                    link_3
                    link_4
                  }
                  contact {
                    address
                    phone_1
                    phone_2
                    email
                  }
                  title
                  social {
                    facebook
                    instagram
                  }
                }
              }
        }
    `)
    const image = getImage(data.file)
    const { title } = data.site.siteMetadata
    const { link_1, link_2, link_3, link_4 } = data.site.siteMetadata.links
    const { address, phone_1, phone_2, email } = data.site.siteMetadata.contact
    const { facebook, instagram } = data.site.siteMetadata.social

    // console.log(image)
    return (
        <FooterStyles>
            <MainFooter>
                <Logo to='/'><GatsbyImage image={image} alt="logo" /></Logo>
                <Contact>
                    <ContactDetails>
                        <div>{address}</div>
                        <div>{phone_1}</div>
                        <div>{phone_2}</div>
                        <div>{email}</div>
                    </ContactDetails>
                    <SocialMedia>
                        <a href={facebook} aria-label='Facebook'><FaFacebookSquare /></a>
                        <a href={instagram} aria-label='Instagram'><FaInstagramSquare /></a>
                    </SocialMedia>
                </Contact>
                <SiteMap>
                    <div><SiteLink to="/">{title}</SiteLink></div>
                    <div><SiteLink to="/services">{link_1}</SiteLink></div>
                    <div><SiteLink to="/projects">{link_2}</SiteLink></div>
                    <div><SiteLink to="/about">{link_3}</SiteLink></div>
                    <div><SiteLink to="/contact">{link_4}</SiteLink></div>
                </SiteMap>
            </MainFooter>
            <CopyRights>Copy Rights {new Date().getFullYear()}</CopyRights>
        </FooterStyles>
    )
};
