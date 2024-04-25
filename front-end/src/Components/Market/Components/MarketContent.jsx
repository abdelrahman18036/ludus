import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css'
export default function MarketContent() {
    return (
        <div id="market" className="tabcontent active">
            <div className="wrapper-content">
                <div className="inner-content">

                    <div className="heading-section">
                        <h2 className="tf-title pb-30">Trending NFTs</h2>
                    </div>
                    <div className="widget-tabs relative mb-40">
                        <ul className="widget-menu-tab">
                            <li className="item-title">
                                <span className="inner">Category</span>
                            </li>
                            <li className="item-title active">
                                <span className="inner">Items</span>
                            </li>
                            <li className="item-title">
                                <span className="inner">Status</span>
                            </li>
                            <li className="item-title">
                                <span className="inner">Price range</span>
                            </li>
                        </ul>
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
                                        <SwiperSlide>
                                            <div className="tf-card-box style-4">
                                                <div className="author flex items-center">
                                                    <div className="avatar">
                                                        <img src="assets/images/avatar/avatar-box-02.jpg" alt="Marvin McKinney" />
                                                    </div>
                                                    <div className="info">
                                                        <span>Created by:</span>
                                                        <h6><a href="author-2.html">Marvin McKinney</a></h6>
                                                    </div>
                                                </div>
                                                <div className="card-media">
                                                    <a href="#">
                                                        <img src="assets/images/box-item/card-item-49.jpg" alt="Dayco serpentine belt" />
                                                    </a>
                                                    <span className="wishlist-button icon-heart" />
                                                </div>
                                                <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine belt</a></h5>
                                                <div className="meta-info flex items-center justify-between">
                                                    <div>
                                                        <span className="text-bid">Current Bid</span>
                                                        <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                    </div>
                                                    <div className="button-place-bid">
                                                        <a href="#" data-toggle="modal" data-target="#popup_bid" className="tf-button"><span>Place Bid</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>

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
                                    <div className="col-item">
                                        <div className="tf-card-box style-1">
                                            <div className="card-media">
                                                <a href="#">
                                                    <img src="assets/images/box-item/card-item-53.jpg" alt />
                                                </a>
                                                <span className="wishlist-button icon-heart" />
                                                <div className="button-place-bid">
                                                    <a href="#" data-toggle="modal" data-target="#popup_bid" className="tf-button"><span>Place Bid</span></a>
                                                </div>
                                            </div>
                                            <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                                belt</a></h5>
                                            <div className="author flex items-center">
                                                <div className="avatar">
                                                    <img src="assets/images/avatar/avatar-box-03.jpg" alt="Image" />
                                                </div>
                                                <div className="info">
                                                    <span>Created by:</span>
                                                    <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                                </div>
                                            </div>
                                            <div className="divider" />
                                            <div className="meta-info flex items-center justify-between">
                                                <span className="text-bid">Current Bid</span>
                                                <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-item">
                                        <div className="tf-card-box style-1">
                                            <div className="card-media">
                                                <a href="#">
                                                    <img src="assets/images/box-item/card-item-54.jpg" alt />
                                                </a>
                                                <span className="wishlist-button icon-heart" />
                                                <div className="button-place-bid">
                                                    <a href="#" data-toggle="modal" data-target="#popup_bid" className="tf-button"><span>Place Bid</span></a>
                                                </div>
                                            </div>
                                            <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                                belt</a></h5>
                                            <div className="author flex items-center">
                                                <div className="avatar">
                                                    <img src="assets/images/avatar/avatar-box-03.jpg" alt="Image" />
                                                </div>
                                                <div className="info">
                                                    <span>Created by:</span>
                                                    <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                                </div>
                                            </div>
                                            <div className="divider" />
                                            <div className="meta-info flex items-center justify-between">
                                                <span className="text-bid">Current Bid</span>
                                                <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}