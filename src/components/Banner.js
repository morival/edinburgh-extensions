import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import { BannerImage, BannerImageInner, BannerTextContainer, BannerTextWrapper } from '../elements';


export function Banner({ link }) {
    
    const { site, allFile } = useStaticQuery(graphql`
      query LayoutQuery {
        site {
          siteMetadata {
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
    
    const banner = allFile.edges.find(({ node }) => node.name.includes(link))
    const bgImage = convertToBgImage(getImage(banner.node))
    const page = link
    console.log(page)

    return (
      <BannerImage {...bgImage} preserveStackingContext>
          <BannerImageInner page={page}>
              <BannerTextWrapper page={page}>
                  <BannerTextContainer>Welcome to</BannerTextContainer>
                  <BannerTextContainer color='#FC832B'>{title.toUpperCase()}</BannerTextContainer>
              </BannerTextWrapper>
          </BannerImageInner>
      </BannerImage>
    )
};
