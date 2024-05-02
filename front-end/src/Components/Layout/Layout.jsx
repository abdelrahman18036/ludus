import React from "react";
import Sliderbar from "../Sliderbar/Sliderbar";
import Tsparticles from "../Particles/Tsparticles";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import bgaction from "../../assets/images/item-background/bg-action-1.png";

export default function Layout({ children }) {
  // Helper function to render a single Swiper instance with given settings
  const renderSwiper = (reverseDirection = false) => (
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
        reverseDirection: reverseDirection
      }}
      navigation={false}
      pagination={{
        clickable: true
      }}
      observer={true}
      observeParents={true}
      className={`swiper-container ${reverseDirection ? 'autoslider4reverse' : 'autoslider3reverse'}`}
    >
      {Array.from({ length: 10 }).map((_, index) => (
        <SwiperSlide key={index}>
          <img src={bgaction} alt="NFT background" />
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <div className="wrapper-content">
      <div className="inner-content">
        <div className="action__body w-full mb-40">
          <div className="tf-tsparticles">
            <Tsparticles />
          </div>
          <h2>Discover, create and sell your own NFT</h2>
          <div className="flat-button flex">
            <a href="/create" className="tf-button style-2 h50 w230">
              Create your first NFT<i className="icon-arrow-up-right2" />
            </a>
          </div>
          <div className="bg-home7">
            {renderSwiper()}
            {renderSwiper(true)}
            {renderSwiper()}
          </div>
        </div>
        {children}
      </div>
        <Sliderbar />
    </div>
  );
}
