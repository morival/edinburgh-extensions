import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';
import { ProjectImage, ProjectImageCover, ProjectLink } from '../elements';


export function Project({ node, project: { frontmatter: { 
    title, 
    location,
    slug } } }) {


    const image = getImage(node)
    const projectImage = () => (image && <GatsbyImage image={image} style={{height:'100%'}} alt={title} />)
    // const listOfServices = () => (services.split(', ').map((service, i) => <div key={i}>&nbsp;{i!==0 && "|"}&nbsp;{service}</div>))
    
    return (
        <ProjectLink to={'/projects/'+slug}>
            <ProjectImage className='image'>{projectImage()}</ProjectImage>
            <ProjectImageCover className='cover'>
                <div>{location}</div>
            </ProjectImageCover>
        </ProjectLink>
    )
};
