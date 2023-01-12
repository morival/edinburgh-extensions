import React, { useRef, useState } from 'react';
import { graphql } from 'gatsby';
import { Modal } from '../components';
import { ComponentInfo, ContainerFlexColumn, Flex, ProjectImageContainer, ProjectList, ProjectServiceLink, ProjectServices, SectionBlue } from '../elements';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';


export default function ProjectTemplate({ data: {
  markdownRemark: { html, frontmatter: { location, services, slug, title, thumb } },
  allFile: { nodes } } }) {

  const [modalShow, setModalShow] = useState(false)



  const listOfServices = () => (services.split(', ').map((service, i) =>
    <Flex key={i}>
      {i !== 0 && <div>&nbsp;|&nbsp;</div>}
      <ProjectServiceLink to={`/services#${service}`}>
        {service}
      </ProjectServiceLink>
    </Flex>
  ))

  const refSetModal = useRef(null);
  const handleClick = (i) => {
    refSetModal.current.setModal(i);
    setModalShow(true)
  }
  // const handleClick = (i) => setModalShow(i)
  const handleClose = () => setModalShow(false)

  const projectGallery = () => nodes.map((node, i) => node &&
    <ProjectImageContainer onClick={() => handleClick(i)} key={i}>
      <ContainerFlexColumn>
        <GatsbyImage image={getImage(node)} alt={node.name} />
      </ContainerFlexColumn>
    </ProjectImageContainer>
  )

  return (
    <main>
      <SectionBlue>
        <ProjectServices>{listOfServices()}</ProjectServices>
        <ComponentInfo dangerouslySetInnerHTML={{ __html: html }} />
      </SectionBlue>
      <section>
        <ProjectList>
          {projectGallery()}
        </ProjectList>
        <Modal
          // size="xl"
          nodes={nodes}
          show={modalShow}
          ref={refSetModal}
          onHide={handleClose}
          centered />
      </section>
    </main>
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
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
      name
    }
  }
}
`;