import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { AboutButton, AboutDescription, AboutImage, AboutSection, AboutWrapper } from '../../elements';

export function About({ slogan }) {

    const { file } = useStaticQuery(graphql`
      query HomeAboutQuery {
        file(name: {eq: "about_us"}) {
          id
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, width: 768)
          }
        }
      }
    `)
    const image = getImage(file)
    
    return (
        <AboutSection>
            <h3>{slogan}</h3>
            <AboutWrapper>
                <AboutImage><GatsbyImage image={image} alt={file.id} /></AboutImage>
                <AboutDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <div>
                        <Link to='/about'><AboutButton text='about us'/></Link>
                    </div>
                </AboutDescription>
            </AboutWrapper>
        </AboutSection>
    )
};
