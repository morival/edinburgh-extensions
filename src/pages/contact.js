import React from 'react'
import { graphql } from 'gatsby'
import { Banner, ContactDetails, ContactForm, Main } from '../components'
import { ComponentInfoCenter, FlexContainer, SectionBlue } from '../elements';


export default function Contact({ data: { site: { siteMetadata: { links, quotes: { quote_contact } } } } }) {

  const page = links.find(({ link }) => link === "contact")

  return (
    <Main>
      <Banner link={page.link} />
      <SectionBlue>
        <h3>Got A Project In Mind?</h3>
        <ComponentInfoCenter>
          <h4>{quote_contact}</h4>
        </ComponentInfoCenter>
        <FlexContainer>
          <ContactDetails />
          <ContactForm />
        </FlexContainer>
      </SectionBlue>
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