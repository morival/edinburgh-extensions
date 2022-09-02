import * as React from "react"
import styled from "styled-components"
// import { graphql } from "gatsby";


const HomePageStyles = styled.div`

`;



export default function IndexPage({ data }) {

  // const { siteUrl, description, title } = data.site.siteMetadata;
  // console.log(title)

  return (
    <HomePageStyles>
      <h1>Home Page</h1>
    </HomePageStyles>
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