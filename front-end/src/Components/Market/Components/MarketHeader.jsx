import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../Auth/API";
import { Link, useNavigate } from "react-router-dom";
import profilePic from "../../../assets/images/avatar/avatar-01.png";
import { useQuery } from "react-query";

export default function MarketHeader() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({ username: '', profilePicture: '' });
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isPopupOpen2, setIsPopupOpen2] = useState(false);

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
                    profilePicture: response.data.profilePicture || ''
                });
            }
        } catch (error) {
            console.error('Failed to fetch user data:', error);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchHistory = async () => {
        const userToken = localStorage.getItem('userToken');
        const response = await axios.get(`${baseURL}/api/orders/`, {
            headers: { 'x-access-token': userToken }
        });
        return response.data;
    };

    const { data: history, isError, isLoading, error } = useQuery(['history'], fetchHistory);

    function CheckUserProfilePic() {
        return userData.profilePicture ? `http://localhost:5000/${userData.profilePicture}` : profilePic;
    }

    function CheckOrderProfilePic(order) {
        return order?.user?.profilePicture ? `http://localhost:5000/${order.user.profilePicture}` : profilePic;
    }

    const extractTime = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
    };

    const togglePopup = () => setIsPopupOpen(!isPopupOpen);
    const togglePopupno = () => setIsPopupOpen2(!isPopupOpen2);

    const handleLogout = () => {
        localStorage.removeItem('userToken');
        localStorage.removeItem('id');
        navigate('/');
        navigate(0);
    };

    return (
        <div id="market-header">
            <div className="market-header flex items-center justify-between">
                <div className="widget-search"></div>
                <div className="admin_active" id="header_admin">
                    <div className="popup-notification relative">
                        <div className="notification" onClick={togglePopupno}>
                            <svg width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 18.8476C17.6392 18.8476 20.2481 18.1242 20.5 15.2205C20.5 12.3188 18.6812 12.5054 18.6812 8.94511C18.6812 6.16414 16.0452 3 12 3C7.95477 3 5.31885 6.16414 5.31885 8.94511C5.31885 12.5054 3.5 12.3188 3.5 15.2205C3.75295 18.1352 6.36177 18.8476 12 18.8476Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14.3888 21.8574C13.0247 23.3721 10.8967 23.3901 9.51947 21.8574" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx={17} cy={5} r={4} fill="#865DFF" stroke="#1D1D1D" strokeWidth="1.5" />
                            </svg>
                        </div>
                        {isPopupOpen2 && (
                            <div className={`avatar_popup visible`}>
                                <h5 className="mb-30">Recently Bought</h5>
                                <div className="widget-recently">
                                    {history && history.map((order, index) => (
                                        <div className="card-small items-start justify-center" key={index}>
                                            <div className="author authos flex items-start">
                                                <img src={CheckOrderProfilePic(order)} alt="alt" />
                                                <div className="info flex flex-column justify-center">
                                                    <h6 className="m-0">@{order.user.fullname}</h6>
                                                    <p className="mt-0">Price: {order.products[0].price} <i className="icon-gem"></i></p>
                                                </div>
                                            </div>
                                            <span className="date">{extractTime(order.createdAt)}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="popup-user relative" onClick={togglePopup}>
                        <div className="user">
                            <img src={CheckUserProfilePic()} alt={userData.username} />
                            <span>{userData.username}<i className="icon-keyboard_arrow_down" /></span>
                        </div>
                        {isPopupOpen && (
                            <div className={`avatar_popup2 visible`}>
                                <div className="links">
                                    <a className="block flex items-center gap15" onClick={handleLogout} href="/" id="logout">
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.9668 18.3057H2.49168C2.0332 18.3057 1.66113 17.9335 1.66113 17.4751V2.52492C1.66113 2.06644 2.03324 1.69437 2.49168 1.69437H9.9668C10.4261 1.69437 10.7973 1.32312 10.7973 0.863828C10.7973 0.404531 10.4261 0.0332031 9.9668 0.0332031H2.49168C1.11793 0.0332031 0 1.15117 0 2.52492V17.4751C0 18.8488 1.11793 19.9668 2.49168 19.9668H9.9668C10.4261 19.9668 10.7973 19.5955 10.7973 19.1362C10.7973 18.6769 10.4261 18.3057 9.9668 18.3057Z" fill="#865DFF" />
                                            <path d="M19.7525 9.40904L14.7027 4.42564C14.3771 4.10337 13.8505 4.10755 13.5282 4.43396C13.206 4.76036 13.2093 5.28611 13.5366 5.60837L17.1454 9.16982H7.47508C7.01578 9.16982 6.64453 9.54107 6.64453 10.0004C6.64453 10.4597 7.01578 10.8309 7.47508 10.8309H17.1454L13.5366 14.3924C13.2093 14.7147 13.2068 15.2404 13.5282 15.5668C13.691 15.7313 13.9053 15.8143 14.1196 15.8143C14.3306 15.8143 14.5415 15.7346 14.7027 15.5751L19.7525 10.5917C19.9103 10.4356 20 10.2229 20 10.0003C20 9.77783 19.9111 9.56603 19.7525 9.40904Z" fill="#865DFF" />
                                        </svg>
                                        <span>Log out</span>
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
