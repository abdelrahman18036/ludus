import React, { useState } from 'react';
import axios from 'axios';
import { baseURL } from '../../../Auth/API';
import uploadImage from '../../../../assets/images/upload.png';
import { Cloudinary } from "@cloudinary/url-gen";
import { toast, ToastContainer, Flip } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const cloudinaryPreset = "ht8wt3cy";

export default function Create() {
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [filePreview, setFilePreview] = useState(null);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [about, setAbout] = useState('');

    const cld = new Cloudinary({ cloud: { cloudName: 'dv1gth8hq' } });

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const validTypes = ['image/png', 'image/jpeg', 'image/gif', 'image/webp'];
            if (!validTypes.includes(selectedFile.type)) {
                alert('Invalid file type. Only PNG, JPEG, GIF, and WEBP files are allowed.');
                e.target.value = null;
                return;
            }
            setFile(selectedFile);
            setFilePreview(URL.createObjectURL(selectedFile)); // Set preview URL
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            toast('Please upload a valid image', {
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
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', cloudinaryPreset);

        try {
            const cloudinaryResponse = await axios.post(
                `https://api.cloudinary.com/v1_1/dv1gth8hq/image/upload`,
                formData
            );

            const imageUrl = cloudinaryResponse.data.secure_url;

            const backendFormData = {
                name,
                description,
                price,
                category,
                about,
                productImage: imageUrl
            };

            const response = await axios.post(`${baseURL}/api/nfts/`, backendFormData, {
                headers: {
                    'x-access-token': localStorage.getItem('userToken')
                }
            });

            toast('✅ NFT created successfully', {
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

            setTimeout(() => {
                navigate('/market');
            }, 2500);

        } catch (error) {
            console.error('Error uploading product:', error);
            toast('👏 Failed To Create NFT', {
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
    return (
        <div className='bg-main' style={{ backgroundColor: "#111" }}>
            <ToastContainer />
            <div id="page" className="market-page mark" style={{ paddingLeft: "40px" }}>
                <div className="heading-section">
                    <a href="/market" className="pb-30">Back To Market</a>
                </div>
                <div className="flat-tabs">
                    <div id="create" className="tabcontent">
                        <div className="wrapper-content-create">
                            <div className="heading-section null">
                                <h2 className="tf-title pb-30">Create New File</h2>
                            </div>
                            <div className="widget-tabs relative">
                                <ul className="widget-menu-tab">
                                    <li className="item-title active">
                                        <span className="inner"><span className="order">i</span> Upload your image <i className="icon-keyboard_arrow_right" /></span>
                                    </li>
                                </ul>
                                <div className="widget-content-tab">
                                    <div className="widget-content-inner upload active">
                                        <div className="wrap-upload w-full">
                                            <form onSubmit={handleSubmit}>
                                                <label className="uploadfile">
                                                    {filePreview ? (
                                                        <img src={filePreview} alt="Preview" className="preview-image" />
                                                    ) : (
                                                        <img src={uploadImage} alt="Upload" />
                                                    )}
                                                    <h5>Upload file</h5>
                                                    <p className="text">Drag or choose your file to upload</p>
                                                    <div className="text filename">PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.</div>
                                                    <input type="file" onChange={handleFileChange} name="file" required />
                                                </label>
                                                <div className="wrap-content w-full">
                                                    <fieldset className="name mt-5">
                                                        <label>Product name *</label>
                                                        <input type="text" placeholder="Product name" onChange={e => setName(e.target.value)} required />
                                                    </fieldset>
                                                    <fieldset className="message">
                                                        <label>Description *</label>
                                                        <textarea rows={4} placeholder="Please describe your product*" onChange={e => setDescription(e.target.value)} required />
                                                    </fieldset>
                                                    <fieldset className="message">
                                                        <label>About</label>
                                                        <textarea rows={4} placeholder="Please describe your product" onChange={e => setAbout(e.target.value)} />
                                                    </fieldset>
                                                    <fieldset className="price">
                                                        <label>Price</label>
                                                        <input type="number" placeholder="Price" onChange={e => setPrice(e.target.value)} required />
                                                    </fieldset>
                                                    <fieldset className="collection">
                                                        <label>Category</label>
                                                        <input type="text" placeholder="Category" onChange={e => setCategory(e.target.value)} required />
                                                    </fieldset>
                                                    <div className="btn-submit flex gap30 justify-center">
                                                        <button className="tf-button style-1 h50 w320" type="submit">Submit item<i className="icon-arrow-up-right2" /></button>
                                                    </div>
                                                </div>
                                            </form>
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
