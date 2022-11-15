import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { AboutButton, AboutImage, AboutWrapper, ComponentInfo, SectionBlue } from '../../elements';

export function About({ slogan }) {

    const { file } = useStaticQuery(graphql`
      query HomeAboutQuery {
        file(name: {eq: "Transparent Logo"}) {
          id
          childImageSharp {
            gatsbyImageData(height: 200)
          }
        }
      }
    `)
    const image = getImage(file)
    
    return (
        <SectionBlue>
          <h3>{slogan}</h3>
          <AboutWrapper>
            <AboutImage><GatsbyImage image={image} alt={file.id} /></AboutImage>
            <ComponentInfo>
              <p>Our success lies in combining years of experience with innovative and creative thinking.</p>
              <Link to='/about'><AboutButton text='about us'/></Link>
            </ComponentInfo>
          </AboutWrapper>
        </SectionBlue>
    )
};
