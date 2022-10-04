import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import { BannerImage, BannerImageInner } from '../elements';


export function Banner({ file }) {
    
    const image = getImage(file)
    const bgImage = convertToBgImage(image)

    return (
        <BannerImage Tag='section' {...bgImage} preserveStackingContext>
            <BannerImageInner />
        </BannerImage>
    )
};
