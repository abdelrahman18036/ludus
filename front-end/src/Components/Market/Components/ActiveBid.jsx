import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from "react";
import { baseURL } from "../../Auth/API";
import axios from "axios";
import profilePic from "../../../assets/images/avatar/avatar-01.png";
import { Bounce, Flip, ToastContainer, toast } from "react-toastify";
import Skeleton from 'react-loading-skeleton'; // Ensure Skeleton is imported
import { Link } from "react-router-dom";

export default function ActiveBid() {
    const [activeBid, setActiveBid] = useState([]);
    const [loading, setLoading] = useState(true); // State to track loading
    const userId = localStorage.getItem('id');
    const userToken = localStorage.getItem('userToken');

    const fetchActiveBid = async () => {
        try {
            const response = await axios.get(`${baseURL}/api/orders/${userId}`, {
                headers: {
                    'x-access-token': userToken
                }
            });
            setActiveBid(response.data);
            setLoading(false); // Set loading to false once data is fetched
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }

    const handleRemoveBid = async (orderId) => {
        try {
            await axios.delete(`${baseURL}/api/orders/${orderId}`, {
                headers: {
                    'x-access-token': userToken
                }
            });
            fetchActiveBid();
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
                <h2 className="tf-title pb-30">My Active Bid</h2>
            </div>
            <div className="widget-tabs relative">
                <div className="widget-content-tab">
                    <div className="widget-content-inner">
                        <div className="wrap-box-card">
                            {loading ? (
                                <div className='flex justify-center items-center gap30 m-5'>
                                    {Array.from({ length: 3 }).map((_, index) => (
                                        <div key={index} className='flex flex-column gap15'>
                                             <Skeleton  className='rounded'  highlightColor={"#333"} baseColor={"grey"} width={250} height={300} />
                                                <Skeleton  className='rounded ml-2'  highlightColor={"#333"} baseColor={"grey"} width={200}  />
                                                <Skeleton  className='rounded ml-2'  highlightColor={"#333"} baseColor={"grey"} width={100} />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                activeBid.map(activeBids => (
                                    <div className="col-item" key={activeBids.products[0]._id}>
                                        <div className="tf-card-box style-1">
                                            <div className="card-media">
                                                <img src={`http://localhost:5000/${activeBids.products[0].imageUrl}`} alt="alt" />
                                                <span className="wishlist-button icon-heart" />
                                                <div className="button-place-bid">
                                                    <button onClick={() => handleRemoveBid(activeBids._id)} className="tf-button">
                                                        <span>Remove Bid</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <h5 className="name"><a href="nft-detail-2.html">{activeBids.products[0].name}</a></h5>
                                            <div className="author flex items-center">
                                                <div className="avatar">
                                                    <img src={activeBids.user.profilePicture || profilePic} alt="Image" />
                                                </div>
                                                <div className="info">
                                                    <span>Created by:</span>
                                                    <h6>{activeBids.user.username}</h6>
                                                </div>
                                            </div>
                                            <div className="divider" />
                                            <div className="meta-info flex items-center justify-between">
                                                <span className="text-bid">Bid Value</span>
                                                <h6 className="price gem"><i className="icon-gem" /> {activeBids.products[0].price}</h6>
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
