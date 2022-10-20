import { graphql } from 'gatsby'
import React from 'react'
import { ContactDetails, ContactForm, Container } from '../components'
import { FlexContainer } from '../elements';


export default function Contact({ data: {site: { siteMetadata: { links: { link_5 }, slogans: { slogan_contact } } } } }) {

    // console.log(slogan_contact)
    return (
        <Container>
            <h1>{link_5}</h1>
            <h3>{slogan_contact}</h3>
            <FlexContainer>
                <ContactForm />
                <ContactDetails />
            </FlexContainer>
        </Container>
    )
}


export const query = graphql`
query ContactQuery {
  site {
    siteMetadata {
      slogans {
        slogan_contact
      }
      links {
        link_5
      }
    }
  }
}
  `;