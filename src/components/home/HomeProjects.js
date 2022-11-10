import { Link } from 'gatsby';
import React from 'react';
import { ProjectsSection, ProjectsWrapper } from '../../elements';
import { Button } from '../controls';


export function Projects({ slogan }) {
    
    return(
        <ProjectsSection>
            <h3>{slogan}</h3>
            <ProjectsWrapper>
                <p>We have carried out work on a variety of residential properties in Edinburgh and surrounding areas. In our portfolio you will find projects of home extensions, home renovations, new builds and loft conversions.</p>
                <Link to='projects'><Button text='Our Work Image'/></Link>
            </ProjectsWrapper>
        </ProjectsSection>
    )
};
