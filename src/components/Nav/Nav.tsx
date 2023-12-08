import React from 'react';
import { BubblyLink } from 'react-bubbly-transitions'
import { useLocation } from 'react-router-dom';


export const Nav: React.FC = () => {
    const location = useLocation();


    const getClassName = (pageName: string): string => {
        console.log(location.pathname)

        if (pageName == location.pathname) {
            return "nav-item active"
        }

        return "nav-item"
    }
    return (
        <div className='nav'>
            <div className='nav-container'>
                <BubblyLink to="/"><div className={getClassName("/")}>Home</div></BubblyLink>
                <BubblyLink to="/about"><div className={getClassName("/about")}>About</div></BubblyLink>
                <BubblyLink to="/contact"><div className={getClassName("/contact")}>Contact</div></BubblyLink>
            </div>
        </div>
    )
}

export default Nav;