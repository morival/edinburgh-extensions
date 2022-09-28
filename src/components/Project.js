import React from 'react';
import { ProjectDescription, ProjectInfo, ProjectLocation, ProjectTitle, ProjectWrapper } from '../elements';


export function Project({ project: { frontmatter: { title, location }, html } }) {
    
    // console.log(project)
    return (
        <ProjectWrapper>
            <ProjectInfo>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectLocation>{location}</ProjectLocation>
                <ProjectDescription dangerouslySetInnerHTML={{ __html: html }}/>
            </ProjectInfo>
        </ProjectWrapper>
    )
};
