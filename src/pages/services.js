import React from 'react'
import { graphql } from 'gatsby';
import { Main, Service } from '../components';
import { ComponentTitle, ContainerFlexColumn } from '../elements';


export default function Services({ data: {
  site: { siteMetadata: { services, siteTitle, quotes: { quote_services } } },
  allFile: { edges } } }) {

  const serviceComponents = () =>
    services.map((service, i) => {
      const edge = edges.find(({ node }) => node.relativePath === service.relativePath)
      return <Service service={service} siteTitle={siteTitle} edge={edge} key={i} />
    })

  return (
    <Main>
      <section>
        <ComponentTitle>
          <h3>{quote_services}</h3>
        </ComponentTitle>
        <ContainerFlexColumn>
          <h5>
            If you are looking to expand your space for more freedom, you are in the right place. <br />
            We can help you to take the first steps. <br />
            We will run your dream project from day one to day finish, providing high quality work across all the stages. <br />
            We minimise the use of outside contractors to maintain a high level of detail and quality.
          </h5>
        </ContainerFlexColumn>
      </section>
      <section>
        {serviceComponents()}
      </section>
    </Main>
  )
}


export const query = graphql`
query ServicesQuery {
  site {
    siteMetadata {
      services {
        description
        relativePath
        subServices
        title
        types
      }
      siteTitle
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