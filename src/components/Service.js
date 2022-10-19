import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ServiceButton, ServiceDescription, ServiceImage, ServiceInfo, ServiceSection, ServiceTitle } from '../elements';
import { Link } from 'gatsby';


export function Service({ service: { title, description }, edge: { node } }) {
    
    // const { title, description } = service;
    const image = getImage(node)

    return (
        <ServiceSection id={title}>
            <ServiceImage>
                <GatsbyImage image={image} alt={title} />
            </ServiceImage>
            <ServiceInfo>
                <ServiceTitle>{title}</ServiceTitle>
                <ServiceDescription>{description}</ServiceDescription>
                <Link to='/projects' state={{ filter: title }}>
                    <ServiceButton text={'VIEW MORE'}/>
                </Link>
            </ServiceInfo>
        </ServiceSection>
    )
};
