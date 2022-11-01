import React from 'react';
import { ContactFormInput, ContactFormRow, ContactFormWrapper, ContactFormTextArea, SubmitButton } from '../elements';


export function ContactForm(params) {
    
    
    return (
        <ContactFormWrapper>
            <h5>Got A Project In Mind?</h5>
            <form name="contact" method="POST" data-netlify="true">
                <ContactFormRow><ContactFormInput type="text" name="name" placeholder="Name" /></ContactFormRow>
                <ContactFormRow><ContactFormInput type="text" name="telephone" placeholder="Telephone" /></ContactFormRow>
                <ContactFormRow><ContactFormInput type="email" name="email" placeholder="Email" /></ContactFormRow>
                <ContactFormRow><ContactFormTextArea name="message" placeholder="Message"></ContactFormTextArea></ContactFormRow>
                <div>
                    <SubmitButton type="submit" text={"Send"} />
                </div>
            </form>
        </ContactFormWrapper>
    )
};
