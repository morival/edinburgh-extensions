import { graphql } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { Container, Project } from '../components';
import { FilterButton } from '../elements';


export default function Projects({ location, data: { 
  allMarkdownRemark: { nodes }, 
  site: { siteMetadata: { services, slogans: { slogan_projects }} },
  allFile: { edges }
} }) {

  const [category, setCategory] = useState('')

  const handleChange = (e) => {
    setCategory(e.target.value)
  }

  console.log(location)

  const filterCategory = () => services.map(({ title }) => {
    return <FilterButton onClick={handleChange} value={title} selected={title===category?'gray':'lightgray'} key={title}>{title}</FilterButton>
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
  
    
    useEffect(() => {
      console.log(category)
      // setCategory(location.state.filter)
    // }, [location.state])
    }, [category])

    // const test = nodes.filter(project => {
    //   return project.frontmatter.services.split(', ').some(service => service === category)
    // })
    // console.log(test)
    
  return (
      <Container>
          <h1>Our Projects</h1>
          <h3>{slogan_projects}</h3>
          <div>{filterCategory()}<FilterButton onClick={handleChange} value={null} selected={category===''?'gray':'lightgray'}>view all</FilterButton></div>
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