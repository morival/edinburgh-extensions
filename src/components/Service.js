import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ServiceDescription, ServiceImage, ServiceInfo, ServiceTitle, ServiceWrapper } from '../elements';


export function Service({ service, edge, i }) {
    
    const { title, description } = service;
    const image = getImage(edge.node)

    const even = i%2 === 0 ? 'row' : 'row-reverse'
    // console.log(service)
    return (
        <ServiceWrapper even={even}>
            <ServiceImage>
                <GatsbyImage image={image} alt={title} />
            </ServiceImage>
            <ServiceInfo>
                <ServiceTitle>{title}</ServiceTitle>
                <ServiceDescription>{description}</ServiceDescription>
                <div>button</div>
            </ServiceInfo>
        </ServiceWrapper>
    )
};
