import React from 'react'
import logo from "../../assets/images/logo/logo.png"
import "../../assets/styles/style.css"
import { Link } from 'react-router-dom'

function MainNav() {
    return (
        <div className="themesflat-container">
            <div className="row">
                <div className="col-md-12">
                    <div id="site-header-inner">
                        <div className="flex items-center justify-between ">
                            <div id="site-logo">
                                <div id="site-logo-inner">
                                    <Link to="/" rel="home" className="main-logo">
                                        <img id="logo_header" className="w-25 " src={logo} />
                                    </Link>
                                </div>
                            </div>


                            <nav id="main-nav" class="main-nav">
                                <ul id="menu-primary-menu" class="menu">
                                    <li class="menu-item ">
                                        <Link to='/'>Home</Link>
                                    </li>
                                    <li class="menu-item">
                                        <Link to="/404">404</Link>
                                    </li>
                                    <li class="menu-item ">
                                        <Link to='/maintenance'>Maintenance</Link>

                                    </li>
                                    <li class="menu-item ">
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </nav>


                            <div class="canvas">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainNav