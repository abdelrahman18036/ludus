import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css'
import { baseURL } from "../../Auth/API";
import axios from "axios";
import profilePic from "../../../assets/images/avatar/avatar-01.png";


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

    const placeBid = async (nftId) => {
        try {
            const response = await axios.post(`${baseURL}/api/orders`, {
                productIds: nftId,
            }, {
                headers: {
                    'x-access-token': localStorage.getItem('userToken')
                }
            });

            alert('Bid placed successfully');
            fetchNFTs();
            fetchLatestNFTs();

        } catch (error) {
            console.error('Failed to place bid:', error);
        }
    };


    return (
        <div id="market" className="tabcontent active">
            <div className="wrapper-content">
                <div className="inner-content">

                    <div className="heading-section">
                        <h2 className="tf-title pb-30">Trending NFTs</h2>
                    </div>
                    <div className="widget-tabs relative mb-40">

                        <div className="widget-content-tab">
                            <div className="widget-content-inner">
                                <div className="featured-item style-bottom">
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
                                        {nfts.map(nft => (
                                            <SwiperSlide className="relative z-99999" key={nft._id}>
                                                <div className="tf-card-box style-4">
                                                    <div className="author flex items-center">
                                                        <div className="avatar">
                                                            <img src={nft.author.profilePicture || profilePic} alt={nft.author.username} />
                                                        </div>
                                                        <div className="info">
                                                            <span>Created by:</span>
                                                            <h6><a href={`author-2.html`}>{nft.author.username}</a></h6>
                                                        </div>
                                                    </div>
                                                    <div className="card-media">
                                                        <a href="#">
                                                            <img src={nft.imageUrl} alt={nft.name} />
                                                        </a>
                                                        <span className="wishlist-button icon-heart" />
                                                    </div>
                                                    <h5 className="name"><a href="nft-detail-2.html">{nft.name}</a></h5>
                                                    <div className="meta-info flex items-center justify-between">
                                                        <div>
                                                            <span className="text-bid">Current Bid</span>
                                                            <h6 className="price gem"><i className="icon-gem" />{nft.price}</h6>
                                                        </div>
                                                        <div className="button-place-bid">
                                                            <button data-toggle="modal" data-target="#popup_bid" className="tf-button" onClick={() => placeBid(nft._id)}><span>Place Bid</span></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}

                                    </Swiper>
                                </div>
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
                                    {latestNfts.map(nft => (
                                        <div className="col-item" key={nft._id}>
                                            <div className="tf-card-box style-1">
                                                <div className="card-media">

                                                    <img src={nft.imageUrl || profilePic} alt={nft.name} />
                                                    <span className="wishlist-button icon-heart" />
                                                    <div className="button-place-bid">
                                                        <button onClick={() => placeBid(nft._id)} data-toggle="modal" data-target="#popup_bid" className="tf-button"><span>Place Bid</span></button>
                                                    </div>
                                                </div>
                                                <h5 className="name"><a href="nft-detail-2.html">{nft.name}</a></h5>
                                                <div className="author flex items-center">
                                                    <div className="avatar">
                                                        <img src={nft.author.profilePicture} alt={nft.author.username} />
                                                    </div>
                                                    <div className="info">
                                                        <span>Created by:</span>
                                                        <h6><a href="author-2.html">{nft.author.username}</a></h6>
                                                    </div>
                                                </div>
                                                <div className="divider" />
                                                <div className="meta-info flex items-center justify-between">
                                                    <span className="text-bid">Current Bid</span>
                                                    <h6 className="price gem"><i className="icon-gem" />{nft.price}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
}