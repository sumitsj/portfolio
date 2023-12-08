import React from 'react';
import { BubblyLink } from '../../lib/BubblyTransition'
import { useLocation } from 'react-router-dom';


export const Nav: React.FC = () => {
    const location = useLocation();


    const getClassName = (pageName: string): string => {

        if (pageName == location.pathname) {
            return "nav-item active"
        }

        return "nav-item"
    }
    return (
        <div className='nav'>
            <div className='nav-container'>
                <BubblyLink colorStart="#cd7650" colorEnd="#222" to="/"><div className={getClassName("/")}>Home</div></BubblyLink>
                <BubblyLink colorStart="#cd7650" colorEnd="#222" to="/about"><div className={getClassName("/about")}>About</div></BubblyLink>
                <BubblyLink colorStart="#cd7650" colorEnd="#222" to="/contact"><div className={getClassName("/contact")}>Contact</div></BubblyLink>
            </div>
        </div>
    )
}

export default Nav;