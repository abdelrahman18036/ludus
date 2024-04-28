import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css'
import { baseURL } from "../../Auth/API";
import axios from "axios";
import profilePic from "../../../assets/images/avatar/avatar-01.png";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { Bounce, Flip, ToastContainer, toast } from "react-toastify";
import "../../../assets/styles/style.css";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function MarketContent() {
    const [nfts, setNfts] = useState([]);
    const [latestNfts, setLatestNFTs] = useState([]);

    useEffect(() => {
        fetchNFTs();
        fetchLatestNFTs();
    }, []);

    const fetchNFTs = async () => {
        try {
            const response = await axios.get(`${baseURL}/api/nfts/`);
            setNfts(response.data.slice(0, 6));
        } catch (error) {
            console.error('Failed to fetch NFTs:', error);
        }
    };

    const fetchLatestNFTs = async () => {
        try {
            const response = await axios.get(`${baseURL}/api/nfts/latest`);
            setLatestNFTs(response.data.slice(0, 8));
        } catch (error) {
            console.error('Failed to fetch latest NFTs:', error);
        }
    };
    const test = [1,2,3,4]

    const placeBid = async (nftId) => {
        try {
            const response = await axios.post(`${baseURL}/api/orders`, {
                productIds: nftId,
            }, {
                headers: {
                    'x-access-token': localStorage.getItem('userToken')
                }
            });

            toast.success('🦄 NFT Added Successfully ', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Flip,
                });
            fetchNFTs();
            fetchLatestNFTs();

        } catch (error) {
            console.error('Failed to place bid:', error);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0, transform: 'translateY(100px)' },
        visible: {
            opacity: 1,
            transform: 'translateY(0px)',
            transition: { duration: 0.5 }
        }
    };


    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 }
        }
    };

    return (
        <div id="market" className="tabcontent active">
            <ToastContainer />
          


            <div className="wrapper-content">
                <div className="inner-content">
                    <div className="heading-section">
                        <h2 className="tf-title pb-30">Trending NFTs</h2>
                    </div>
                    <div className="widget-tabs relative mb-40">
                        <div className="widget-content-tab">
                            <div className="widget-content-inner">
                                <motion.div
                                    className="featured-item style-bottom"
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <Swiper
                                        modules={[Navigation, Pagination]}
                                        spaceBetween={26.7}
                                        slidesPerView={1}
                                        navigation
                                        pagination={{ clickable: true }}
                                        observer={true}
                                        observeParents={true}
                                        breakpoints={{
                                            768: { slidesPerView: 2 },
                                            1300: { slidesPerView: 3 },
                                            1500: { slidesPerView: 4 }
                                        }}
                                        className="featured pt-10 swiper-container carousel1"
                                    >
                                        {
                                            
                                            nfts ? (nfts.map(nft => (
                                                <SwiperSlide className="relative z-99999" key={nft._id}>
                                                    <Link to={`/nft/${nft._id}`}>
                                                        <motion.div className="tf-card-box style-4" variants={itemVariants}>
                                                            <div className="author flex items-center">
                                                                <div className="avatar">
                                                                    <img src={`http://localhost:5000/${nft.author.profilePicture}` || profilePic} alt={nft.author.username} />
                                                                </div>
                                                                <div className="info">
                                                                    <span>Created by:</span>
                                                                    <h6><a href={`author-2.html`}>{nft.author.username}</a></h6>
                                                                </div>
                                                            </div>
                                                            <div className="card-media">
                                                                <img src={`http://localhost:5000/${nft.imageUrl}`} alt={nft.name} />
                                                                <span className="wishlist-button icon-heart" />
                                                            </div>
                                                            <h5 className="name"><a href="nft-detail-2.html">{nft.name}</a></h5>
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
                                                                            placeBid(nft._id);
                                                                        }}>
                                                                        <span>Place Bid</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    </Link>
                                                </SwiperSlide>
                                            ))
                                        )
                                        :
                                        <div className='flex  justify-center items-center gap30'>
                                            {
                                                test.map((nft) => (
                                                    <div className='flex flex-column gap15'>
                                                  
                                                        <Skeleton  className='rounded'  highlightColor={"#333"} baseColor={"grey"} width={250} height={300} />
                                                        <Skeleton  className='rounded ml-2'  highlightColor={"#333"} baseColor={"grey"} width={200}  />
                                                        <Skeleton  className='rounded ml-2'  highlightColor={"#333"} baseColor={"grey"} width={100} />
                                                      

                                                    </div>
                                            ))
                                        }
                                        </div>
                                        }
                                    </Swiper>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    <div className="heading-section">
                        <h2 className="tf-title style-1 pb-30">Recently added</h2>
                    </div>
                    <div className="widget-tabs relative">
                        <div className="widget-content-tab">
                            <div className="widget-content-inner">
                                <div className="wrap-box-card">
                                    <motion.div
                                        className="row w-100"
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                         
                                        {
                                            latestNfts ? (
                                                latestNfts.map(nft => (
                                                    <motion.div className="col-item" key={nft._id} variants={itemVariants}>
                                                        <Link to={`/nft/${nft._id}`}>
                                                            <div className="tf-card-box style-1">
                                                                <div className="card-media">
                                                                    <img  className="w-100  "src={`http://localhost:5000/${nft.imageUrl}`} alt={nft.name} />
                                                                    <span className="wishlist-button icon-heart" />
                                                                    <div className="button-place-bid">
                                                                        <button onClick={() => placeBid(nft._id)} data-toggle="modal" data-target="#popup_bid" className="tf-button"><span>Place Bid</span></button>
                                                                    </div>
                                                                </div>
                                                                <h5 className="name">{nft.name}</h5>
                                                                <div className="author flex items-center">
                                                                    <div className="avatar">
                                                                        <img src={`http://localhost:5000/${nft.author.profilePicture}`} alt={nft.author.username} />
                                                                    </div>
                                                                    <div className="info">
                                                                        <span>Created by:</span>
                                                                        <h6>{nft.author.username}</h6>
                                                                    </div>
                                                                </div>
                                                                <div className="divider" />
                                                                <div className="meta-info flex items-center justify-between">
                                                                    <span className="text-bid">Current Bid</span>
                                                                    <h6 className="price gem"><i className="icon-gem" />{nft.price}</h6>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </motion.div>
                                                ))
                                            ) :
                                            (
                                                <div className='flex  justify-center items-center gap30 m-auto w-11'>
                                                {
                                                    test.map((nft) => (
                                                        <div className='flex flex-column gap15'>
                                                      
                                                            <Skeleton  className='rounded'  highlightColor={"#333"} baseColor={"grey"} width={250} height={300} />
                                                            <Skeleton  className='rounded ml-2'  highlightColor={"#333"} baseColor={"grey"} width={200}  />
                                                            <Skeleton  className='rounded ml-2'  highlightColor={"#333"} baseColor={"grey"} width={100} />
                                                          
    
                                                        </div>
                                                ))
                                            }
                                            </div>
                                            )
                                        }
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}