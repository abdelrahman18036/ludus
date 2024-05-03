import React from 'react'
import imageOne from '../../assets/images/item1.png'
import imageTwo from '../../assets/images/item2.png'
import imageThree from '../../assets/images/item3.png'
import imageFour from '../../assets/images/item4.png'
import imageFive from '../../assets/images/item5.png'
import { TypeAnimation } from 'react-type-animation';
import Tsparticles from '../Particles/Tsparticles';
import MainSlider from "./MainSlider"

function LandingPage() {

    return (
        <div>
            <div id="wrapper">

                <div id="page" className="pt-40 home-1">
                    <div className="flat-pages-title">
                        <div className="widget-bg-line">
                            <div className="wraper">
                                <div className="bg-grid-line y bottom ">
                                    <div className="bg-line" />
                                </div>

                            </div>
                        </div>
                        <div className="themesflat-container w1490">
                            <div className="row">
                                <div className="col-12 pages-title">
                                    <div className="content">
                                        <h1 data-wow-delay="0s" className="wow fadeInUp">
                                            <TypeAnimation
                                                sequence={[
                                                    'World Of Top Works',
                                                    1000,
                                                    'World Of NFTS',
                                                    1000,
                                                    'World Of Digital Art',
                                                    1000,
                                                ]}
                                                wrapper="span"
                                                speed={60}
                                                style={{ fontSize: '1em', display: 'inline-block' }}
                                                repeat={Infinity}
                                            /></h1>
                                        <p className="wow fadeInUp" data-wow-delay="0.1s">Welcome to the world of rare digital art.
                                            Explore the best art from hand-picked digital artist out there and find the hidden
                                            gem.</p>
                                        <div data-wow-delay="0.2s" className=" wow fadeInUp flat-button flex justify-center">
                                            <a href="/login" className="tf-button style-1 h50 w190 mr-16">Login Now <i className="icon-arrow-up-right2" /></a>
                                            <a href="/sign-up" className="tf-button style-1 h50 w190 active">Getstart Now <i className="icon-arrow-up-right2" /></a>
                                        </div>
                                    </div>

                                    <div class="relative">
                                        <MainSlider />

                                    </div>
                                    <div className="icon-background">
                                        <img className="absolute item1" src={imageOne} alt="item" />
                                        <img className="absolute item2" src={imageTwo} alt="item" />
                                        <img className="absolute item3" src={imageThree} alt="item" />
                                        <img className="absolute item4" src={imageOne} alt="item" />
                                        <img className="absolute item5" src={imageOne} alt="item" />
                                        <img className="absolute item6" src={imageFour} alt="item" />
                                        <img className="absolute item7" src={imageFive} alt="item" />
                                        <img className="absolute item8" src={imageFive} alt="item" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tf-section action">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="action__body m-0">
                                        <div className="tf-tsparticles">
                                            <Tsparticles />
                                        </div>
                                        <h2 className="text-center capitalize mx-auto mw-667">Join the world’s largest nFT community
                                            &amp; start
                                            collecting NFTS</h2>
                                        <div className="flat-button flex justify-center">
                                            <a href="/market" className="tf-button style-2 h50 w190">Explore now<i className="icon-arrow-up-right2" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </div>

        </div>
    )
}

export default LandingPage