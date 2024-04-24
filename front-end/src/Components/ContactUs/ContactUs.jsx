import React from 'react'
import '../../assets/styles/style.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo/logo.png'
function ContactUs() {
  return (
    <div>
        <div id="wrapper">
            <div id="page" className="pt-40 contact-us-page relative">
              
                <div className="flat-title-page">
                <div className="themesflat-container">
                    <div className="row">
                    <div className="col-12">
                        <h1 className="heading text-center">Get In Touch</h1>
                        <ul className="breadcrumbs flex justify-center">
                        <li className="icon-keyboard_arrow_right">
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">Explore</Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <div className="tf-section-2 contact-us">
                <div className="themesflat-container">
                    <div className="row">
                    <div className="col-12">
                        <div className="widget-gg-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d97101.88872869895!2d-74.22688511715344!3d40.487336736141906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1689125037376!5m2!1svi!2s" width="100%" height={460} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="tf-section-2 widget-box-icon">
                <div className="themesflat-container">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="heading-section-1">
                        <h2 className="tf-title pb-20">Information</h2>
                        <p className="pb-40">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                    <div data-wow-delay="0s" className="wow fadeInUp col-md-4">
                        <div className="box-icon-item">
                        <img src={Logo} alt />
                        <div className="title"><a href="#">Office address</a></div>
                        <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                        </div>
                    </div>
                    <div data-wow-delay="0.1s" className="wow fadeInUp col-md-4">
                        <div className="box-icon-item">
                        <img src={Logo} alt />
                        <div className="title"><a href="#">Email</a></div>
                        <p>open9@support.com
                            open9vietnam@support.com</p>
                        </div>
                    </div>
                    <div data-wow-delay="0.2s" className="wow fadeInUp col-md-4">
                        <div className="box-icon-item">
                        <img src={Logo} alt />
                        <div className="title"><a href="#">Phone number</a></div>
                        <p>(316) 555-0116 <br />
                            (219) 555-0114</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="tf-section-2 widget-box-icon">
                <div className="themesflat-container">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="heading-section-1">
                        <h2 className="tf-title pb-20">Contact us</h2>
                        <p className="pb-40">Have A Question? Need Help? Don't Hesitate, Drop Us A Line</p>
                        </div>
                    </div>
                    <div className="col-12">
                        <form id="commentform" className="comment-form">
                        <div className="flex gap30">
                            <fieldset className="name">
                            <input className="style-1" type="text" id="name" placeholder="Your name*" name="name" tabIndex={2}  aria-required="true" required />
                            </fieldset>
                            <fieldset className="email">
                            <input className="style-1" type="email" id="email" placeholder="Email address*" name="email" tabIndex={2}  aria-required="true" required />
                            </fieldset>
                            <fieldset className="subject">
                            <input className="style-1" type="text" id="subject" placeholder="Subject" name="subject" tabIndex={2}  aria-required="true" required />
                            </fieldset>
                        </div>
                        <fieldset className="message">
                            <textarea className="style-1" id="message" name="message" rows={4} placeholder="Your message*" tabIndex={4} aria-required="true" required  />
                        </fieldset>
                        <div className="btn-submit">
                            <button className="tf-button style-1" type="submit">Send message <i className="icon-arrow-up-right2" /></button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
                {/* Footer */}
                {/* <footer id="footer">
                <div className="themesflat-container">
                    <div className="row">
                    <div className="col-12">
                        <div className="footer-content flex flex-grow">
                        <div className="widget-logo flex-grow">
                            <div className="logo-footer" id="logo-footer">
                            <a href="index-2.html">
                                <img id="logo_footer" src={Logo} data-retina="assets/images/logo/logo@2x.png" />
                            </a>
                            </div>
                        </div>
                        <div className="widget widget-menu style-1">
                            <h5 className="title-widget">Marketplace</h5>
                            <ul>
                            <li><a href="#">All NFTs</a></li>
                            <li><a href="#">Virtual worlds</a></li>
                            <li><a href="#">Domain names</a></li>
                            <li><a href="#">Photography</a></li>
                            <li><a href="#">Digital art</a></li>
                            <li><a href="#">Music</a></li>
                            </ul>
                        </div>
                        <div className="widget widget-menu style-2">
                            <h5 className="title-widget">Resource</h5>
                            <ul>
                            <li><a href="#">Help center</a></li>
                            <li><a href="#">Platform status</a></li>
                            <li><a href="#">Partners</a></li>
                            <li><a href="#">Discount community</a></li>
                            <li><a href="#">Live auctions</a></li>
                            <li><a href="#">Discover</a></li>
                            </ul>
                        </div>
                        <div className="widget widget-menu style-3">
                            <h5 className="title-widget">Account</h5>
                            <ul>
                            <li><a href="#">Authors</a></li>
                            <li><a href="#">My Collection</a></li>
                            <li><a href="#">Author Profile</a></li>
                            <li><a href="#">Go to dashboard</a></li>
                            <li><a href="#">Collection</a></li>
                            <li><a href="#">Create Collection</a></li>
                            </ul>
                        </div>
                        <div className="widget-last">
                            <div className="widget-menu style-4">
                            <h5 className="title-widget">Company</h5>
                            <ul>
                                <li><a href="#">Help center</a></li>
                                <li><a href="#">Platform status</a></li>
                            </ul>
                            </div>
                            <h5 className="title-widget mt-30">Join the community</h5>
                            <div className="widget-social">
                            <ul className="flex">
                                <li><a href="#" className="icon-facebook" /></li>
                                <li><a href="#" className="icon-twitter" /></li>
                                <li><a href="#" className="icon-vt" /></li>
                                <li><a href="#" className="icon-tiktok" /></li>
                                <li><a href="#" className="icon-youtube" /></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="footer-bottom">
                    <p>© 2023 OpeN9 - Made By Themesflat</p>
                    <ul className="flex">
                        <li>
                        <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                        <a href="#">Terms of Service</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </footer> */}
            </div>
        </div>

    </div>
  )
}

export default ContactUs