import { graphql } from 'gatsby';
import React from 'react'
import { Container } from '../components'
import Service from '../components/Service';


export default function Services({ data }) {

    const slogan = data.site.siteMetadata.slogans.slogan_services;
    const services = data.site.siteMetadata.services;

    // console.log(services)

    const serviceComponents = () => 
        services.map((el, i) => 
            <Service service={el} i={i} key={i} />
        )

    return ( 
        <Container>
            <h1>Our Services</h1>
            <h3>{slogan}</h3>
            {serviceComponents()}
        </Container>
    )
}


export const query = graphql`
query ServicesQuery {
    site {
      siteMetadata {
        services
        slogans {
          slogan_services
        }
      }
    }
  }  
`;