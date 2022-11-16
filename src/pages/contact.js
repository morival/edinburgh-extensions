import React from 'react'
import { graphql } from 'gatsby'
import { Banner, ContactDetails, ContactForm, Main } from '../components'
import { FlexContainer } from '../elements';


export default function Contact({ data: { site: { siteMetadata: { links, quotes: { quote_contact } } } } }) {

  const page = links.find(({link}) => link === "contact") 

  return (
    <Main>
      <Banner link={page.link} />
      <section>
        <h1>{page.name}</h1>
        <h3>{quote_contact}</h3>
      </section>
      <section>
        <FlexContainer>
          <ContactForm />
          <ContactDetails />
        </FlexContainer>
      </section>
    </Main>
  )
}


export const query = graphql`
query ContactQuery {
  site {
    siteMetadata {
      links {
        link
        name
      }
      quotes {
        quote_contact
      }
    }
  }
}
  `;