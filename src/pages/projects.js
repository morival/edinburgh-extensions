import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { Main, Project } from '../components';
import { ComponentTitle, ContainerFlexColumn, FilterList, FilterListButton, FilterListItem, FilterListItemSpan, ProjectList, SectionBlue } from '../elements';


export default function Projects({ location, data: {
  allMarkdownRemark: { nodes },
  site: { siteMetadata: { services, quotes: { quote_projects } } },
  allFile: { edges }
} }) {

  const [category, setCategory] = useState(null);

  const handleChange = (e) => {
    console.log(e.target.value)
    setCategory(e.target.value)
  }
  // console.log(location.state)
  const filterCategory = () => services.map(({ title }) => (
    <FilterListItem key={title}>
      <FilterListButton
        onClick={handleChange}
        value={title}
        selected={category === title}
        text={title} />
      <FilterListItemSpan />
    </FilterListItem>
  ))

  const projectComponents = () => {
    const filterProjects = nodes.filter(project => project.frontmatter.services.split(', ').some(service => service === category))
    const mapProjects = (category ? filterProjects : nodes).map((project, i) => {
      const edge = edges.find(({ node }) => node.name === project.frontmatter.thumb)
      const node = edge ? edge.node : undefined;
      return <Project project={project} node={node} key={project.id} />
    })
    return mapProjects
  }

  // Filter projects by category selected on Services page
  useEffect(() => {
    if (location.state.filter !== undefined) {
      setCategory(location.state.filter)
    }
  }, [location.state])

  return (
    <Main>
      <SectionBlue>
        <ComponentTitle>
          <h3>{quote_projects}</h3>
        </ComponentTitle>
        <ContainerFlexColumn>
          Previous Projects
        </ContainerFlexColumn>
        <FilterList>
          <FilterListItem>
            <FilterListButton onClick={handleChange} value={null} selected={category === null} text="view all" />
            <FilterListItemSpan />
          </FilterListItem>
          {filterCategory()}
        </FilterList>
      </SectionBlue>
      <section>
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
        location
        services
        slug
        title
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