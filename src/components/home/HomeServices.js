import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ComponentTitle, ContainerFlexColumn, ServiceImageContainer, ServiceImageCover, ServicesWrapper } from '../../elements';


export function Services({ slogan, services }) {

  const { allFile } = useStaticQuery(graphql`
    query ServicesSection {
      allFile(filter: {name: {glob: "*example"}}) {
        edges {
          node {
            id
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
      // console.log(edge)
      const serviceImage = () => (image ? <GatsbyImage image={image} alt={service.title} /> : null)
      return (
        <ServiceImageContainer key={i}>
          <Link to={`/services#${service.title}`} >
            {serviceImage()}
            <ServiceImageCover>
              {service.title}
            </ServiceImageCover>
          </Link>
        </ServiceImageContainer>
      )
    })
  )
    
    return (
        <section>
            <ComponentTitle>
              <h3>{slogan}</h3>
            </ComponentTitle>
            <ContainerFlexColumn>
              <h4>We offer a range of services such as building extensions, renovations, conversions as well as full project management.</h4>
              <h4>Our highly skilled team will perfect your project from foundations upwards.</h4>
            </ContainerFlexColumn>
            <ServicesWrapper>
                {servicesComponents()}
            </ServicesWrapper>
        </section>
    )
};
