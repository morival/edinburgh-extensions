import { graphql } from 'gatsby';
import React from 'react'
import { Container, Service } from '../components';


export default function Services({ data }) {

    const { slogan_services } = data.site.siteMetadata.slogans;
    const { services } = data.site.siteMetadata;
    const { edges } = data.allFile

    // console.log(edges)
    // console.log(services)
    
    const serviceComponents = () => 
    services.map((el, i) => {
      const edge = edges.find(({node}) => node.relativePath === el.relativePath)
      return <Service service={el} edge={edge} i={i} key={i} />
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
  allFile(filter: {relativeDirectory: {eq: "services"}}) {
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