import React, { useEffect, useState } from "react";
import axios from 'axios';
import { baseURL } from "../../Auth/API";
import profilePic from "../../../assets/images/avatar/avatar-01.png";
export default function Setting() {
    const [file, setFile] = useState(null);
    const userId = localStorage.getItem('id');
    const userToken = localStorage.getItem('userToken');
    const [profileData, setProfileData] = useState({
        name: "",
        email: "",
        date: "",
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`${baseURL}/api/users/${userId}`, {
                    headers: {
                        'x-access-token': userToken
                    }
                });
                if (response.data) {
                    setProfileData({
                        name: response.data.fullname || "",
                        email: response.data.email || "",
                        date: response.data.date || "",
                    });
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
                alert('Failed to fetch user data');
            }
        };

        fetchUserData();
    }, []);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleInputChange = (e) => {
        setProfileData({ ...profileData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("userImage", file);
        Object.keys(profileData).forEach(key => formData.append(key, profileData[key]));

        try {
            const response = await axios.put(`${baseURL}/api/users/${userId}`, formData, {
                headers: {
                    'x-access-token': userToken
                }
            });
            alert('Profile updated successfully!');
            console.log(response.data);
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Failed to update profile');
        }
    };

    return (
        <>
            <div style={{ position: "absolute" }}>
                <div className="heading-section">
                    <h2 className="tf-title pb-30">Setting</h2>
                </div>
                <div className="widget-edit mb-30 avatar">
                    <div className="title">
                        <h4>Edit your avatar</h4>
                        <i className="icon-keyboard_arrow_up"></i>
                    </div>
                    <form action="#">

                        <div className="uploadfile flex">
                            <img style={{height:"100px"}}src={profilePic} alt="" />

                            <div>
                                <h6>Upload a new avatar”</h6>
                                <label>
                                    <input type="file" onChange={handleFileChange} />
                                    <span className="text filename">{file ? file.name : "No file selected"}</span>
                                </label>
                                <p className="text">JPEG 100x100</p>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="widget-edit mb-30 profile" style={{ zIndex: 3 }}>
                    <div className="title">
                        <h4>Edit your profile</h4>
                    </div>
                    <form onSubmit={handleSubmit} className="comment-form">
                        <div className="flex gap30">
                            <fieldset className="name">
                                <label>Your name*</label>
                                <input type="text" name="name" value={profileData.name} onChange={handleInputChange} required />
                            </fieldset>
                            <fieldset className="email">
                                <label>Email address*</label>
                                <input type="email" name="email" value={profileData.email} onChange={handleInputChange} required />
                            </fieldset>
                            <fieldset className="address">
                                <label>Date</label>
                                <input type="date" name="date" value={profileData.date} onChange={handleInputChange} required />
                            </fieldset>
                        </div>
                        <div className="btn-submit">
                            <button type="button" className="w242 active mr-30">Cancel</button>
                            <button type="submit" className="w242">Save</button>
                        </div>
                    </form>
                </div>
            </div >
        </>
    );
}
