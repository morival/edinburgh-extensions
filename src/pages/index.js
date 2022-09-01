import * as React from "react"
import styled from "styled-components"
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
// import { graphql } from "gatsby";


const HomePageStyles = styled.div`
  .icons {
    display: inline-grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 10px;
  }
  .icons svg {
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.color.social_icons}
  }
`;



export default function IndexPage({ data }) {

  // const { siteUrl, description, title } = data.site.siteMetadata;
  // console.log(title)

  return (
    <HomePageStyles>
      <h1>Home Page</h1>
      <div className="icons">
        <FaFacebookSquare />
        <FaInstagramSquare />
      </div>
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