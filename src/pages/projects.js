import { graphql } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { Container, Project } from '../components';
import { FilterButton, FilterProjects } from '../elements';


export default function Projects({ location, data: { 
  allMarkdownRemark: { nodes }, 
  site: { siteMetadata: { links: { link_3 }, services, quotes: { quote_projects }} },
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
      // check if this category is selected
      selected={title===category} 
      key={title} />
    )
  })

  const projectComponents = () => {
    const filterProjects = nodes.filter(project => project.frontmatter.services.split(', ').some(service => service === category))
    const mapProjects = (category ? filterProjects : nodes).map((project, i) => {
      const edge = edges.find(({node}) => node.name === project.frontmatter.thumb)
      const node = edge ? edge.node : undefined;
      return <Project project={project} node={node} key={project.id} />
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
          <h1>{link_3}</h1>
          <h3>{quote_projects}</h3>
          <FilterProjects>
            {filterCategory()}<FilterButton text="view all" onClick={handleChange} value={null} selected={category===''} />
          </FilterProjects>
          {projectComponents()}
      </Container>
  )
}


export const query = graphql`
query ProjectsQuery {
  allMarkdownRemark(filter: {frontmatter: {markdown: {eq: "project"}}}) {
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
      links {
        link_3
      }
      services {
        title
      }
      quotes {
        quote_projects
      }
    }
  }
  allFile {
    edges {
      node {
        name
        childImageSharp {
          gatsbyImageData(width: 500, layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
}
`;