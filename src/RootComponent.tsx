import React from 'react'
import { MemoryRouter as Router, Route, Routes, Outlet } from 'react-router-dom'
import { BubblyContainer } from './lib/BubblyTransition'
import AnimatedCursor from 'react-animated-cursor'
import { ROUTES } from './resources/routes-constants'
import { About, Contact, Firefly, Home, Nav, StickyBar } from './components'
import './styles/main.scss'

const RootComponent: React.FC = () => {
    return (
        <Router basename="/">
            <BubblyContainer />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <AnimatedCursor
                                innerSize={8}
                                outerSize={35}
                                innerScale={1}
                                outerScale={2}
                                outerAlpha={0}
                                // hasBlendMode={true}
                                innerStyle={{
                                    backgroundColor: '#cd7650',
                                    zIndex: 1000
                                }}
                                outerStyle={{
                                    border: '2px solid #cd7650',
                                    backgroundColor: 'rgba(205, 118, 80, 0.2)',
                                    zIndex: 1000
                                }}
                            />
                            <Nav />
                            <Outlet />
                            <StickyBar />
                            <Firefly />
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
