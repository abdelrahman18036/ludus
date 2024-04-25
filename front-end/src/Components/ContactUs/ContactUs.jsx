import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Information from './Information';
import ContactForm from './ContactForm';
import Tsparticles2 from '../Particles/Tsparticles2';
import Loading from '../Loading/Loading';

function ContactUs() {
    const [mapLoaded, setMapLoaded] = useState(false);

    const handleMapLoad = () => {
        setMapLoaded(true);
    };

    return (
        <div>
            <NavBar />
            <Tsparticles2 />
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
                                    {!mapLoaded && <div className="d-flex items-center justify-center  h-100"><Loading /></div>} 
                                    <div className={`widget-gg-map ${mapLoaded ? 'loaded' : 'loading'}`}>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.487670609098!2d31.277837315448634!3d30.076267581876987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458413c0181c81d%3A0x4720b4d48a8c7d6e!2sAl-Abbasiya%2C%20El-Abbassia%2C%20Abbaseya%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2s!4v1689125037376!5m2!1sen!2s"
                                            width="100%"
                                            height="460"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            onLoad={handleMapLoad}
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Information />

                    <ContactForm />

                </div>
            </div>
        </div>
    );
}

export default ContactUs;
