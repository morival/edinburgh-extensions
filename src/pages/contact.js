import { graphql } from 'gatsby'
import React from 'react'
import { ContactDetails, ContactForm, Main } from '../components'
import { FlexContainer } from '../elements';


export default function Contact({ data: {site: { siteMetadata: { links: { link_5 }, quotes: { quote_contact } } } } }) {

    // console.log(slogan_contact)
    return (
        <Main>
            <h1>{link_5}</h1>
            <h3>{quote_contact}</h3>
            <FlexContainer>
                <ContactForm />
                <ContactDetails />
            </FlexContainer>
        </Main>
    )
}


export const query = graphql`
query ContactQuery {
  site {
    siteMetadata {
      links {
        link_5
      }
      quotes {
        quote_contact
      }
    }
  }
}
  `;