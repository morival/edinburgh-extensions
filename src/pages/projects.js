import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { Main, Project } from '../components';
import { ComponentTitle, ContainerFlexColumn, ProjectList, ProjectsListFilter, ProjectsListFilterButton } from '../elements';


export default function Projects({ location, data: { 
  allMarkdownRemark: { nodes }, 
  site: { siteMetadata: { services, quotes: { quote_projects }} },
  allFile: { edges }
} }) {
  
  const [category, setCategory] = useState('');

  const handleChange = (e) => {
    setCategory(e.target.value)
  }

  const filterCategory = () => services.map(({ title }) => {
    return (
      <ProjectsListFilterButton 
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
      if (location.state !== null)
        setCategory(location.state.filter)
    }, [location.state])
    
  return (
      <Main>
        <section>
          <ComponentTitle>
              <h3>{quote_projects}</h3>
          </ComponentTitle>
          <ContainerFlexColumn>
            <p>some paragraph...</p>
          </ContainerFlexColumn>
        </section>
        <section>
          <ProjectsListFilter>
            {filterCategory()}<ProjectsListFilterButton text="view all" onClick={handleChange} value={null} selected={category===''} />
          </ProjectsListFilter>
          <ProjectList>
            {projectComponents()}
          </ProjectList>
        </section>
      </Main>
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
          gatsbyImageData(width: 768, layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  }
}
`;