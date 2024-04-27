import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../../../Auth/API';

function NFTDetails() {
    let { id } = useParams();
    const [nft, setNft] = useState(null);

    useEffect(() => {
        const fetchNFT = async () => {
            try {
                const response = await axios.get(`${baseURL}/api/nfts/${id}`);
                setNft(response.data);
            } catch (error) {
                console.error('Failed to fetch NFT details:', error);
            }
        };

        fetchNFT();
    }, [id]);
    const convertBTCtoUSD = (btcAmount) => {
        const btcToUsdRate = 63187.90;
        return (btcAmount * btcToUsdRate);
    };
    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = {
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        };
        return date.toLocaleString('en-US', options);
    }


    return (
        <div id="wrapper">
            <div id="page" className="pt-40">
                <div className="tf-section-2 product-detail">
                    <div className="themesflat-container">
                        <div className="row flex justify-ceter ml-2">
                            <div className="col-md-12">
                                <div data-wow-delay="0s" className="wow fadeInRight infor-product">
                                    <div className="text">8SIAN Main Collection <span className="icon-tick"><span className="path1" /><span className="path2" /></span></div>

                                    <h2>Themesflat #0270</h2>


                                    <div className='flex justify-between items-center col-md-12 bg-'>
                                        <div className="author flex items-center mb-30">
                                            <div className="avatar">
                                                <img src={`http://localhost:5000/${nft?.author.profilePicture}`} alt="Image" />
                                            </div>
                                            <div className="info">
                                                <span>Owned by:</span>
                                                <h6><a href="author-1.html">{nft?.author.username}</a> </h6>
                                            </div>
                                        </div>
                                        <div className="meta mb-20">
                                            <div className="meta-item view">
                                                <i className="icon-show" />208 view
                                            </div>
                                            <div className="meta-item rating">
                                                <i className="icon-link-2" />Top #2 trending
                                            </div>
                                            <div className="meta-item favorites">
                                                <i className="icon-heart" />10 favorites
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div data-wow-delay="0s" className="   col-md-6">
                                <div className="tf-card-box style-5 m-0">
                                    <div className="card-media mb-0">
                                        <a href="#">
                                            <img src={`http://localhost:5000/${nft?.imageUrl}`} alt="alt" />
                                        </a>
                                    </div>
                                    <h6 className="price gem"><i className="icon-gem" /></h6>
                                    <div className="wishlist-button">10<i className="icon-heart" /></div>
                                    <div className="featured-countdown">
                                        <span className="js-countdown" data-timer={7500} data-labels="d,h,m,s" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">

                                <div data-wow-delay="0s" className="wow fadeInRight product-item time-sales">
                                    <h6><i className="icon-clock" />Created At {formatDate(nft?.createdAt)} (GMT + 3)</h6>
                                    <div className="content">
                                        <div className="text">Current price</div>
                                        <div className="flex justify-between">
                                            <p>{nft?.price} <span className='ml-3'>{convertBTCtoUSD(nft?.price)}$</span></p>
                                            <a href="#" data-toggle="modal" data-target="#popup_bid" className="tf-button style-1 h50 w216">Place a bid<i className="icon-arrow-up-right2" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0s" className="wow fadeInRight product-item description">
                                    <h6><i className="icon-description" />Description</h6>
                                    <i className="icon-keyboard_arrow_down" />
                                    <div className="content">
                                        <p>
                                            {nft?.description}

                                        </p>
                                    </div>
                                </div>
                                <div data-wow-delay="0s" className="wow fadeInRight product-item history">
                                    <h6><i className="icon-description" />about</h6>
                                    <div className="contents">
                                        <p>
                                            {nft?.about}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div data-wow-delay="0s" className="wow fadeInUp col-12">
                            <div className="product-item traits style-1">
                                <h6><i className="icon-description" />Traits</h6>
                                <i className="icon-keyboard_arrow_down" />
                                <div className="content">
                                    <div className="trait-item">
                                        <p>Apparel</p>
                                        <div className="title">Bathrobe Red 1%</div>
                                        <p>Floor: 0,056 ETH</p>
                                    </div>
                                    <div className="trait-item">
                                        <p>Background</p>
                                        <div className="title">Orange 5%</div>
                                        <p>Floor: 0,056 ETH</p>
                                    </div>
                                    <div className="trait-item">
                                        <p>Earrings</p>
                                        <div className="title">None 60%</div>
                                        <p>Floor: 0,037 ETH</p>
                                    </div>
                                    <div className="trait-item">
                                        <p>Apparel</p>
                                        <div className="title">Bathrobe Red 1%</div>
                                        <p>Floor: 0,056 ETH</p>
                                    </div>
                                    <div className="trait-item">
                                        <p>Background</p>
                                        <div className="title">Orange 5%</div>
                                        <p>Floor: 0,056 ETH</p>
                                    </div>
                                    <div className="trait-item">
                                        <p>Earrings</p>
                                        <div className="title">None 60%</div>
                                        <p>Floor: 0,037 ETH</p>
                                    </div>
                                    <div className="trait-item">
                                        <p>Apparel</p>
                                        <div className="title">Bathrobe Red 1%</div>
                                        <p>Floor: 0,056 ETH</p>
                                    </div>
                                    <div className="trait-item">
                                        <p>Background</p>
                                        <div className="title">Orange 5%</div>
                                        <p>Floor: 0,056 ETH</p>
                                    </div>
                                    <div className="trait-item">
                                        <p>Earrings</p>
                                        <div className="title">None 60%</div>
                                        <p>Floor: 0,037 ETH</p>
                                    </div>
                                    <div className="trait-item">
                                        <p>Earrings</p>
                                        <div className="title">None 60%</div>
                                        <p>Floor: 0,037 ETH</p>
                                    </div>
                                    <div className="trait-item">
                                        <p>Apparel</p>
                                        <div className="title">Bathrobe Red 1%</div>
                                        <p>Floor: 0,056 ETH</p>
                                    </div>
                                    <div className="trait-item">
                                        <p>Background</p>
                                        <div className="title">Orange 5%</div>
                                        <p>Floor: 0,056 ETH</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div data-wow-delay="0s" className="wow fadeInUp col-12">
                    <div className="product-item item-activity mb-0">
                    <h6><i className="icon-two-arrow rotateZ90" />Item activity</h6>
                    <i className="icon-keyboard_arrow_down" />
                    <div className="content">
                        <div className="table-heading">
                        <div className="column">Event</div>
                        <div className="column">Price</div>
                        <div className="column">Form</div>
                        <div className="column">To</div>
                        <div className="column">Date</div>
                        </div>
                        <div className="table-item">
                        <div className="column flex items-center"><i className="icon-two-arrow" />Transfer</div>
                        <div className="column">-/-</div>
                        <div className="column"><span className="tf-color">985DE3</span></div>
                        <div className="column"><span className="tf-color">Nosyu</span></div>
                        <div className="column">19h ago</div>
                        </div>
                        <div className="table-item">
                        <div className="column flex items-center"><i className="icon-sale" />Sale</div>
                        <div className="column"><h6 className="price gem"><i className="icon-gem" />0,0319</h6></div>
                        <div className="column"><span className="tf-color">985DE3</span></div>
                        <div className="column"><span className="tf-color">Nosyu</span></div>
                        <div className="column">19h ago</div>
                        </div>
                        <div className="table-item">
                        <div className="column flex items-center"><i className="icon-two-arrow" />Transfer</div>
                        <div className="column">-/-</div>
                        <div className="column"><span className="tf-color">985DE3</span></div>
                        <div className="column"><span className="tf-color">Nosyu</span></div>
                        <div className="column">19h ago</div>
                        </div>
                        <div className="table-item">
                        <div className="column flex items-center"><i className="icon-sale" />Sale</div>
                        <div className="column"><h6 className="price gem"><i className="icon-gem" />0,0319</h6></div>
                        <div className="column"><span className="tf-color">985DE3</span></div>
                        <div className="column"><span className="tf-color">Nosyu</span></div>
                        <div className="column">19h ago</div>
                        </div>
                    </div>
                    </div>
                </div> */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NFTDetails