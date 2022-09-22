import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { BannerWrapper } from '../elements';


export function Banner(params) {
    

    return (
        <BannerWrapper>
            <StaticImage style={{ backgroundSize: 'cover' }} src='../images/examples/ext03.png' alt='banner' layout='constrained' />
        </BannerWrapper>
    )
};
