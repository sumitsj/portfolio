import React from 'react';
import './Contact.scss';

export const Contact: React.FC = () => {
    return (
        <div className='contact-page'>
            <div>
                <div className="contact-info">
                    <div className="contact-label">Email</div>
                    <a target='_blank' rel='noreferrer' href='mailto:summit.jadhav@gmail.com' className="contact-link">summit.jadhav@gmail.com</a>
                </div>
                <div className="contact-info">
                    <div className="contact-label">Contact</div>
                    <a target='_blank' rel='noreferrer' href="tel:+918855860243" className="contact-link">+91 8855-860-243</a>
                    <a target='_blank' rel='noreferrer' href="https://wa.me/8855860243" className="contact-link">WhatsApp</a>
                    <a target='_blank' rel='noreferrer' href="https://t.me/Sumit8855" className="contact-link">Telegram</a>
                </div>
                <div className="contact-info">
                    <div className="contact-label">Follow</div>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/sumit8855/' className="contact-link">Linked In</a>
                    <a target='_blank' rel='noreferrer' href='https://www.instagram.com/__sumitsj__/' className="contact-link">Instagram</a>
                    <a target='_blank' rel='noreferrer' href='https://github.com/sumitsj' className="contact-link">Github</a>
                </div>
            </div>
        </div >
    )
}


export default Contact;