import React from 'react'
import { MemoryRouter as Router, Route, Routes, Outlet } from 'react-router-dom'
import { BubblyContainer } from 'react-bubbly-transitions'
import { ROUTES } from './resources/routes-constants'
import { About, Contact, Home, Nav } from './components'
import './styles/main.scss'

const RootComponent: React.FC = () => {
    return (
        <Router>
            <BubblyContainer />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Nav />
                            <Outlet />
                        </>
                    }
                >
                    <Route index element={<Home />} />
                    <Route path={ROUTES.ABOUT_ROUTE} element={<About />} />
                    <Route path={ROUTES.CONTACT_ROUTE} element={<Contact />} />
                    <Route path="*" element={<>Not Found</>} />
                </Route>
            </Routes>
        </Router>
    )
}

export default RootComponent
