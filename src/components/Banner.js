import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import { BannerImage, BannerImageInner, BannerTextContainer, BannerTextWrapper } from '../elements';


export function Banner({ location }) {

  const { site, allFile } = useStaticQuery(graphql`
      query BannerQuery {
        site {
          siteMetadata {
            links {
              link
              name
            }
            title
          }
        }
        allFile(filter: {relativeDirectory: {eq: "banners"}}) {
          edges {
            node {
              childImageSharp {
                gatsbyImageData(width: 1024)
              }
              name
            }
          }
        }
      }
    `);
  const title = site.siteMetadata.title
  // Generate page path without '/'. Replace empty path with 'home'
  const path = location.pathname.slice(1) || "home"
  // If Page is a Project Template, replace path with 'slug' of the Project
  const link = path.slice(0, 9) === "projects/" ? path.slice(9) : path
  // Find the banner node in 'banners' folder
  const banner = allFile.edges.find(({ node }) => node.name.includes(link))
  // Convert banner node into an image
  const bgImage = convertToBgImage(getImage(banner.node))

  // Find the name of the page
  const page = site.siteMetadata.links.find(page => page.link === link)
  const pageName = (page && page.name) || link
  // console.log(pageName)
  
  const textWrapper = () =>
    link === 'home' ?
      <BannerTextWrapper>
        <BannerTextContainer>Welcome to</BannerTextContainer>
        <BannerTextContainer color='#FC832B'>{title.toUpperCase()}</BannerTextContainer>
      </BannerTextWrapper>
      :
      <BannerTextWrapper>
        <BannerTextContainer>{pageName}</BannerTextContainer>
      </BannerTextWrapper>


  return (
    <BannerImage Tag={'section'} {...bgImage} preserveStackingContext>
      <BannerImageInner page={link}>
        {textWrapper()}
      </BannerImageInner>
    </BannerImage>
  )
};
