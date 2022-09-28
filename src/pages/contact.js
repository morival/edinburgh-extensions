import { graphql } from 'gatsby'
import React from 'react'
import { Container } from '../components'


export default function Contact({ data: {site: { siteMetadata: { slogans: { slogan_contact } } } } }) {

    // console.log(slogan_contact)
    return (
        <Container>
            <h1>Contact Us</h1>
            <h3>{slogan_contact}</h3>
            <h5>Got A Project In Mind?</h5>
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
      }
    }
  }
  `;