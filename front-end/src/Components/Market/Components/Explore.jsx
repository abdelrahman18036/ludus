import React from "react";

export default function Explore() {
    return (
        <>
            <div class="heading-section">
                <h2 class="tf-title pb-30">Explore Product</h2>
            </div>
            <div className="widget-tabs relative">
                <div className="tf-soft">
                    <div className="soft-right">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.125 5.625H16.875M3.125 10H16.875M3.125 14.375H10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Sort by: recently added</span>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <h6>Sort by</h6>
                                <a href="#" className="dropdown-item">
                                    <div className="sort-filter" href="#">
                                        <span>Recently added</span>
                                        <span className="icon-tick"><span className="path2" /></span>
                                    </div>
                                </a>
                                <a href="#" className="dropdown-item">
                                    <div className="sort-filter active" href="#">
                                        <span>Price: Low to High</span>
                                        <span className="icon-tick"><span className="path2" /></span>
                                    </div>
                                </a>
                                <a href="#" className="dropdown-item">
                                    <div className="sort-filter" href="#">
                                        <span>Price: High to Low</span>
                                        <span className="icon-tick"><span className="path2" /></span>
                                    </div>
                                </a>
                                <a href="#" className="dropdown-item">
                                    <div className="sort-filter" href="#">
                                        <span>Auction ending soon</span>
                                        <span className="icon-tick"><span className="path2" /></span>
                                    </div>
                                </a>
                                <h6>Options</h6>
                                <a href="#" className="dropdown-item">
                                    <div className="sort-filter" href="#">
                                        <span>Auction ending soon</span>
                                        <input className="check" type="checkbox" defaultValue="checkbox" name="check" defaultChecked />
                                    </div>
                                </a>
                                <a href="#" className="dropdown-item">
                                    <div className="sort-filter" href="#">
                                        <span>Show lazy minted</span>
                                        <input className="check" type="checkbox" defaultValue="checkbox" name="check" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
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
                        <div className="wrap-box-card">
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-01.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-17.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-18.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-03.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-19.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-04.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-20.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-01.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-21.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-22.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-03.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-23.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-04.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-24.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-01.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-17.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-18.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-03.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-19.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-04.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-20.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-01.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-21.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-22.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-03.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-23.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-04.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-24.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                        </div>
                    </div>
                    <div className="widget-content-inner active">
                        <div className="wrap-box-card">
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-01.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-17.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-18.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-03.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-19.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-04.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-20.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-01.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-21.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-22.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-03.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-23.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-04.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-24.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-01.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-17.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-18.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-03.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-19.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-04.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-20.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-01.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-21.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-22.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-03.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-23.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-04.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-24.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                        </div>
                    </div>
                    <div className="widget-content-inner">
                        <div className="wrap-box-card">
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-01.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-17.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-18.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-03.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-19.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-04.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-20.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-01.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-21.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-22.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-03.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-23.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-04.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-24.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-01.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-17.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-18.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-03.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-19.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-04.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-20.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-01.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-21.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-22.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-03.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-23.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-04.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-24.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                        </div>
                    </div>
                    <div className="widget-content-inner">
                        <div className="wrap-box-card">
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-01.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-17.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-18.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-03.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-19.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-04.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-20.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-01.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-21.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-22.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-03.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-23.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-04.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-24.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-01.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-17.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-18.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-03.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-19.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-04.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-20.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-01.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-21.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-22.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-03.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-23.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                            <div className="col-item">
                                <div className="tf-card-box style-4">
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src="assets/images/avatar/avatar-box-04.jpg" alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6><a href="author-2.html">Marvin McKinney</a> </h6>
                                        </div>
                                    </div>
                                    <div className="card-media">
                                        <a href="#">
                                            <img src="assets/images/box-item/card-item-24.jpg" alt />
                                        </a>
                                        <span className="wishlist-button icon-heart" />
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">Dayco serpentine
                                        belt</a></h5>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}