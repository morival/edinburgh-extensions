import { Link } from 'gatsby';
import React from 'react';
import { ComponentTitle, ContainerFlexColumn } from '../../elements';
import { Button } from '../controls';


export function Projects({ slogan }) {

    return (
        <section>
            <ComponentTitle>
              <h3>{slogan}</h3>
            </ComponentTitle>
            <ContainerFlexColumn>
                <p>We have carried out work on a variety of residential properties in Edinburgh and surrounding areas. In our portfolio you will find projects of home extensions, home renovations, new builds and loft conversions.</p>
                <div>
                    <Link to='projects'><Button text='Our Work Image' /></Link>
                </div>
            </ContainerFlexColumn>
        </section>
    )
};
