import { GatsbyImage } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { ProjectDescription, ProjectImage, ProjectInfo, ProjectLink, ProjectLocation, ProjectServices, ProjectTitle, ProjectWrapper } from '../elements';


export function Project({ project: { frontmatter: { title, location, services, slug }, html }, node, i }) {
    
    const image = getImage(node)
    const projectImage = () => (image ? <GatsbyImage image={image} alt={title} /> : null)
    const listOfServices = () => (services.split(', ').map(service => <p key={service}>{service}</p>))
    // console.log(listOfServices)
    const even = i%2 === 0 ? 'row' : 'row-reverse'
    return (
        <ProjectWrapper even={even}>
            <ProjectImage>{projectImage()}</ProjectImage>
            <ProjectInfo>
                <ProjectLink to={'/projects/'+slug}>
                    <ProjectTitle>{title}</ProjectTitle>
                </ProjectLink>
                <ProjectLocation>{location}</ProjectLocation>
                <ProjectServices>{listOfServices()}</ProjectServices>
                <ProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
            </ProjectInfo>
        </ProjectWrapper>
    )
};
