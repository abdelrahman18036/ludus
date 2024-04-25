import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../Auth/API";
import { Navigate, useNavigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import profilePic from "../../../assets/images/avatar/avatar-01.png";
export default function MarketHeader() {
    const [userData, setUserData] = useState({ username: '', profilePicture: '' });
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isPopupOpen2, setIsPopupOpen2] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        const fetchUserData = async () => {
            const userId = localStorage.getItem('id');
            const userToken = localStorage.getItem('userToken');
            try {
                const response = await axios.get(`${baseURL}/api/users/${userId}`, {
                    headers: { 'x-access-token': userToken }
                });
                if (response.data) {
                    setUserData({
                        username: response.data.username,
                        profilePicture: response.data.profilePicture
                    });
                }
            } catch (error) {
                console.error('Failed to fetch user data:', error);
            }
        };

        fetchUserData();
    }, []);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };
    const togglePopupno = () => {
        setIsPopupOpen2(!isPopupOpen2);
    }
    const handleLogout = () => {
        localStorage.removeItem('userToken');
        localStorage.removeItem('id');
        navigate('/');
        navigate(0);


    };

    return (
        <>
            <div id="market-header">
                <div className="market-header flex items-center justify-between">
                    <div className="widget-search">
                        <form action="#" method="get" role="search" className="search-form relative">
                            <input type="search" id="search" className="search-field style-1" placeholder="Search artwork, collection..." name="s" title="Search for" required />
                            <button className="search search-submit" type="submit" title="Search">
                                <i className="icon-search" />
                            </button>
                        </form>
                    </div>
                    <div className="admin_active" id="header_admin">
                        <div className="popup-notification relative">
                            <div className="notification" onClick={togglePopupno}>
                                <svg width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 18.8476C17.6392 18.8476 20.2481 18.1242 20.5 15.2205C20.5 12.3188 18.6812 12.5054 18.6812 8.94511C18.6812 6.16414 16.0452 3 12 3C7.95477 3 5.31885 6.16414 5.31885 8.94511C5.31885 12.5054 3.5 12.3188 3.5 15.2205C3.75295 18.1352 6.36177 18.8476 12 18.8476Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14.3888 21.8574C13.0247 23.3721 10.8967 23.3901 9.51947 21.8574" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx={17} cy={5} r={4} fill="#865DFF" stroke="#1D1D1D" strokeWidth="1.5" />
                                </svg>
                            </div>
                            <div className={`avatar_popup ${isPopupOpen2 ? 'visible' : ''}`}  >
                                <h5 className="mb-30">Notification</h5>
                                <div className="widget-recently">
                                    <div className="card-small">
                                        <div className="author">
                                            <img src="assets/images/blog/sidebar-06.jpg" alt="alt" />
                                            <div className="info">
                                                <h6><a href="/">Propw</a></h6>
                                                <p><a href="/">@themes</a></p>
                                            </div>
                                        </div>
                                        <span className="date">Mon, 08 May </span>
                                    </div>
                                    <div className="card-small">
                                        <div className="author">
                                            <img src="assets/images/blog/sidebar-06.jpg" alt="alt" />
                                            <div className="info">
                                                <h6><a href="/">Propw</a></h6>
                                                <p><a href="/">@themes</a></p>
                                            </div>
                                        </div>
                                        <span className="date">Mon, 08 May </span>
                                    </div>
                                    <div className="card-small">
                                        <div className="author">
                                            <img src="assets/images/blog/sidebar-06.jpg" alt="alt" />
                                            <div className="info">
                                                <h6><a href="/">Propw</a></h6>
                                                <p><a href="/">@themes</a></p>
                                            </div>
                                        </div>
                                        <span className="date">Mon, 08 May </span>
                                    </div>
                                    <div className="card-small">
                                        <div className="author">
                                            <img src="assets/images/blog/sidebar-06.jpg" alt="alt" />
                                            <div className="info">
                                                <h6><a href="/">Propw</a></h6>
                                                <p><a href="/">@themes</a></p>
                                            </div>
                                        </div>
                                        <span className="date">Mon, 08 May </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="popup-user relative" onClick={togglePopup}>
                            <div className="user">
                                <img src={userData.profilePicture || profilePic} alt={userData.username} />
                                <span>{userData.username}<i className="icon-keyboard_arrow_down" /></span>
                            </div>
                            {isPopupOpen && (
                                <div className={`avatar_popup2 ${isPopupOpen ? 'visible' : ''}`}>
                                    <div className="links">
                                        <a className="block mb-30" href="/">
                                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.774902 18.333C0.774902 18.7932 1.14762 19.1664 1.60824 19.1664C2.06885 19.1664 2.44157 18.7932 2.44157 18.333C2.44157 15.3923 4.13448 12.7889 6.77329 11.5578C7.68653 12.1513 8.77296 12.4997 9.94076 12.4997C11.113 12.4997 12.2036 12.1489 13.119 11.5513C13.9067 11.9232 14.6368 12.4235 15.2443 13.0307C16.6611 14.4479 17.4416 16.3311 17.4416 18.333C17.4416 18.7932 17.8143 19.1664 18.2749 19.1664C18.7355 19.1664 19.1083 18.7932 19.1083 18.333C19.1083 15.8859 18.1545 13.5845 16.4227 11.8523C15.8432 11.2725 15.1698 10.7754 14.4472 10.3655C15.2757 9.3581 15.7741 8.06944 15.7741 6.66635C15.7741 3.44979 13.1569 0.833008 9.94076 0.833008C6.72461 0.833008 4.10742 3.44979 4.10742 6.66635C4.10742 8.06604 4.60379 9.35154 5.42863 10.3579C2.56796 11.9685 0.774902 14.9779 0.774902 18.333V18.333ZM9.94076 2.49968C12.2381 2.49968 14.1074 4.36898 14.1074 6.66635C14.1074 8.96371 12.2381 10.833 9.94076 10.833C7.6434 10.833 5.77409 8.96371 5.77409 6.66635C5.77409 4.36898 7.6434 2.49968 9.94076 2.49968V2.49968Z" fill="white" />
                                            </svg>                                            <span>My Profile</span>
                                        </a>
                                        <a className="block" onClick={handleLogout} href="/" id="logout">
                                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.9668 18.3057H2.49168C2.0332 18.3057 1.66113 17.9335 1.66113 17.4751V2.52492C1.66113 2.06644 2.03324 1.69437 2.49168 1.69437H9.9668C10.4261 1.69437 10.7973 1.32312 10.7973 0.863828C10.7973 0.404531 10.4261 0.0332031 9.9668 0.0332031H2.49168C1.11793 0.0332031 0 1.15117 0 2.52492V17.4751C0 18.8488 1.11793 19.9668 2.49168 19.9668H9.9668C10.4261 19.9668 10.7973 19.5955 10.7973 19.1362C10.7973 18.6769 10.4261 18.3057 9.9668 18.3057Z" fill="white" />
                                                <path d="M19.7525 9.40904L14.7027 4.42564C14.3771 4.10337 13.8505 4.10755 13.5282 4.43396C13.206 4.76036 13.2093 5.28611 13.5366 5.60837L17.1454 9.16982H7.47508C7.01578 9.16982 6.64453 9.54107 6.64453 10.0004C6.64453 10.4597 7.01578 10.8309 7.47508 10.8309H17.1454L13.5366 14.3924C13.2093 14.7147 13.2068 15.2404 13.5282 15.5668C13.691 15.7313 13.9053 15.8143 14.1196 15.8143C14.3306 15.8143 14.5415 15.7346 14.7027 15.5751L19.7525 10.5917C19.9103 10.4356 20 10.2229 20 10.0003C20 9.77783 19.9111 9.56603 19.7525 9.40904Z" fill="white" />
                                            </svg>                                            <span>Log out</span>
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn-canvas active">
                <div className="canvas">
                    <span></span>
                </div>
            </div>
        </>
    );
}
