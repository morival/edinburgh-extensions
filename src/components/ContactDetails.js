import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ContactDetailsWrapper, ContactEmail, ContactLogo, ContactTel, ContactContainer } from '../elements';
import { MdEmail, MdPhone } from 'react-icons/md';


export function ContactDetails(params) {

    const { file, site } = useStaticQuery(graphql`
        query ContactDetailsQuery {
            site {
                siteMetadata {
                    contact {
                        email
                        phone_1
                        phone_2
                    }
                }
            }
            file(name: {eq: "Transparent Logo"}) {
                id
                childImageSharp {
                    gatsbyImageData(height: 200)
                }
            }
        }
    `)

    const image = getImage(file)
    const { email, phone_1, phone_2 } = site.siteMetadata.contact

    return (
        <ContactDetailsWrapper>
            <ContactLogo>
                <GatsbyImage image={image} alt={file.id} />
            </ContactLogo>
            <div>
                <ContactContainer>
                    <MdPhone />
                    <ContactTel>{phone_1} - Bartek</ContactTel>
                </ContactContainer>
                <ContactContainer>
                    <MdPhone />
                    <ContactTel>{phone_2} - Stan</ContactTel>
                </ContactContainer>
                <ContactContainer>
                    <MdEmail />
                    <ContactEmail>{email}</ContactEmail>
                </ContactContainer>
            </div>
        </ContactDetailsWrapper>
    )
};
