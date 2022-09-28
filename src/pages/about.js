import React from 'react'
import { graphql } from 'gatsby'
import { Container } from '../components'

export default function About({ data: { site: { siteMetadata: { slogans: { slogan_about } } } } }) {
    return (
        <Container>
            <h1>About Us</h1>
            <h3>{slogan_about}</h3>
        </Container>
    )
}


export const query = graphql`
query AboutQuery {
    site {
      siteMetadata {
        slogans {
          slogan_about
        }
      }
    }
  }
  `;