import React from 'react';
import { graphql } from 'gatsby';
import { Main } from '../components';


export default function ProjectTemplate({ data: { markdownRemark: { frontmatter: { title }, html } } }) {
    
    // console.log(frontmatter)
    return (
        <Main>
            <div>
                <h3>{title}</h3>
            </div>
            <div dangerouslySetInnerHTML={{ __html: html }} />
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