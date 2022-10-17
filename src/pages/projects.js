import { graphql } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { Container, Project } from '../components';
import { FilterButton, FilterProjects } from '../elements';


export default function Projects({ location, data: { 
  allMarkdownRemark: { nodes }, 
  site: { siteMetadata: { services, slogans: { slogan_projects }} },
  allFile: { edges }
} }) {

  const [category, setCategory] = useState('');

  const handleChange = (e) => {
    setCategory(e.target.value)
  }

  const filterCategory = () => services.map(({ title }) => {
    return (
      <FilterButton 
      text={title} 
      onClick={handleChange} 
      value={title} 
      selected={title===category} 
      key={title} />
    )
  })

  const projectComponents = () => {
    const filterProjects = nodes.filter(project => project.frontmatter.services.split(', ').some(service => service === category))
    const mapProjects = (category ? filterProjects : nodes).map((project, i) => {
      const edge = edges.find(({node}) => node.name === project.frontmatter.thumb)
      const node = edge ? edge.node : undefined;
      return <Project project={project} node={node} i={i} key={project.id} />
    })
    return mapProjects
  }
  
    // Filter projects by category selected on Services page
    useEffect(() => {
      setCategory(location.state.filter || '')
      // console.log(location.state.filter)
    }, [location.state])
    
  return (
      <Container>
          <h1>Our Projects</h1>
          <h3>{slogan_projects}</h3>
          <FilterProjects>
            {filterCategory()}<FilterButton text="view all" onClick={handleChange} value={null} selected={category===''} />
          </FilterProjects>
          {projectComponents()}
      </Container>
  )
}


export const query = graphql`
query ProjectsQuery {
  allMarkdownRemark(filter: {frontmatter: {title: {ne: ""}}}) {
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
      services {
        title
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