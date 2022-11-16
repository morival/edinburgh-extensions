import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ComponentInfo, ServiceButton, ServiceDescription, ServiceImage, ServiceTitle, ServiceWrapper } from '../elements';
import { Link } from 'gatsby';


export function Service({ service: { title, description }, edge: { node } }) {
 
    const image = getImage(node)

    return (
        <ServiceWrapper id={title}>
            <ServiceImage>
                <GatsbyImage image={image} alt={title} />
            </ServiceImage>
            <ComponentInfo>
                <ServiceTitle>
                    {title}
                </ServiceTitle>
                <ServiceDescription>
                    <p>{description}</p>
                </ServiceDescription>
                <Link to='/projects' state={{ filter: title }}>
                    <ServiceButton text={'VIEW MORE'}/>
                </Link>
            </ComponentInfo>
        </ServiceWrapper>
    )
};
