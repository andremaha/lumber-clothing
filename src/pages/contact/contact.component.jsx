import React from "react";
import './contact.styles.scss';

import ContactForm from "../../components/contact-form/contact-form.component";

const Contact = () => (
    <div className='contact'>
        <h1>Contact Us</h1>
        <ContactForm />
    </div>
);

export default Contact;