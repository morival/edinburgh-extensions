import { GatsbyImage } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { ProjectDescription, ProjectImage, ProjectInfo, ProjectLink, ProjectLocation, ProjectTitle, ProjectWrapper } from '../elements';


export function Project({ project: { frontmatter: { title, location, slug }, html }, node, i }) {
    
    const image = getImage(node)
    const projectImage = () => (image ? <GatsbyImage image={image} alt={title} /> : null)
    
    // console.log(image)
    const even = i%2 === 0 ? 'row' : 'row-reverse'
    return (
        <ProjectWrapper even={even}>
            <ProjectImage>{projectImage()}</ProjectImage>
            <ProjectInfo>
                <ProjectLink to={'/projects/'+slug}>
                    <ProjectTitle>{title}</ProjectTitle>
                </ProjectLink>
                <ProjectLocation>{location}</ProjectLocation>
                <ProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
            </ProjectInfo>
        </ProjectWrapper>
    )
};
