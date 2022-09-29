import { graphql } from 'gatsby';
import React from 'react';
import { Container, Project } from '../components';


export default function Projects({ data: { 
  allMarkdownRemark: { nodes }, 
  site: { siteMetadata: { slogans: { slogan_projects }} },
  allFile: { edges }
} }) {

  const projectComponents = () =>
    nodes.map((project, i) => {
      const edge = edges.find(({node}) => node.name === project.frontmatter.thumb)
      const node = edge ? edge.node : undefined;
        // console.log(edge.node.childImageSharp.gatsbyImageData)
      return <Project project={project} node={node} i={i} key={project.id} />
    })

  // console.log(edges)
  return (
      <Container>
          <h1>Our Projects</h1>
          <h3>{slogan_projects}</h3>
          {projectComponents()}
      </Container>
  )
}


export const query = graphql`
query ProjectsQuery {
    allMarkdownRemark {
      nodes {
        html
        frontmatter {
          title
          location
          services
          slug
          thumb
        }
        id
      }
    }
    site {
      siteMetadata {
        slogans {
          slogan_projects
        }
      }
    }
    allFile(filter: {name: {glob: "*thumb"}}) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
  `;