import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaGoogle } from 'react-icons/fa';
import './StickyBar.scss';

export const StickyBar: React.FC = () => {
    return (
        <div className='sticky-bar'>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/sumit8855/'><FaLinkedin /></a>
            <a target='_blank' rel='noreferrer' href='https://www.instagram.com/__sumitsj__/'><FaInstagram /></a>
            <a target='_blank' rel='noreferrer' href='https://github.com/sumitsj'><FaGithub /></a>
            <a target='_blank' rel='noreferrer' href='mailto:summit.jadhav@gmail.com'><FaGoogle /></a>
        </div>
    )
}

export default StickyBar;