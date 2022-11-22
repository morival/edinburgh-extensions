import React from 'react'
import { graphql } from 'gatsby';
import { Main, Service } from '../components';
import { ComponentInfo, ComponentTitle, ServicesIntro, ServicesList } from '../elements';


export default function Services({ data: { site: { siteMetadata: { 
    services, 
    quotes: { quote_services },
    links }},
  allFile: { edges } } }) {
    
    const serviceComponents = () => 
    services.map((service, i) => {
      const edge = edges.find(({node}) => node.relativePath === service.relativePath)
      return <Service service={service} edge={edge} key={i} />
    })

    return ( 
        <Main>
          <ServicesIntro>
            <ComponentTitle>
                <h3>{quote_services}</h3>
            </ComponentTitle>
            <ComponentInfo>
              <p>We provide a high quality product gratifying each individual's demands, managed professionally from the project brief to hand over day.</p>
            </ComponentInfo>
          </ServicesIntro>
          <ServicesList>
            {serviceComponents()}
          </ServicesList>
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
        link
        name
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
          gatsbyImageData(width: 768, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
}
`;