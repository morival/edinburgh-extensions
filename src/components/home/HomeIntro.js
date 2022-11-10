import React from 'react';
import { Link } from 'gatsby';
import { ContactButton, IntroDescription, IntroSection, IntroWrapper } from '../../elements';


export function Intro() {
    
    return(
        <IntroSection>
            <IntroWrapper>
                <IntroDescription>
                    <h4>
                        We are a family business with over 30 years’ experience in building and high-end renovations. 
                        Driven by a constant commitment to excel in every project, 
                        we deliver the best product gratifying each individual's demands.
                    </h4>
                </IntroDescription>
                <div>
                    <Link to='/contact'><ContactButton text='contact us'/></Link>
                </div>
            </IntroWrapper>
        </IntroSection>
    )
};
