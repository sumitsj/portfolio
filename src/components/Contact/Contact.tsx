import React from 'react';
import { MdOutlineEmail as EmailIcon } from "react-icons/md";
import { FiPhone as PhoneIcon } from "react-icons/fi";
import { PiTelegramLogo as TelegramIcon, PiInstagramLogoBold as InstaIcon } from "react-icons/pi";
import { IoLogoWhatsapp as WhatsappIcon, IoLogoGithub as GitIcon } from "react-icons/io5";
import { BiLogoLinkedin as LinkedinIcon } from "react-icons/bi";



import './Contact.scss';

export const Contact: React.FC = () => {
    return (
        <div className='contact-page'>
            <div className='contact-hero-section'>{'Let\'s Connect...'}</div>
            <div className='contact-card-container'>
                <div className="contact-info">
                    <div className="contact-label">Email</div>
                    <a target='_blank' rel='noreferrer' href='mailto:summit.jadhav@gmail.com' className="contact-link"><EmailIcon />summit.jadhav@gmail.com</a>
                </div>
                <div className="contact-info">
                    <div className="contact-label">Contact</div>
                    <a target='_blank' rel='noreferrer' href="tel:+918855860243" className="contact-link"><PhoneIcon />+91 8855-860-243</a>
                    <a target='_blank' rel='noreferrer' href="https://wa.me/8855860243" className="contact-link"><WhatsappIcon />WhatsApp</a>
                    <a target='_blank' rel='noreferrer' href="https://t.me/Sumit8855" className="contact-link"><TelegramIcon />Telegram</a>
                </div>
                <div className="contact-info">
                    <div className="contact-label">Follow</div>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/sumit8855/' className="contact-link"><LinkedinIcon />Linked In</a>
                    <a target='_blank' rel='noreferrer' href='https://www.instagram.com/__sumitsj__/' className="contact-link"><InstaIcon />Instagram</a>
                    <a target='_blank' rel='noreferrer' href='https://github.com/sumitsj' className="contact-link"><GitIcon />Github</a>
                </div>
            </div>
            <div className='download-button'>
                <button>Download Resume</button>
            </div>
        </div >
    )
}


export default Contact;