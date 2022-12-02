import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { AboutButton, AboutLogo, AboutWrapper, ComponentTitle, ContainerHalfMedium, SectionBlue } from '../../elements';


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
          <ComponentTitle>
            <h3>{slogan}</h3>
          </ComponentTitle>
          <AboutWrapper>
            <AboutLogo><GatsbyImage image={image} alt={file.id} /></AboutLogo>
            <ContainerHalfMedium>
              <h4>Our well organised and creative approach to every project lies in years of experience and innovative thinking.</h4>
              <Link to='/about'><AboutButton text='about us'/></Link>
            </ContainerHalfMedium>
          </AboutWrapper>
        </SectionBlue>
    )
};
