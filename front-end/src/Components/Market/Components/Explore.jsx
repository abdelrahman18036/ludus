import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../Auth/API";
import profilePic from "../../../assets/images/avatar/avatar-01.png";  // Assuming this might be used later
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, Flip, ToastContainer, toast } from "react-toastify";
import Loading from "../../Loading/Loading";

export default function Explore() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [loading , setLoading] = useState(false);
    const [cardsLoading, setCardsLoading] = useState(true);
    useEffect(() => {
        fetchCategories();
        fetchProducts(activeCategory);
    }, [activeCategory]);

    const fetchCategories = async () => {
        try {
            const response = await axios.get(`${baseURL}/api/categories/`);
            setCategories(response.data);
        } catch (error) {
            console.error('Failed to fetch categories', error);
        }
    };

    const fetchProducts = async (categoryId) => {
        setCardsLoading(true);
        try {
            const url = categoryId === 'All' ? `${baseURL}/api/nfts/` : `${baseURL}/api/nfts/category/${categoryId}`;
            const response = await axios.get(url);
            setProducts(response.data);
            setCardsLoading(false);
        } catch (error) {
            console.error('Failed to fetch products', error);
            setCardsLoading(false);
        }
    };

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`${baseURL}/api/nfts/search`, { params: { name: searchQuery } });
            setProducts(response.data);
        } catch (error) {
            console.error('Failed to search products', error);
        }
    };
    const placeBid = async (nftId) => {
        setLoading(true);
        try {
            const response = await axios.post(`${baseURL}/api/orders`, {
                productIds: nftId,
            }, {
                headers: {
                    'x-access-token': localStorage.getItem('userToken')
                }
            });
            setLoading(false);
           
            toast.success('🦄 NFT Added Successfully ', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Flip,
                });

            fetchProducts("All")
        } catch (error) {
            console.error('Failed to place bid:', error);
            setLoading(false);
        }
    };

    return (
        <>
            <ToastContainer />

            <div className="heading-section">
                <h2 className="tf-title pb-30">Explore Product</h2>
            </div>
            <div className="widget-tabs relative">
                <ul className="widget-menu-tab">
                    <li className={`item-title ${activeCategory === 'All' ? 'active' : ''}`} onClick={() => setActiveCategory('All')}>
                        <span className="inner">All</span>
                    </li>
                    {categories.map(category => (
                        <li key={category._id} className={`item-title ${activeCategory === category.name ? 'active' : ''}`} onClick={() => setActiveCategory(category._id)}>
                            <span className="inner">{category.name}</span>
                        </li>
                    ))}
                </ul>
                <div className="widget-search">
                    <form action="#" method="get" role="search" className="search-form relative" onSubmit={handleSearch}>
                        <input type="search" className="search-field style-1" placeholder="Search artwork, collection..." name="s" required
                            value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                        <button className="search search-submit" type="submit" title="Search">
                            <i className="icon-search" />
                        </button>
                    </form>
                </div>
                <br /><br />
                <div className="widget-content-tab">
                    <div className="widget-content-inner">
                        <div className="wrap-box-card">
                            {
                                
                                !cardsLoading ? products.map(product => (
                                    <div className="col-item" key={product._id}>
                                        <Link to={`/nft/${product._id}`}>
                                            <div className="tf-card-box style-4">
                                                <div className="card-media">
                                                    <img src={`http://localhost:5000/${product.imageUrl}`} alt={product.name} />
                                                </div>
                                                <div className="author flex items-center">
                                                    <div className="avatar">
                                                        <img src={`http://localhost:5000/${product.author.profilePicture}`} alt="Profile" />
                                                    </div>
                                                    <div className="info">
                                                        <span>Created by:</span>
                                                        <h6>{product.author.username}</h6>
                                                    </div>
                                                </div>
                                                <h5 className="name"><a href="nft-detail-2.html">{product.name}</a></h5>
                                                <div className="meta-info flex items-center justify-between">
                                                    <div>
                                                        <span className="text-bid">Current Bid</span>
                                                        <h6 className="price gem"><i className="icon-gem" />{product.price}</h6>
                                                    </div>
                                                {
                                                    loading ? <Loading />   : (                                                <div className="button-place-bid">
                                                    <button
                                                        data-toggle="modal"
                                                        data-target="#popup_bid"
                                                        className="tf-button"
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            placeBid(product._id);
                                                        }}>
                                                        <span>Place Bid</span>
                                                    </button>
                                                </div>)
                                                }
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )) : (
                                    <div className="container">

                                    <div className="row">
                                        {Array.from({ length: 4 }).map((_, index) => (
                                            <div className="col-md-3 my-5  flex justify-center">
                                                <div className="col-item" >
                                                    <Loading />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    </div>

                                ) 
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
