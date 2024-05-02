import React from 'react'
import { Outlet } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import MainSlider from '../LandingPage/MainSlider'
function MainLayOut() {
return (
    <div>
        <NavBar />
        <LandingPage    />
        <MainSlider />
        <Footer />

    </div>
)
}

export default MainLayOut