import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';
import { ContainerFlexColumn, ProjectImageCover, ProjectLink } from '../elements';


export function Project({ node, project: { html, frontmatter: { 
    title, 
    location, 
    // services, 
    slug } } }) {


    const image = getImage(node)
    const projectImage = () => (image && <GatsbyImage image={image} style={{height:'100%'}} alt={title} />)
    // const listOfServices = () => (services.split(', ').map((service, i) => <div key={i}>&nbsp;{i!==0 && "|"}&nbsp;{service}</div>))
    
    return (
        // <ProjectWrapper>
            <ProjectLink to={'/projects/'+slug}>
                <ContainerFlexColumn className='image'>{projectImage()}</ContainerFlexColumn>
                <ProjectImageCover className='cover'>
                    <div>{location}</div>
                </ProjectImageCover>
            </ProjectLink>
        // </ProjectWrapper>
    )
};
