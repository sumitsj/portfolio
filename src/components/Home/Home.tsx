import React from 'react'
import image from '../../images/Sumit.jpg'

export const Home: React.FC = () => {
    return (
        <div className='page hero-section-image'>
            {/* <img className='tile' src={image} width={500}></img> */}
            <div className='hero-section text-shadow'>
                <h1><a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/sumit8855/' className='highlight'>Sumit Jadhav</a></h1>
                <h2>Software Consultant, Pune (India)</h2>
            </div>
        </div>
    )
}


export default Home;