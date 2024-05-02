import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import profilePic from ".   ./../assets/images/avatar/avatar-01.png";
import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton'
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
        <div className="themesflat-container w1490">
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
                navigation={true}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {loading ? (
                    Array(10).fill().map((_, index) => (
                        <SwiperSlide key={index}>
                            <Skeleton variant="rectangular" width={210} height={118} />
                            <Skeleton width="60%" />
                        </SwiperSlide>
                    ))
                ) : error ? (
                    <div>Error loading NFTs: {error}</div>
                ) : (
                    nfts.map(nft => (
                        <SwiperSlide key={nft._id} className="relative z-99999">
                            <Link className='sliderCards' to={`/nft/${nft._id}`}>
                                <motion.div className="tf-card-box style-4" variants={itemVariants}>
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                          <img src={`http://localhost:5000/${nft.author.profilePicture}` || profilePic} alt={nft.author.username} />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a>{nft.author.username}</a></h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <img src={`http://localhost:5000/${nft.imageUrl}`} alt={nft.name} />
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="#">{nft.name}</a></h5>
                                    <div className="meta-info flex items-center justify-between">
                                        <div>
                                            <span className="text-bid">Current Bid</span>
                                            <h6 className="price gem"><i className="icon-gem" />{nft.price}</h6>
                                        </div>
                                        <div className="button-place-bid">
                                            <button
                                                data-toggle="modal"
                                                data-target="#popup_bid"
                                                className="tf-button"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                }}>
                                                <span>Place Bid</span>
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        </SwiperSlide>
                    ))
                )}
            </Swiper>
        </div>
    );
}

export default MainSlider;
