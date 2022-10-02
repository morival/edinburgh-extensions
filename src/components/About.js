import React from 'react';
import { Button } from './controls';

export function About({ slogan }) {
    
    return (
        <section>
            <h3>{slogan}</h3>
            <div>
                <div>About Us Image</div>
                <div>
                    <p>'Who we are and what do we do' description taking two or more lines.</p>
                    <Button text='about us'/>
                </div>
            </div>
        </section>
    )
};
