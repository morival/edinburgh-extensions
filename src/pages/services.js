import { graphql } from 'gatsby';
import React from 'react'
import { Container, Service } from '../components';


export default function Services({ data: { site: { siteMetadata: { services, slogans: { slogan_services }} }, allFile: { edges } } }) {


    // console.log(edges)
    // console.log(services)
    
    const serviceComponents = () => 
    services.map((service, i) => {
      const edge = edges.find(({node}) => node.relativePath === service.relativePath)
      return <Service service={service} edge={edge} i={i} key={i} />
    })

    return ( 
        <Container>
            <h1>Our Services</h1>
            <h3>{slogan_services}</h3>
            {serviceComponents()}
        </Container>
    )
}


export const query = graphql`
query ServicesQuery {
  site {
    siteMetadata {
      slogans {
        slogan_services
      }
      services {
        description
        title
        relativePath
      }
    }
  }
  allFile(filter: {name: {glob: "*example"}}) {
    edges {
      node {
        relativePath
        childImageSharp {
          gatsbyImageData(width: 400, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
}
`;