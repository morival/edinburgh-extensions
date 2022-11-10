import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { ServiceImageContainer, ServiceImageCover, ServicesDescription, ServicesSection, ServicesWrapper } from '../../elements';

export function Services({ slogan, services }) {

  const { allFile } = useStaticQuery(graphql`
    query ServicesSection {
      allFile(filter: {name: {glob: "*example"}}) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(width: 768, height: 576, layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)
  
  const servicesComponents = () => (
    services.map((service, i) => {
      const edge = allFile.edges.find(edge => edge.node.relativePath === service.relativePath)
      const image = getImage(edge.node)
      const serviceImage = () => (image ? <GatsbyImage image={image} alt={service.title} /> : null)
      return (
        <ServiceImageContainer key={i}>
          <Link to={`/services#${service.title}`} >
            {serviceImage()}
            <ServiceImageCover className='cover'>
              {service.title}
            </ServiceImageCover>
          </Link>
        </ServiceImageContainer>
      )
    })
  )
    
    return (
        <ServicesSection>
            <h3>{slogan}</h3>
            <ServicesDescription>
              Our highly skilled team will perfect your project from foundations upwards.
            </ServicesDescription>
            <ServicesWrapper>
                {servicesComponents()}
            </ServicesWrapper>
        </ServicesSection>
    )
};
