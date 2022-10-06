import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { ServiceContainer, ServiceImageCover, ServicesSection, ServicesWrapper } from '../elements';

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
      const edge = allFile.edges.find(edge => edge.node.relativePath === service.relativePath)
      const image = getImage(edge.node)
      // console.log(i)
      return <Link to={`/services#${service.title}`} key={i}>
        <ServiceContainer>
          <GatsbyImage image={image} alt={service.title} />
          <ServiceImageCover>
            <h2>{service.title}</h2>
          </ServiceImageCover>
        </ServiceContainer>
      </Link>
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