import React from 'react';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import { BannerImage, BannerImageInner, BannerTextContainer, BannerTextWrapper } from '../elements';


export function Banner({ file, title }) {
    
    const image = getImage(file)
    const bgImage = convertToBgImage(image)

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
