import { graphql } from 'gatsby';
import React from 'react';
import { Container } from '../components';


export default function ServiceTemplate({params}) {
    

    return (
        <Container>

        </Container>
    )
};

export const query = graphql`
query ServiceTemplateQuery($slug: String) {
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