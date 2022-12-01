import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';
import { ComponentInfoBreak, ProjectDescription, ProjectImage, ProjectImageCover, ProjectLink, ProjectServices, ProjectTitle, ProjectWrapper } from '../elements';


export function Project({ node, project: { html, frontmatter: { 
    title, 
    location, 
    services, 
    slug } } }) {


    const image = getImage(node)
    const projectImage = () => (image ? <GatsbyImage image={image} style={{height:'100%'}} alt={title} /> : null)
    const listOfServices = () => (services.split(', ').map((service, i) => <div key={i}>&nbsp;{i!==0 && "|"}&nbsp;{service}</div>))
    
    return (
        <ProjectWrapper>
            <ProjectLink to={'/projects/'+slug}>
                <ProjectImage className='image'>{projectImage()}</ProjectImage>
                <ProjectImageCover className='cover'>{title}</ProjectImageCover>
            </ProjectLink>
            <ComponentInfoBreak>
                <ProjectTitle>{location}</ProjectTitle>
                <ProjectServices>{listOfServices()}</ProjectServices>
                <ProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
            </ComponentInfoBreak>
        </ProjectWrapper>
    )
};
