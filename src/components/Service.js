import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ServiceButton, ServiceDescription, ServiceImage, ServiceInfo, ServiceTitle, ServiceWrapper } from '../elements';
import { Link } from 'gatsby';


export function Service({ service: { title, description }, edge: { node } }) {
    
    // const { title, description } = service;
    const image = getImage(node)

    return (
        <ServiceWrapper id={title}>
            <ServiceImage>
                <GatsbyImage image={image} alt={title} />
            </ServiceImage>
            <ServiceInfo>
                <ServiceTitle>{title}</ServiceTitle>
                <ServiceDescription>
                    <p>{description}</p>
                </ServiceDescription>
                <Link to='/projects' state={{ filter: title }}>
                    <ServiceButton text={'VIEW MORE'}/>
                </Link>
            </ServiceInfo>
        </ServiceWrapper>
    )
};
