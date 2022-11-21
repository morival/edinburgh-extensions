import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';
import { ComponentInfoBreak, ProjectDescription, ProjectImage, ProjectImageCover, ProjectLink, ProjectServices, ProjectTitle, ProjectWrapper } from '../elements';


export function Project({ project: { frontmatter: { title, location, services, slug }, html }, node }) {

    const image = getImage(node)
    const projectImage = () => (image ? <GatsbyImage image={image} alt={title} /> : null)
    const listOfServices = () => (services.split(', ').map(service => <p key={service}>{service}</p>))
    
    return (
        <ProjectWrapper>
            <ProjectLink to={'/projects/'+slug}>
                <ProjectImage className='image'>{projectImage()}</ProjectImage>
                <ProjectImageCover>{title}</ProjectImageCover>
            </ProjectLink>
            <ComponentInfoBreak>
                <ProjectTitle>{location}</ProjectTitle>
                <ProjectServices>{listOfServices()}</ProjectServices>
                <ProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
            </ComponentInfoBreak>
        </ProjectWrapper>
    )
};
