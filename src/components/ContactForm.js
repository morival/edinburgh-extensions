import React from 'react';
import { ContactFormInput, ContactFormRow, ContactFormWrapper, ContactFormTextArea, SubmitButton, ContactFormForm } from '../elements';


export function ContactForm(params) {
    
    
    return (
        <ContactFormWrapper>
            <h5>Got A Project In Mind?</h5>
            <ContactFormForm name="contact" method="POST" data-netlify="true">
                <ContactFormRow><ContactFormInput type="text" name="name" placeholder="Name" /></ContactFormRow>
                <ContactFormRow><ContactFormInput type="text" name="telephone" placeholder="Phone Number" /></ContactFormRow>
                <ContactFormRow><ContactFormInput type="email" name="email" placeholder="Email Address" /></ContactFormRow>
                <ContactFormRow><ContactFormTextArea name="message" placeholder="Message"></ContactFormTextArea></ContactFormRow>
                <ContactFormRow>
                    <SubmitButton type="submit" text={"Send"} />
                </ContactFormRow>
            </ContactFormForm>
        </ContactFormWrapper>
    )
};
