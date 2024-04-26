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

                            <nav id="main-nav" class="main-nav">
                                        <ul id="menu-primary-menu" class="menu">
                                            <li class="menu-item menu-item-has-children">
                                                <a>Home</a>
                                            </li>
                                            <li class="menu-item">
                                                <a href="about-us.html">About us</a>
                                            </li>
                                            <li class="menu-item menu-item-has-children">
                                                <a>Explore</a>
                                               
                                            </li>
                                            <li class="menu-item menu-item-has-children">
                                                <a>Pages</a>
                                         
                                            </li>
                                            <li class="menu-item menu-item-has-children">
                                                <a>Blog</a>
                                           
                                            </li>
                                            <li class="menu-item ">
                                                <a href="contact-us.html">Contact</a>
                                            </li>
                                        </ul>
                                    </nav>
                                    
                                    <div class="flat-wallet flex">
                                        
                                    </div>
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