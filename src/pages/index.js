import * as React from "react";
import { Container } from '../components';
// import styled from "styled-components"
// import { graphql } from "gatsby";


// const Container = styled.div`

// `;



export default function IndexPage({ data }) {

  // const { siteUrl, description, title } = data.site.siteMetadata;
  // console.log(title)

  return (
    <Container>
      <h1>Home Page</h1>
    </Container>
  )
}

// export const query = graphql`
//   query SiteInfo {
//     site {
//       siteMetadata {
//         siteUrl
//         description
//         title
//       }
//     }
//   }
// `;