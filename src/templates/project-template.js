import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { Main, Modal } from '../components';
import { ComponentInfo, ContainerFlexColumn, Flex, ProjectImageContainer, ProjectList, ProjectServiceLink, ProjectServices, SectionBlue } from '../elements';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';


export default function ProjectTemplate({ data: {
  markdownRemark: { html, frontmatter: { location, services, slug, title, thumb } },
  allFile: { nodes } } }) {

  const [modalShow, setModalShow] = useState(false)

  

  const listOfServices = () => (services.split(', ').map((service, i) =>
    <Flex key={i}>
      {i !== 0 && <div>&nbsp;|&nbsp;</div>}
      <ProjectServiceLink to={`/services#${service}`} >
        {service}
      </ProjectServiceLink>
    </Flex>
  ))

  const projectGallery = () => nodes.map((node, i) => node &&
    <ProjectImageContainer onClick={handleClick} key={i}>
      <ContainerFlexColumn>
        <GatsbyImage image={getImage(node)} alt={node.name} />
      </ContainerFlexColumn>
    </ProjectImageContainer>
  )

  const handleClick = (e) => setModalShow(e.target.alt)
  const handleClose = () => setModalShow(false)

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
        <Modal nodes={nodes} show={modalShow} fullscreen={'md-down'} onHide={handleClose} />
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
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
      name
    }
  }
}
`;