import { Link } from 'gatsby';
import React from 'react';
import { ProjectsSection, ProjectsWrapper } from '../elements';
import { Button } from './controls';


export function Projects({ slogan }) {
    
    return(
        <ProjectsSection>
            <h3>{slogan}</h3>
            <ProjectsWrapper>
                <p>'Our achievements' description taking two or more lines.</p>
                <Link to='projects'><Button text='Our Work Image'/></Link>
            </ProjectsWrapper>
        </ProjectsSection>
    )
};
