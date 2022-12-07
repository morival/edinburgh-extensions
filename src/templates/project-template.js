import React from 'react';
import { graphql } from 'gatsby';
import { Main } from '../components';
import { ComponentInfo, ComponentTitle, ProjectServices } from '../elements';


export default function ProjectTemplate({ data: { markdownRemark: { html, frontmatter: { location, services, slug, title, thumb } } } }) {

  
  
  const listOfServices = () => (services.split(', ').map((service, i) => <div key={i}>&nbsp;{i !== 0 && "|"}&nbsp;{service}</div>))

  return (
    <Main>
      <section>
        <ComponentTitle>
          <h3>{title}</h3>
        </ComponentTitle>
        <ProjectServices>{listOfServices()}</ProjectServices>
        <ComponentInfo dangerouslySetInnerHTML={{ __html: html }} />
      </section>
      <section>

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
}
`;