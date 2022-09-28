import React from 'react';
import { ProjectDescription, ProjectInfo, ProjectLink, ProjectLocation, ProjectTitle, ProjectWrapper } from '../elements';


export function Project({ project: { frontmatter: { title, location, slug }, html } }) {
    
    // console.log(slug)
    return (
        <ProjectWrapper>
            <ProjectInfo>
                <ProjectLink to={'/projects/'+slug}><ProjectTitle>{title}</ProjectTitle></ProjectLink>
                
                <ProjectLocation>{location}</ProjectLocation>
                <ProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
            </ProjectInfo>
        </ProjectWrapper>
    )
};
