import React from 'react';
import { Button } from './controls';


export function Projects({ slogan }) {
    
    return(
        <section>
            <h3>{slogan}</h3>
            <div>
                <div>
                    <p>'Our achievements' description taking two or more lines.</p>
                    <Button text='our work'/>
                </div>
                <div>Our Work Image</div>
            </div>
        </section>
    )
};
