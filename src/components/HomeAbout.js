import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { AboutButton, AboutDescription, AboutSection, AboutWrapper } from '../elements';

export function About({ slogan }) {

    const { file } = useStaticQuery(graphql`
      query HomeAboutQuery {
        file(name: {eq: "about_us"}) {
          id
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, width: 400)
          }
        }
      }
    `)
    const image = getImage(file)
    // console.log(image)
    
    return (
        <AboutSection>
            <h3>{slogan}</h3>
            <AboutWrapper>
                <div><GatsbyImage image={image} alt={file.id} /></div>
                <AboutDescription>
                    <p>Who we are and what we do (description taking two or more lines.)</p>
                    <div>
                        <Link to='/about'><AboutButton text='about us'/></Link>
                    </div>
                </AboutDescription>
            </AboutWrapper>
        </AboutSection>
    )
};
