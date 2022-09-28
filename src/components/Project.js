import React from 'react';
import { ProjectDescription, ProjectInfo, ProjectTitle, ProjectWrapper } from '../elements';


export function Project({ project }) {

    const { title } = project.frontmatter;
    
    console.log(project)
    return (
        <ProjectWrapper>
            <ProjectInfo>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectDescription>{project.html}</ProjectDescription>
            </ProjectInfo>
        </ProjectWrapper>
    )
};
