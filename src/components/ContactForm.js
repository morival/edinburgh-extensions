import React from 'react';
import { ContactFormInput, ContactFormRow, ContactFormWrapper, ContactFormTextArea } from '../elements';


export function ContactForm(params) {
    
    
    return (
        <ContactFormWrapper>
            <h5>Got A Project In Mind?</h5>
            <form name="contact" method="POST" data-netlify="true">
                <ContactFormRow><ContactFormInput type="text" name="name" placeholder="Name" /></ContactFormRow>
                <ContactFormRow><ContactFormInput type="email" name="email" placeholder="Email" /></ContactFormRow>
                <ContactFormRow><ContactFormTextArea name="message" placeholder="Message"></ContactFormTextArea></ContactFormRow>
                <div>
                    <button type="submit">Send</button>
                </div>
            </form>
        </ContactFormWrapper>
    )
};
