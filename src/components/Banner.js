import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import { BannerImage, BannerImageInner, BannerTextContainer, BannerTextWrapper } from '../elements';


export function Banner() {
    
    const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(name: {eq: "ext02"}) {
        id
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
    `);

    const title = data.site.siteMetadata.title
    const bgImage = convertToBgImage(getImage(data.file))

    return (
        <BannerImage Tag='section' {...bgImage} preserveStackingContext>
            <BannerImageInner>
                <BannerTextWrapper>
                    <BannerTextContainer>Welcome to</BannerTextContainer>
                    <BannerTextContainer color='#FC832B'>{title.toUpperCase()}</BannerTextContainer>
                </BannerTextWrapper>
            </BannerImageInner>
        </BannerImage>
    )
};
