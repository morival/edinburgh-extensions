import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ServiceDescription, ServiceImage, ServiceInfo, ServiceTitle, ServiceWrapper } from '../elements';
import { Button } from './controls';
import { Link } from 'gatsby';


export function Service({ service: { title, description }, edge: { node }, i }) {
    
    // const { title, description } = service;
    const image = getImage(node)

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
                <Link to='/projects' state={{ filter: title }}>
                    <Button text={`check our ${title} projects`}/>
                </Link>
            </ServiceInfo>
        </ServiceWrapper>
    )
};
