import React from 'react';
import { graphql } from 'gatsby';
import { Container } from '../components';


export default function ProjectTemplate({ data: { markdownRemark: { frontmatter: { title }, html } } }) {
    
    // console.log(frontmatter)    
    return (
        <Container>
            <h1>{title}</h1>
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
    }
    html
  }
}
  `;