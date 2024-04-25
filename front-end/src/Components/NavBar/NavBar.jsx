import React from 'react'
import "../../assets/styles/style.css"
import logo from "../../assets/images/logo/logo.png"
import MainNav from './MainNav'
import SideNav from './SideNav'
import MobileNav from './MobileNav'
function NavBar() {
  return (
    <div>
        <header id="header_main" className="header_1 header-fixed pb-5">
                <MainNav />


               <SideNav />


                <MobileNav />


        </header>

    </div>
  )
}

export default NavBar