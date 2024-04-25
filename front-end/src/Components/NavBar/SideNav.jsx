import React from 'react'
import logo from "../../assets/images/logo/logo.png"
import "../../assets/styles/style.css"
function SideNav() {
  return (
        <div className="canvas-nav-wrap">
            <div className="overlay-canvas-nav" />
            <div className="inner-canvas-nav">
            <div className="side-bar">
                <a href="index-2.html" rel="home" className="main-logo">
                <img id="logo_header" src={logo} data-retina="assets/images/logo/logo@2x.png" />
                </a>
                <div className="canvas-nav-close">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="white" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 122.878 122.88" enableBackground="new 0 0 122.878 122.88" xmlSpace="preserve"><g><path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z" /></g></svg>
                </div>

                <div className="widget widget-categories">
                <h5 className="title-widget">Categories</h5>
                <ul>
                    <li>
                    <div className="cate-item"><a href="/">NFTs</a></div>
                    <div className="number">(1.483)</div>
                    </li>
                    <li>
                    <div className="cate-item"><a href="/">Digital Art</a></div>
                    <div className="number">(97)</div>
                    </li>
                    <li>
                    <div className="cate-item"><a href="/">Crypto</a></div>
                    <div className="number">(45)</div>
                    </li>
                    <li>
                    <div className="cate-item"><a href="/">Technology</a></div>
                    <div className="number">(728)</div>
                    </li>
                </ul>
                </div>
                <div className="widget widget-menu style-4">
                <h5 className="title-widget">Company</h5>
                <ul>
                    <li><a href="/">Help center</a></li>
                    <li><a href="/">Platform status</a></li>
                </ul>
                </div>
                <div className="widget">
                <h5 className="title-widget">Join the community</h5>
                <div className="widget-social">
                    <ul className="flex">
                    <li><a href="/" className="icon-facebook" /></li>
                    <li><a href="/" className="icon-twitter" /></li>
                    <li><a href="/" className="icon-vt" /></li>
                    <li><a href="/" className="icon-tiktok" /></li>
                    <li><a href="/" className="icon-youtube" /></li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
  )
}

export default SideNav