import React from 'react'
import { graphql } from 'gatsby'
import { Container } from '../components'

export default function About({ data: { site: { siteMetadata: { slogans: { slogan_about } } } } }) {
    return (
        <Container>
            <h1>About Us</h1>
            <h3>{slogan_about}</h3>
            <div>
              <h6>image</h6>
              <p>We are a small family run partnership where we put all our focus and time on one project at a time. This means we consider and think over every micro detail on a project providing the customer with exactly what they expect. Our whole team is very well synchronised and works efficiently which enables us to finish projects in the timeframe provided before commencing the works. We do weekly meetings with our clients and architects on jobs to inform and update about each stage of the job. This also allows clients to see how their future home is being crafted. Stan has over 30 years of experience in the trade meaning that there is not a problem that cannot be resolved and Bartek brings in the innovative modern way of thinking.</p>
            </div>
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