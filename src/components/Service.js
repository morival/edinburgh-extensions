import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ContainerHalfLarge, Flex, ServiceButton, ServiceDescription, ServiceDetailsContainer, ServiceTickIcon, ServiceTitle, ServiceTypesContainer, ServiceWrapper } from '../elements';
import { Link } from 'gatsby';


export function Service({ service: { title, description, types }, siteTitle, edge: { node } }) {
 
    const image = getImage(node)
    
    const serviceTypes = () => 
        types.map((type, i) => 
            <Flex key={i}>
                <ServiceTickIcon />
                <h6>{type}</h6>
            </Flex>
        )

    return (
        <ServiceWrapper id={title}>
            <ContainerHalfLarge>
                <GatsbyImage image={image} style={{height:'100%', width:'100%'}} alt={title} />
            </ContainerHalfLarge>
            <ContainerHalfLarge>
                <ServiceTitle>
                    {title}
                </ServiceTitle>
                <ServiceDescription>
                    {description}
                </ServiceDescription>
                <ServiceDetailsContainer>
                    <h5>{siteTitle} offers:</h5>
                    <ServiceTypesContainer>{serviceTypes()}</ServiceTypesContainer>
                </ServiceDetailsContainer>
                <Link to='/projects' state={{ filter: title }}>
                    <ServiceButton text={`VIEW OUR ${title} PROJECTS`}/>
                </Link>
            </ContainerHalfLarge>
        </ServiceWrapper>
    )
};
