import React from 'react'
import { graphql } from 'gatsby'
import { ContactDetails, ContactForm } from '../components'
import { ComponentInfo, ComponentTitle, FlexContainer, SectionBlue } from '../elements';


export default function Contact({ data: { site: { siteMetadata: { 
  // links, 
  quotes: { quote_contact } } } } }) {

  // const page = links.find(({ link }) => link === "contact")

  return (
    <main>
      <SectionBlue>
        <ComponentTitle>
          <h3>Got A Project In Mind?</h3>
        </ComponentTitle>
        <ComponentInfo>
          <h4>{quote_contact}</h4>
        </ComponentInfo>
        <FlexContainer>
          <ContactDetails />
          <ContactForm />
        </FlexContainer>
      </SectionBlue>
    </main>
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