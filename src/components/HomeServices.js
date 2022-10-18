import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { ServiceImageContainer, ServiceImageCover, ServicesDescription, ServicesSection, ServicesWrapper } from '../elements';

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
  
  
  const servicesComponent = () => (
    services.map((service, i) => {
      const edge = allFile.edges.find(edge => edge.node.relativePath === service.relativePath)
      const image = getImage(edge.node)
      const serviceImage = () => (image ? <GatsbyImage image={image} alt={service.title} /> : null)
      return (
        <Link to={`/services#${service.title}`} key={i}>
          <ServiceImageContainer>
            {serviceImage()}
            <ServiceImageCover>
              <h2>{service.title}</h2>
            </ServiceImageCover>
          </ServiceImageContainer>
        </Link>
      )
    })
  )
    
    return (
        <ServicesSection>
            <h3>{slogan}</h3>
            <ServicesDescription>
                We provide a high quality product gratifying each individual's demands, managed professionally from the project brief to hand over day.
            </ServicesDescription>
            <ServicesWrapper>
                {servicesComponent()}
            </ServicesWrapper>
        </ServicesSection>
    )
};
