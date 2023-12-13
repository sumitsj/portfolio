import React from 'react';
import { MdOutlineEmail as EmailIcon } from "react-icons/md";
import { FiPhone as PhoneIcon } from "react-icons/fi";
import { PiTelegramLogo as TelegramIcon, PiInstagramLogoBold as InstaIcon } from "react-icons/pi";
import { IoLogoWhatsapp as WhatsappIcon, IoLogoGithub as GitIcon } from "react-icons/io5";
import { BiLogoLinkedin as LinkedinIcon } from "react-icons/bi";

import './ContactCard.scss';

export type ContactCardProps = {
    title: string,
    details: {
        text: string,
        link: string,
        icon: ContactCardIcons
    }[]
}

export enum ContactCardIcons {
    TELEGRAM = "TELEGRAM",
    Phone = "Phone",
    EMAIL = "EMAIL",
    INSTAGRAM = "INSTAGRAM",
    WHATSAPP = "WHATSAPP",
    GITHUB = "GITHUB",
    LINKEDIN = "LINKEDIN"
}

export const ContactCard = ({ title, details }: ContactCardProps) => {
    const dist = {
        [ContactCardIcons.TELEGRAM]: TelegramIcon,
        [ContactCardIcons.Phone]: PhoneIcon,
        [ContactCardIcons.EMAIL]: EmailIcon,
        [ContactCardIcons.INSTAGRAM]: InstaIcon,
        [ContactCardIcons.WHATSAPP]: WhatsappIcon,
        [ContactCardIcons.GITHUB]: GitIcon,
        [ContactCardIcons.LINKEDIN]: LinkedinIcon,
    }

    return (
        <div className="contact-card">
            <div className="contact-card-label">{title}</div>
            {details.map((detail, index) => {
                return <a key={index} target='_blank' rel='noreferrer' href={detail.link} className="contact-card-link">
                    {React.createElement(dist[detail.icon])}
                    {detail.text}
                </a>
            })}

        </div>
    )
}


export default ContactCard;