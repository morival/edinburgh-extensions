import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { ServicesSection, ServicesWrapper } from '../elements/ServicesElements';

export function Services({ slogan, services }) {

  const { allFile } = useStaticQuery(graphql`
  query ServicesSection {
    allFile(filter: {name: {glob: "*example"}}) {
      edges {
        node {
          relativePath
          childImageSharp {
            gatsbyImageData(width: 400, height: 300, layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
  }
  `)
  
  const servicesComponent = () => 
    services.map((service, i) => {
      const edge = allFile.edges.find((edge, i) => edge.node.relativePath === service.relativePath)
      const image = getImage(edge.node)
      return <div key={i}>
        <div><GatsbyImage image={image} alt={service.title} /></div>
        <h3>{service.title}</h3>
      </div>
    })
    
    return (
        <ServicesSection>
            <h3>{slogan}</h3>
            <ServicesWrapper>
                {servicesComponent()}
            </ServicesWrapper>
        </ServicesSection>
    )
};
