import React from 'react';
import { Link } from 'gatsby';
import { ComponentInfoCenter, ContactButton, IntroDescription, IntroWrapper, SectionBlue } from '../../elements';


export function Intro() {
    
    return(
        <SectionBlue>
            <ComponentInfoCenter>
                <IntroDescription>
                    <h4>
                        We are a family business with over 30 years’ experience in building and high-end renovations. 
                        Driven by a constant commitment to excel in every project, 
                        we deliver the best product gratifying each individual's demands.
                    </h4>
                </IntroDescription>
            </ComponentInfoCenter>
            <IntroWrapper>
                <Link to='/contact'><ContactButton text='contact us'/></Link>
            </IntroWrapper>
        </SectionBlue>
    )
};
