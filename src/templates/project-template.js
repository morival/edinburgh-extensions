import React from 'react';
import { graphql } from 'gatsby';
import { Main } from '../components';
import { ComponentInfo, ContainerFlexColumn, Flex, ProjectImageContainer, ProjectList, ProjectServiceLink, ProjectServices, SectionBlue } from '../elements';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';


export default function ProjectTemplate({ data: { 
  markdownRemark: { html, frontmatter: { location, services, slug, title, thumb } },
  allFile: { nodes } } }) {

  // console.log(nodes)
  
  const listOfServices = () => (services.split(', ').map((service, i) => 
    <Flex key={i}>
      {i !== 0 && <div>&nbsp;|&nbsp;</div>}
      <ProjectServiceLink to={`/services#${service}`} >
        {service}
      </ProjectServiceLink>
    </Flex>
  ))

  const projectGallery = () => nodes.map((node, i) => node && <ProjectImageContainer  key={i}>
    <ContainerFlexColumn>
      <GatsbyImage image={getImage(node)} alt={node.name} />
    </ContainerFlexColumn>
  </ProjectImageContainer>)

  return (
    <Main>
      <SectionBlue>
        <ProjectServices>{listOfServices()}</ProjectServices>
        <ComponentInfo dangerouslySetInnerHTML={{ __html: html }} />
      </SectionBlue>
      <section>
        <ProjectList>
          {projectGallery()}
        </ProjectList>
      </section>
    </Main>
  )
};


export const query = graphql`
query ProjectTemplateQuery($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    frontmatter {
      location
      services
      slug
      title
      thumb
    }
    html
  }
  allFile(filter: {relativeDirectory: {ne: "", eq: $slug}}) {
    nodes {
      childImageSharp {
        gatsbyImageData(width: 768, layout: FULL_WIDTH, placeholder: BLURRED)
      }
      name
    }
  }
}
`;