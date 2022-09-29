import React from 'react';
import { graphql } from 'gatsby';
import { Container } from '../components';


export default function ProjectTemplate({ data: { markdownRemark: { frontmatter: { title }, html } } }) {
    
    // console.log(frontmatter)
    return (
        <Container>
            <h3>{title}</h3>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </Container>
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