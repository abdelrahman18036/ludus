import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../../Auth/API";
import profilePic from "../../../assets/images/avatar/avatar-01.png";
import { ToastContainer, toast, Flip } from "react-toastify";
import { Cloudinary } from "@cloudinary/url-gen";
import { useNavigate } from 'react-router-dom';

export default function Setting() {
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const userId = localStorage.getItem("id");
    const userToken = localStorage.getItem("userToken");
    const [profileData, setProfileData] = useState({
        name: "",
        email: "",
        date: "",
        profilePicture: "",
    });

    const uploadPreset = "ht8wt3cy";

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`${baseURL}/api/users/${userId}`, {
                    headers: { "x-access-token": userToken },
                });
                if (response.data) {
                    setProfileData({
                        name: response.data.fullname || "",
                        email: response.data.email || "",
                        date: response.data.date || "",
                        profilePicture: response.data.profilePicture || profilePic,
                    });
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
                alert("Failed to fetch user data");
            }
        };

        fetchUserData();
    }, [userId, userToken]);

    const handleFileChange = async (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);

            // Prepare form data for Cloudinary upload
            const formData = new FormData();
            formData.append("file", selectedFile);
            formData.append("upload_preset", uploadPreset);

            try {
                // Upload to Cloudinary
                const cloudinaryResponse = await axios.post(
                    `https://api.cloudinary.com/v1_1/dv1gth8hq/image/upload`,
                    formData
                );

                // Update profile picture URL in the state
                setProfileData((prevData) => ({
                    ...prevData,
                    profilePicture: cloudinaryResponse.data.secure_url,
                }));

                toast("✔️ Image uploaded successfully", {
                    position: "top-right",
                    autoClose: 1100,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",
                    transition: Flip,
                });
            } catch (error) {
                console.error("Error uploading image:", error);
                toast("❌ Failed to upload image", {
                    position: "top-right",
                    autoClose: 1100,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",
                    transition: Flip,
                });
            }
        }
    };

    const handleInputChange = (e) => {
        setProfileData({ ...profileData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(
                `${baseURL}/api/users/${userId}`,
                profileData,
                {
                    headers: { "x-access-token": userToken },
                }
            );

            toast("👏 Data Was Updated Successfully", {
                position: "top-right",
                autoClose: 1100,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
                transition: Flip,
            });
            setTimeout(() => {
                navigate('/market');
                navigate(0);
            }, 2500);
        } catch (error) {
            console.error("Error updating profile:", error);
            toast("❌ Error Has Occurred", {
                position: "top-right",
                autoClose: 1100,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
                transition: Flip,
            });
            alert("Failed to update profile");
        }
    };

    return (
        <>
            <ToastContainer />
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
                            <img
                                className="mt-2"
                                style={{ height: "100px" }}
                                src={profileData.profilePicture}
                                alt="Profile Avatar"
                            />
                            <div>
                                <h6>Upload a new avatar</h6>
                                <label>
                                    <input type="file" onChange={handleFileChange} />
                                    <span className="text filename">
                                        {file ? file.name : "No file selected"}
                                    </span>
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
                                <input
                                    type="text"
                                    name="name"
                                    value={profileData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </fieldset>
                            <fieldset className="email">
                                <label>Email address*</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={profileData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </fieldset>
                            <fieldset className="address">
                                <label>Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={profileData.date}
                                    onChange={handleInputChange}
                                    required
                                />
                            </fieldset>
                        </div>
                        <div className="btn-submit">
                            <button type="button" className="w242 active mr-30">
                                Cancel
                            </button>
                            <button type="submit" className="w242">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
