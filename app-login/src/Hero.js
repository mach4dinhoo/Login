import React from 'react'
import SideBar from './components/SideBar';

const Hero = ({handleLogout}) =>{
    return(
        
        <section className="hero">
            <div>
                <SideBar/>
            </div>
        </section>
    )
}

export default Hero;