import { Link } from 'gatsby';
import React from 'react';
import { AboutSection, AboutWrapper } from '../elements/AboutElements';
import { Button } from './controls';

export function About({ slogan }) {
    
    return (
        <AboutSection>
            <h3>{slogan}</h3>
            <AboutWrapper>
                <div>About Us Image</div>
                <div>
                    <p>Who we are and what we do (description taking two or more lines.)</p>
                    <Link to='/about'><Button text='about us'/></Link>
                </div>
            </AboutWrapper>
        </AboutSection>
    )
};
