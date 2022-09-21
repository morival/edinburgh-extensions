import { graphql } from 'gatsby';
// import { getImage } from 'gatsby-plugin-image';
import React from 'react'
import { Container } from '../components'
import Service from '../components/Service';


export default function Services({ data }) {

    const slogan = data.site.siteMetadata.slogans.slogan_services;
    const services = data.site.siteMetadata.services;
    const images = data.allFile.edges
    // const image = getImage(images[0].node);

    

    // console.log(images)
    // console.log(services)
    
    const serviceComponents = () => 
    services.map((el, i) => {
      const node = images.find(({node}) => node.relativePath === el.relativePath)
      // const image = getImage(node.node)
      // console.log(image)
      return <Service service={el} node={node} i={i} key={i} />
    })

    return ( 
        <Container>
            <h1>Our Services</h1>
            <h3>{slogan}</h3>
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
          gatsbyImageData(width: 300, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
}
`;