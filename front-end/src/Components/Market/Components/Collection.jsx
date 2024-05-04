import React, { useEffect, useState } from "react";
import { baseURL } from "../../Auth/API";
import axios from "axios";
import profilePic from "../../../assets/images/avatar/avatar-01.png";
import 'react-toastify/dist/ReactToastify.css';
import { queryClient } from "../../../App";
import { motion } from 'framer-motion';
import { Bounce, Flip, ToastContainer, toast } from "react-toastify";

export default function Collection() {
    const [activeBid, setActiveBid] = useState([]);
    const userId = localStorage.getItem('id');
    const userToken = localStorage.getItem('userToken');
    const fetchActiveBid = async () => {
        try {
            const response = await axios.get(`${baseURL}/api/nfts/author/${userId}?t=${new Date().getTime()}`, {
                headers: {
                    'x-access-token': userToken
                }
            });
            setActiveBid(response.data);
        } catch (error) {
            console.error(error);
        }
    }

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
    const handleRemoveBid = async (orderId) => {
        try {
            const response = await axios.delete(`${baseURL}/api/nfts/${orderId}`, {
                headers: {
                    'x-access-token': userToken
                }
            });
            if (response.status === 200) {

                const updatedBids = activeBid.filter(bid => bid._id !== orderId);
                setActiveBid(updatedBids);
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
            } else {
                toast.error('Failed to Remove Bid', {
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
            }
        } catch (error) {
            console.error(error);
            toast.error('Error Removing Bid', {
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
        }
    };

    queryClient.refetchQueries('latestNFTs');

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
                {activeBid.length === 0 ? (
                    <div className="collection-text">
                        <p>Your Collection Is Empty. You Can Make Some In The Create Tab ^_^</p>
                    </div>
                ) : (
                    <div className="widget-content-tab">
                        <div className="widget-content-inner">
                            <div className="wrap-box-card">
                                <motion.div
                                    className="row w-100"
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    {activeBid.map(activeBids => (
                                        <motion.div className="col-item" key={activeBids._id} variants={itemVariants}>
                                            <div className="tf-card-box style-1">
                                                <div className="card-media">
                                                    <img src={`http://localhost:5000/${activeBids.imageUrl}`} alt="alt" />
                                                    <span className="wishlist-button icon-heart" />
                                                    <div className="button-place-bid">
                                                        <button className="tf-button" onClick={() => handleRemoveBid(activeBids._id)}>
                                                            <span>Remove Bid</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <h5 className="name">
                                                    <a href={`nft-detail/${activeBids._id}`}>{activeBids.name}</a>
                                                </h5>
                                                <div className="author flex items-center">
                                                    <div className="avatar">
                                                        <img src={activeBids.author.profilePicture ? `http://localhost:5000/${activeBids.author.profilePicture}` : profilePic} alt="Image" />
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
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );

}