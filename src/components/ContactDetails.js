import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ContactContainer, ContactWrapper } from '../elements';
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
        <ContactWrapper>
            <div>
                <GatsbyImage image={image} alt={file.id} />
            </div>
            <div>
                <ContactContainer>
                    <MdPhone />
                    <div>{phone_1} - Bartek</div>
                </ContactContainer>
                <ContactContainer>
                    <MdPhone />
                    <div>{phone_2} - Stan</div>
                </ContactContainer>
                <ContactContainer>
                    <MdEmail />
                    <div>{email}</div>
                </ContactContainer>
            </div>
        </ContactWrapper>
    )
};
