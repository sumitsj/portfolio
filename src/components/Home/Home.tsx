import React from 'react'
import image from '../../images/Sumit.jpg'

export const Home: React.FC = () => {
    return (
        <div className='page'>
            <img className='tile' src={image} width={500}></img>
            <div className='hero-section'>
                <h2>I am <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/sumit8855/' className='highlight'>Sumit Jadhav</a>, Software Consultant based in Pune, having expertise in front-end and backend development.</h2>
            </div>
        </div>
    )
}


export default Home;