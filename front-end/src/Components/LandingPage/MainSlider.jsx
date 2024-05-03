import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import profilePic from "../../assets/images/avatar/avatar-01.png";
import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectCoverflow } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { baseURL } from '../Auth/API';


function MainSlider() {
    const [nfts, setNfts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchNFTs = async () => {
        try {
            const response = await axios.get(`${baseURL}/api/nfts/`);
            setNfts(response.data.slice(0, 10));
            setError(null);
        } catch (error) {
            console.error('Failed to fetch NFTs:', error);
            setError('Failed to load NFTs');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNFTs();
    }, []);

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 }
        }
    };

    return (
        <div class="themesflat-container w1490">
            <div class="row">
                <div class="col-12 pages-title">
                    <div className="relative">
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            loop={true}
                            slidesPerView={4}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 2.5,
                            }}
                            pagination={{ el: '.swiper-pagination', clickable: true }}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                                clickable: true,
                            }}
                            modules={[EffectCoverflow, Pagination, Navigation]}
                            className="swiper swiper-3d-7"
                        >
                            {nfts.map(nft => (
                                <SwiperSlide key={nft._id}>
                                    <div className="tf-card-box">
                                        <div className="card-media">
                                            <a href="#">
                                                <img src={`http://localhost:5000/${nft.imageUrl}`} alt={nft.name} />                                        </a>
                                            <span className="wishlist-button icon-heart"></span>
                                            <div className="featured-countdown">
                                                <span className="js-countdown" data-timer="7500" data-labels="d,h,m,s"></span>
                                            </div>
                                            <div className="button-place-bid">
                                                <a href="#" className="tf-button"><span>Place Bid</span></a>
                                            </div>
                                        </div>
                                        <div className="meta-info text-center">
                                            <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine belt</a></h5>
                                            <h6 className="price gem"><i className="icon-gem"></i>0,34</h6>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="swiper-button-next next-3d over"></div>
                        <div className="swiper-button-prev prev-3d over"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainSlider;

