import React, { useEffect, useState } from "react";
import { baseURL } from "../../Auth/API";
import axios from "axios";
import profilePic from "../../../assets/images/avatar/avatar-01.png";
import { Bounce, Flip, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import ActiveBid from "./ActiveBid";

export default function Collection() {
    const [activeBid, setActiveBid] = useState([]);
    const userId = localStorage.getItem('id');
    const userToken = localStorage.getItem('userToken');
    const fetchActiveBid = async () => {
        try {
            const response = await axios.get(`${baseURL}/api/nfts/author/${userId}`, {
                headers: {
                    'x-access-token': userToken
                }
            });
            setActiveBid(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleRemoveBid = async (orderId) => {
        try {
            await axios.delete(`${baseURL}/api/nfts/${orderId}`, {
                headers: {
                    'x-access-token': userToken
                }
            });
            fetchActiveBid();
            toast('👏 Bid Removed Successfully  ', {
                position: "top-right",
                autoClose: 1100,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Flip,
              })
        } catch (error) {
            console.error(error);
        }
    }



    useEffect(() => {
        fetchActiveBid();
    }, []);
    return (
        <>
        <ToastContainer />
            <div className="heading-section">
                <h2 className="tf-title pb-30">My Added Collection</h2>
            </div>
            <div className="widget-tabs relative">
                {
                    !ActiveBid ==="No products found for this author." ? (
                        
                <div className="widget-content-tab">
                <div className="widget-content-inner">
                    <div className="wrap-box-card">
                        {activeBid.map(activeBids => (

                            <div className="col-item">
                                <div className="tf-card-box style-1" key={activeBids._id}>
                                    <div className="card-media">
                                        <img src={`${activeBids.imageUrl}`} alt="alt" />
                                        <span className="wishlist-button icon-heart" />
                                        {/* <div className="featured-countdown">
                                            <span className="js-countdown" data-timer={7500} data-labels="d,h,m,s">
                                                <div aria-hidden="true" className="countdown__timer">
                                                    <span className="countdown__item" style={{ display: 'none' }}><span className="countdown__value countdown__value--0 js-countdown__value--0">0</span><span className="countdown__label">d</span></span><span className="countdown__item"><span className="countdown__value countdown__value--1 js-countdown__value--1">02</span><span className="countdown__label">h</span></span><span className="countdown__item"><span className="countdown__value countdown__value--2 js-countdown__value--2">04</span><span className="countdown__label">m</span></span><span className="countdown__item"><span className="countdown__value countdown__value--3 js-countdown__value--3">55</span><span className="countdown__label">s</span></span>
                                                </div>
                                            </span>
                                        </div> */}
                                        <div className="button-place-bid">
                                            <button data-toggle="modal" data-target="#popup_bid" className="tf-button" onClick={() => handleRemoveBid(activeBids._id)}><span>Remove Bid</span></button>
                                        </div>
                                    </div>
                                    <h5 className="name"><a href="nft-detail-2.html">{activeBids.name}</a></h5>
                                    <div className="author flex items-center">
                                        <div className="avatar">
                                            <img src={`http://localhost:5000/${activeBids.author.profilePicture}` || profilePic} alt="Image" />
                                        </div>
                                        <div className="info">
                                            <span>Created by:</span>
                                            <h6>{activeBids.author.username}</h6>
                                        </div>
                                    </div>
                                    <div className="divider" />
                                    <div className="meta-info flex items-center justify-between">
                                        <span className="text-bid">Bid Value</span>
                                        <h6 className="price gem"><i className="icon-gem" /> {activeBids.price}</h6>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
                    ) 
                    :
                    <div className="collection-text">
                        <p >Your Collection Is Empty You Can Add More In MarketPlace ^_^ </p>
                    </div>
                }
            </div >

        </>
    );
}