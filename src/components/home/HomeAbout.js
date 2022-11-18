import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { AboutButton, AboutLogo, AboutWrapper, ComponentInfo, SectionBlue } from '../../elements';


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
            <AboutLogo><GatsbyImage image={image} alt={file.id} /></AboutLogo>
            <ComponentInfo>
              <p>Our well organised and creative approach to every project lies in years of experience and innovative thinking.</p>
              <Link to='/about'><AboutButton text='about us'/></Link>
            </ComponentInfo>
          </AboutWrapper>
        </SectionBlue>
    )
};
