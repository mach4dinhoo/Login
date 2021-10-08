import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react';
import Home from './pages/Home';
import teste from './pages/teste';

const Hero = ({ }) => {
    const [showNav, setShowNav] = useState(false)
    return (
        <>
            <Router>
                <div className="hero">
                    <header >
                        <GiHamburgerMenu className="hamburguer" onClick={() => setShowNav(!showNav)} />
                    </header>

                    <Navbar show={showNav} />

                    <div className="main">
                        <Route path="/" exact={true} component={Home}></Route>
                        <Route path="/teste" component={teste}></Route>
                    </div>
                </div>
            </Router>
        </>
    )
}

export default Hero;