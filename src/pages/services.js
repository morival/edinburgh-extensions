import { graphql } from 'gatsby';
import React from 'react'
import { Main, Service } from '../components';


export default function Services({ data: { site: { siteMetadata: { 
    services, 
    quotes: { quote_services },
    links: { link_2 }} },
  allFile: { edges } } }) {
    
    const serviceComponents = () => 
    services.map((service, i) => {
      const edge = edges.find(({node}) => node.relativePath === service.relativePath)
      return <Service service={service} edge={edge} key={i} />
    })

    return ( 
        <Main>
            <h1>{link_2}</h1>
            <h3>{quote_services}</h3>
            <p>We provide a high quality product gratifying each individual's demands, managed professionally from the project brief to hand over day.</p>
            {serviceComponents()}
        </Main>
    )
}


export const query = graphql`
query ServicesQuery {
  site {
    siteMetadata {
      services {
        description
        title
        relativePath
      }
      links {
        link_2
      }
      quotes {
        quote_services
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