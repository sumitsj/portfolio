import React from 'react'
import Skills from '../Skills/Skills';
import './About.scss';

export const About: React.FC = () => {
    return (
        <div className='about-page'>
            <div className='section-title'>My Skills</div>
            <Skills />
        </div>
    )
}

export default About;