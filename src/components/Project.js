import { GatsbyImage } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { ProjectDescription, ProjectImage, ProjectImageCover, ProjectInfo, ProjectLink, ProjectLocation, ProjectServices, ProjectWrapper } from '../elements';


export function Project({ project: { frontmatter: { title, location, services, slug }, html }, node }) {
    
    // console.log(services)
    const image = getImage(node)
    const projectImage = () => (image ? <GatsbyImage image={image} alt={title} /> : null)
    const listOfServices = () => (services.split(', ').map(service => <p key={service}>{service}</p>))
    
    return (
        <ProjectWrapper>
            <ProjectLink to={'/projects/'+slug}>
                    <ProjectImage>{projectImage()}</ProjectImage>
                    <ProjectImageCover>{title}</ProjectImageCover>
            </ProjectLink>
            <ProjectInfo>
                <ProjectLocation>{location}</ProjectLocation>
                <ProjectServices>{listOfServices()}</ProjectServices>
                <ProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
            </ProjectInfo>
        </ProjectWrapper>
    )
};
