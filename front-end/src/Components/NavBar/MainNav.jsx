import React from 'react'
import  logo from "../../assets/images/logo/logo.png"
import "../../assets/styles/style.css"

function MainNav() {
  return (
<div className="themesflat-container">
                    <div className="row">
                    <div className="col-md-12">                              
                    <div id="site-header-inner"> 
                        <div className="flex items-center justify-between ">
                            <div id="site-logo">
                            <div id="site-logo-inner">
                                <a href="/" rel="home" className="main-logo">
                                <img id="logo_header"  className="w-25 " src={logo} />
                                </a>
                            </div>
                            </div>
                            <div className="mobile-button">
                            <span />

                            </div>


                            <nav id="main-nav" className="main-nav ">


                            <ul id="menu-primary-menu" className="menu">
                                <li className="menu-item menu-item-has-children">
                                <a href="/">Home</a>
                        
                                </li>
                                <li className="menu-item">
                                <a href="/">About us</a>
                                </li>
                                <li className="menu-item menu-item-has-children">
                                <a>Explore</a>
                              
                                </li>
                                <li className="menu-item menu-item-has-children">
                                <a>Pages</a>
                           
                                </li>
                                <li className="menu-item menu-item-has-children">
                                <a>Blog</a>
                       
                                </li>
                                <li className="menu-item ">
                                <a href="/contact">Contact</a>
                                </li>
                            </ul>


                            </nav>


                            <div className="flat-wallet flex items-center p-0 justify-center  mt-3">
        

                            <div className="canvas m-0 p-0">
                                <span />
                            </div>
                            </div>
                        </div> 
                        </div>
                    </div>
                    </div>
                </div>
  )
}

export default MainNav