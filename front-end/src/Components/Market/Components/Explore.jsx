import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../Auth/API";
import profilePic from "../../../assets/images/avatar/avatar-01.png";  // Assuming this might be used later

export default function Explore() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

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
        try {
            const url = categoryId === 'All' ? `${baseURL}/api/nfts/` : `${baseURL}/api/nfts/category/${categoryId}`;
            const response = await axios.get(url);
            setProducts(response.data);
        } catch (error) {
            console.error('Failed to fetch products', error);
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

    return (
        <>
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
                            {products.map(product => (
                                <div className="col-item" key={product._id}>
                                    <div className="tf-card-box style-4">
                                        <div className="card-media">
                                            <a href="#">
                                                <img src={product.imageUrl || 'path/to/default/image'} alt={product.name} />
                                            </a>
                                        </div>
                                        <div className="author flex items-center">
                                            <div className="avatar">
                                                <img src={profilePic} alt="Profile" />
                                            </div>
                                            <div className="info">
                                                <span>Created by:</span>
                                                <h6><a href="#">{product.author.name}</a></h6>
                                            </div>
                                        </div>
                                        <h5 className="name"><a href="#">{product.name}</a></h5>
                                        <div className="meta-info flex items-center justify-between">
                                            <h6 className="price">{product.price}</h6>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
