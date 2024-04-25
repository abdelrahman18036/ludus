import React from 'react'
import "../../assets/styles/style.css"
function MobileNav() {
  return (
    <div className="mobile-nav-wrap">
    <div className="overlay-mobile-nav" />
    <div className="inner-mobile-nav">
    <a href="index-2.html" rel="home" className="main-logo">
        <img id="mobile-logo_header" src="assets/images/logo/logo.png" data-retina="assets/images/logo/logo@2x.png" />
    </a>
    <div className="mobile-nav-close">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="white" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 122.878 122.88" enableBackground="new 0 0 122.878 122.88" xmlSpace="preserve"><g><path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z" /></g></svg>
    </div>
    <nav id="mobile-main-nav" className="mobile-main-nav">
        <ul id="menu-mobile-menu" className="menu">
        <li className="menu-item menu-item-has-children-mobile">
            <a className="item-menu-mobile">Home</a>
            <ul className="sub-menu-mobile">
            <li className="menu-item"><a href="index-2.html">Home 1</a></li>
            <li className="menu-item"><a href="home-2.html">Home 2</a></li>
            <li className="menu-item"><a href="home-3.html">Home 3</a></li>
            <li className="menu-item"><a href="home-4.html">Home 4</a></li>
            <li className="menu-item"><a href="home-5.html">Home 5</a></li>
            <li className="menu-item"><a href="home-6.html">Home 6</a></li>
            <li className="menu-item"><a href="home-7.html">Home 7</a></li>
            <li className="menu-item"><a href="slider-3d.html">Slider 3d</a></li>
            <li className="menu-item"><a href="slider-scroll.html">Slider Scroll</a></li>
            <li className="menu-item"><a href="slider-animation.html">Slider Animation</a></li>
            </ul>
        </li>
        <li className="menu-item">
            <a className="item-menu-mobile" href="about-us.html">About us</a>
        </li>
        <li className="menu-item menu-item-has-children-mobile">
            <a className="item-menu-mobile">Explore</a>
            <ul className="sub-menu-mobile">
            <li className="menu-item"><a href="explore-1.html">Explore Style 1</a></li>
            <li className="menu-item"><a href="explore-2.html">Explore Style 2</a></li>
            <li className="menu-item"><a href="explore-3.html">Explore Style 3</a></li>
            <li className="menu-item"><a href="explore-4.html">Explore Style 4</a></li>
            <li className="menu-item"><a href="nft-detail-1.html">NFT Detail 1</a></li>
            <li className="menu-item"><a href="nft-detail-2.html">NFT Detail 2</a></li>
            <li className="menu-item"><a href="nft-detail-3.html">NFT Detail 3</a></li>
            <li className="menu-item"><a href="ranking.html">Ranking</a></li>
            <li className="menu-item"><a href="upcoming.html">Upcoming Projects</a></li>
            </ul>
        </li>
        <li className="menu-item menu-item-has-children-mobile">
            <a className="item-menu-mobile">Pages</a>
            <ul className="sub-menu-mobile">
            <li className="menu-item"><a href="market.html">Market</a></li>
            <li className="menu-item"><a href="market-create.html">Create</a></li>
            <li className="menu-item"><a href="market-active-bid.html">Active Bid</a></li>
            <li className="menu-item"><a href="market-explore.html">Explore</a></li>
            <li className="menu-item"><a href="market-collection.html">My collection</a></li>
            <li className="menu-item"><a href="market-favorite.html">My favorite</a></li>
            <li className="menu-item"><a href="market-wallet.html">Wallet</a></li>
            <li className="menu-item"><a href="market-history.html">History</a></li>
            <li className="menu-item"><a href="market.html">Settings</a></li>
            <li className="menu-item"><a href="author-1.html">Authors Style 1</a></li>
            <li className="menu-item"><a href="author-2.html">Authors Style 2</a></li>
            <li className="menu-item"><a href="terms-condition.html">Terms &amp; Condition</a></li>
            <li className="menu-item"><a href="no-result.html">No Result</a></li>
            <li className="menu-item"><a href="faq.html">FAQs</a></li>
            <li className="menu-item"><a href="coming-soon.html">Coming Soon</a></li>
            <li className="menu-item"><a href="maintenance.html">Maintenance</a></li>
            <li className="menu-item"><a href="404.html">404</a></li>
            <li className="menu-item"><a href="login.html">Login</a></li>
            <li className="menu-item"><a href="sign-up.html">Sign up</a></li>
            </ul>
        </li>
        <li className="menu-item menu-item-has-children-mobile">
            <a className="item-menu-mobile">Blog</a>
            <ul className="sub-menu-mobile">
            <li className="menu-item"><a href="blog-grid.html">Blog Grid</a></li>
            <li className="menu-item"><a href="blog-grid-1.html">Blog Grid 1</a></li>
            <li className="menu-item"><a href="blog-list.html">Blog List</a></li>
            <li className="menu-item"><a href="blog-list-1.html">Blog List 1</a></li>
            <li className="menu-item"><a href="blog-detail.html">Blog Details</a></li>
            </ul>
        </li>
        <li className="menu-item current-menu-item">
            <a className="item-menu-mobile" href="contact-us.html">Contact</a>
        </li>
        </ul>
    </nav>

    </div>
</div>
  )
}

export default MobileNav