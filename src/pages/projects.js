import { graphql } from 'gatsby'
import React from 'react'
import { Container, Project } from '../components'


export default function Projects({ data: { allMarkdownRemark: { nodes }, site: { siteMetadata: { slogans: { slogan_projects }} }} }) {

    const projectComponents = () =>
    nodes.map(node => {
        return <Project project={node} key={node.id} />
    })

    // console.log(nodes)
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
  }
  `;