import React from 'react';
import { graphql } from 'gatsby';
import { Main } from '../components';
import { ComponentInfo, ComponentTitle } from '../elements';


export default function ProjectTemplate({ data: { markdownRemark: { frontmatter: { title }, html } } }) {
    
    // console.log(frontmatter)
    return (
        <Main>
          <section>
            <ComponentTitle>
                <h3>{title}</h3>
            </ComponentTitle>
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
      title
      slug
      location
    }
    html
  }
}
`;