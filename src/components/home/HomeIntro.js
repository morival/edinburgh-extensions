import React from 'react';
import { Link } from 'gatsby';
import { ContactButton, ContainerFlexColumn, SectionBlue } from '../../elements';


export function Intro() {
    
    return(
        <SectionBlue>
            <ContainerFlexColumn>
                <h4>
                    We are a family business with over 30 years’ experience in building and high-end renovations.<br/>
                    Driven by a constant commitment to excel in every project, 
                    we deliver the best product gratifying each individual's demands.
                </h4>
                <ContainerFlexColumn>
                    <Link to='/contact'><ContactButton text='contact us'/></Link>
                </ContainerFlexColumn>
            </ContainerFlexColumn>
        </SectionBlue>
    )
};
