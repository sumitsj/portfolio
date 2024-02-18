import React from 'react';



import './Contact.scss';
import ContactCard, { ContactCardIcons, ContactCardProps } from '../ContactCard/ContactCard';

export const Contact: React.FC = () => {
    const props: ContactCardProps[] = [
        {
            title: "Email",
            details: [
                {
                    text: "summit.jadhav@gmail.com",
                    link: "mailto:summit.jadhav@gmail.com",
                    icon: ContactCardIcons.EMAIL
                }
            ]
        },
        {
            title: "Contact",
            details: [
                {
                    text: "+91 8855-860-243",
                    link: "tel:+918855860243",
                    icon: ContactCardIcons.Phone
                },
                {
                    text: "WhatsApp",
                    link: "https://wa.me/8855860243",
                    icon: ContactCardIcons.WHATSAPP
                },
                {
                    text: "Telegram",
                    link: "https://t.me/Sumit8855",
                    icon: ContactCardIcons.TELEGRAM
                }
            ]
        },
        {
            title: "Follow",
            details: [
                {
                    text: "Linked In",
                    link: "https://www.linkedin.com/in/sumit8855",
                    icon: ContactCardIcons.LINKEDIN
                },
                {
                    text: "Instagram",
                    link: "https://www.instagram.com/__sumitsj__/",
                    icon: ContactCardIcons.INSTAGRAM
                },
                {
                    text: "Github",
                    link: "https://github.com/sumitsj",
                    icon: ContactCardIcons.GITHUB
                }
            ]
        }
    ]
    return (
        <div className='contact-page'>
            <div className='contact-hero-section'>{'Let\'s Connect...'}</div>
            <div className='contact-card-container'>
                {props.map((details, index) => <ContactCard key={index} title={details.title} details={details.details} />)}
            </div>
            <div className='download-button'>
                <a
                    href="Sumit Jadhav - Resume - Lead Developer.pdf"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button>Download Resume</button>
                </a>
            </div>
        </div >
    )
}


export default Contact;