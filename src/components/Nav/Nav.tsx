import React from 'react';
import { BubblyLink } from 'react-bubbly-transitions'


export const Nav: React.FC = () => {
    return (
        <div className='nav'>
            <BubblyLink to="/">Home</BubblyLink>
            <BubblyLink to="/about">About</BubblyLink>
            <BubblyLink to="/contact">Contact</BubblyLink>
        </div>
    )
}

export default Nav;