import React from 'react'

// STYLE
import style from './HomePage.module.scss'
import { useNavigate } from 'react-router-dom'

const HomePage: React.FC = () => {
    const navigate = useNavigate()

    const event = {
        redirectToHomePage: () => {
            navigate("/dsds")
        }
    }

    return (
        <div className={style.component}>
            <h1>This is Sumit&apos;s Portfolio</h1>
            <button onClick={() => event.redirectToHomePage()}>
                Go Away
            </button>
        </div>
    )
}

export default HomePage
