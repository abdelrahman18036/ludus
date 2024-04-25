import React from "react";
import Sliderbar from "../Sliderbar/Sliderbar";
import bgaction from "../../assets/images/item-background/bg-action-1.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css'

import Tsparticles from "../Particles/Tsparticles";

export default function Layout({ children }) {
    return (
        <div className="wrapper-content">
            <div className="inner-content">
                <div className="action__body w-full mb-40">
                    <div className="tf-tsparticles">
                        <Tsparticles />
                    </div>
                    <h2>Discover, create and sell your own NFT</h2>
                    <div className="flat-button flex">
                        <a href="/create" className="tf-button style-2 h50 w230">Create your first NFT<i className="icon-arrow-up-right2" /></a>
                    </div>
                    <div className="bg-home7">
                        <Swiper
                            modules={[Autoplay, Navigation, Pagination]}
                            loop={true}
                            slidesPerView={'auto'}
                            spaceBetween={14}
                            direction={'vertical'}
                            speed={5000}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false
                            }}
                            observer={true}
                            observeParents={true}
                            className="swiper-container autoslider3reverse"
                        >
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            modules={[Autoplay, Navigation, Pagination]}
                            loop={true}
                            slidesPerView={'auto'}
                            spaceBetween={14}
                            direction={'vertical'}
                            speed={5000}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                                reverseDirection: true
                            }}
                            observer={true}
                            observeParents={true}
                            className="swiper-container autoslider4reverse"
                        >
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            modules={[Autoplay, Navigation, Pagination]}
                            loop={true}
                            slidesPerView={'auto'}
                            spaceBetween={14}
                            direction={'vertical'}
                            speed={5000}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false
                            }}
                            className="swiper-container autoslider3reverse"
                            observer={true}
                            observeParents={true}
                        >
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={bgaction} alt="NFT background" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                {children}
            </div>
            <Sliderbar />
        </div>
    );
}