import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import { BannerImage, BannerImageInner } from '../elements';


export function Banner(params) {
    
    const { file } = useStaticQuery(graphql`
    query BannerQuery {
        file(name: {eq: "ext02"}) {
          id
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    `);
    const image = getImage(file)
    const bgImage = convertToBgImage(image)

    return (
        <BannerImage Tag='section' {...bgImage} preserveStackingContext>
            <BannerImageInner />
        </BannerImage>
    )
};
