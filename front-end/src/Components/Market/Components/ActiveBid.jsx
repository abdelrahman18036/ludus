import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../../Auth/API";
import { fetchUserData } from "../../Utils/UserUtils";
import profilePic from "../../../assets/images/avatar/avatar-01.png";
import { ToastContainer, toast } from "react-toastify";
import Skeleton from 'react-loading-skeleton';
import { Flip } from 'react-toastify';

export default function ActiveBid() {
    const [activeBids, setActiveBids] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState({ username: '', profilePicture: '' });
    const userToken = localStorage.getItem('userToken');

    const fetchActiveBids = async (userId) => {
        try {
            const response = await axios.get(`${baseURL}/api/orders/${userId}`, {
                headers: {
                    'x-access-token': userToken
                }
            });
            setActiveBids(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching active bids:', error);
            setLoading(false);
        }
    };

    const handleRemoveBid = async (orderId) => {
        try {
            await axios.delete(`${baseURL}/api/orders/${orderId}`, {
                headers: { 'x-access-token': userToken }
            });
            toast('👏 Bid Removed Successfully', {
                position: "top-right",
                autoClose: 1100,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Flip,
            });
            const userId = localStorage.getItem('id');
            fetchActiveBids(userId);
        } catch (error) {
            console.error('Error removing bid:', error);
        }
    };

    const checkUserProfilePic = () => {
        return userData.profilePicture ? `${userData.profilePicture}` : profilePic;
    };

    // Fetch user data and active bids when component mounts
    useEffect(() => {
        const initializeComponent = async () => {
            const userId = localStorage.getItem('id');
            const fetchedUserData = await fetchUserData();
            setUserData(fetchedUserData);
            fetchActiveBids(userId);
        };
        initializeComponent();
    }, []);

    return (
        <>
            <ToastContainer />
            <div className="heading-section">
                <h2 className="tf-title pb-30">My Active Bids</h2>
            </div>
            <div className="widget-tabs relative">
                <div className="widget-content-tab">
                    <div className="widget-content-inner">
                        <div className="wrap-box-card">
                            {loading ? (
                                <div className='flex justify-center items-center gap30 m-5'>
                                    {Array.from({ length: 3 }).map((_, index) => (
                                        <div key={index} className='flex flex-column gap15'>
                                            <Skeleton className='rounded' highlightColor={"#333"} baseColor={"grey"} width={250} height={300} />
                                            <Skeleton className='rounded ml-2' highlightColor={"#333"} baseColor={"grey"} width={200} />
                                            <Skeleton className='rounded ml-2' highlightColor={"#333"} baseColor={"grey"} width={100} />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                activeBids.map(activeBid => (
                                    <div className="col-item" key={activeBid.products[0]._id}>
                                        <div className="tf-card-box style-1">
                                            <div className="card-media">
                                                <img src={`${activeBid.products[0].imageUrl}`} alt="Bid" />
                                                <span className="wishlist-button icon-heart" />
                                                <div className="button-place-bid">
                                                    <button onClick={() => handleRemoveBid(activeBid._id)} className="tf-button">
                                                        <span>Remove Bid</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <h5 className="name"><a href="nft-detail-2.html">{activeBid.products[0].name}</a></h5>
                                            <div className="author flex items-center">
                                                <div className="avatar">
                                                    <img src={checkUserProfilePic()} alt="Profile" />
                                                </div>
                                                <div className="info">
                                                    <span>Created by:</span>
                                                    <h6>{activeBid.user.username}</h6>
                                                </div>
                                            </div>
                                            <div className="divider" />
                                            <div className="meta-info flex items-center justify-between">
                                                <span className="text-bid">Bid Value</span>
                                                <h6 className="price gem"><i className="icon-gem" /> {activeBid.products[0].price}</h6>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
