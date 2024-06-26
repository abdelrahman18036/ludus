import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { baseURL } from '../Auth/API';
import Coin1 from '../../assets/images/box-icon/coin-01.png';
import Coin2 from '../../assets/images/box-icon/coin-02.png';
import Coin3 from '../../assets/images/box-icon/coin-03.png';
import Coin4 from '../../assets/images/box-icon/coin-04.png';
import Coin5 from '../../assets/images/box-icon/coin-05.png';
import profilePic from '../../assets/images/avatar/avatar-01.png';
import Skeleton from 'react-loading-skeleton';

const fetchTopAuthors = async () => {
    const response = await axios.get(`${baseURL}/api/nfts/topauthors`);
    return response.data;
};

const fetchLatestNFTs = async () => {
    const response = await axios.get(`${baseURL}/api/nfts/latest`);
    return response.data.slice(0, 5);
};

const fetchHistory = async (userToken) => {
    const response = await axios.get(`${baseURL}/api/orders/`, {
        headers: { 'x-access-token': userToken }

    });
    console.log(response.data);
    return response.data;
};

function CheckUserProfilePic(orderHistory) {
    if (orderHistory?.user.profilePicture === "") {
        return profilePic;
    } else {
        return `${orderHistory?.user.profilePicture}`;
    }
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



export default function Sliderbar() {
    const userToken = localStorage.getItem('userToken');

    const { data: topAuthors, isLoading: isLoadingAuthors, isError: isErrorAuthors } = useQuery('topAuthors', fetchTopAuthors);
    const { data: latestNFTs, isLoading: isLoadingNFTs, isError: isErrorNFTs } = useQuery('latestNFTs', fetchLatestNFTs);
    const { data: history, isLoading: isLoadingHistory, isError: isErrorHistory } = useQuery(['history', userToken], () => fetchHistory(userToken));

    if (isLoadingAuthors || isLoadingNFTs || isLoadingHistory) {
        return <Skeleton count={5} />;
    }

    if (isErrorAuthors || isErrorNFTs || isErrorHistory) {
        return <div>Error loading data</div>;
    }

    return (
        <div className="side-bar">
            <div className="widget widget-recently">
                <h5 className="title-widget">Recently added</h5>
                {latestNFTs.map((nft, index) => (
                    <div className="card-small flex items-center  justify-center " key={index}>
                        <div className="author authos flex items-start  justify-center ">
                            <img src={`${nft.imageUrl}`} alt="alt" />
                            <div className="info flex flex-column justify-center ">
                                <h6 className="m-0">{nft.name}</h6>
                                <p className="m-0">@{nft.author.username}</p>
                            </div>
                        </div>
                        <span className="date">{new Date(nft.createdAt).toLocaleDateString()}</span>
                    </div>
                ))}
            </div>
            <div className="widget widget-creators">
                <div className="flex items-center justify-between">
                    <h5 className="title-widget">Top Creators</h5>
                </div>
                {topAuthors.map((author, index) => (
                    <div className="widget-creators-item flex items-center mb-20" key={index}>
                        <div className="order">{index + 1}. </div>
                        <div className="author flex items-center flex-grow">
                            {
                                topAuthors ? <img src={`${author.authorDetails.profilePicture}` || profilePic} alt="alt" />
                                    :
                                    <Skeleton className="mr-2" circle={true} highlightColor={"#333"} baseColor={"grey"} height={60} width={60} />
                            }
                            <div className="info  ">
                                <h6>{

                                    topAuthors ? <a >{author.authorDetails.fullName}</a>
                                        :
                                        <Skeleton className=" rounded  " highlightColor={"#333"} baseColor={"grey"} height={10} width={60} />

                                }
                                </h6>
                                <span>{

                                    topAuthors ? <a >@{author.authorDetails.username}</a>
                                        :
                                        <Skeleton className=" rounded  " highlightColor={"#333"} baseColor={"grey"} height={10} width={110} />

                                }</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="widget widget-coins">
                <h5 className="title-widget">Trending coins</h5>
                <div className="widget-coins-item flex items-center mb-20">
                    <img src={Coin1} alt="alt" />
                    <p>Bitcoin</p>
                </div>
                <div className="widget-coins-item flex items-center mb-20">
                    <img src={Coin2} alt="alt" />
                    <p>Ethereum</p>
                </div>
                <div className="widget-coins-item flex items-center mb-20">
                    <img src={Coin3} alt="alt" />
                    <p>Cardano</p>
                </div>
                <div className="widget-coins-item flex items-center mb-20">
                    <img src={Coin4} alt="alt" />
                    <p>Solana</p>
                </div>
                <div className="widget-coins-item flex items-center">
                    <img src={Coin5} alt="alt" />
                    <p>Litecoin</p>
                </div>
            </div>
            <div className="widget widget-history">
                <div className="flex items-center justify-between">
                    <h5 className="title-widget">History</h5>
                </div>
                {history.map((history, index) => (
                    <div className="widget-creators-item flex mb-20" key={index}>
                        <div className="author flex items-center flex-grow">
                            {
                                history ? <img className="" src={CheckUserProfilePic(history)} alt="alt" />
                                    :
                                    <Skeleton className="mr-3" circle={true} highlightColor={"#333"} baseColor={"grey"} height={60} width={60} />
                            }
                            <div className="w-100">
                                <div className="flex  justify-between items-start">

                                    <div className="info">
                                        {
                                            history ? <h6><a >{history.products[0].name}</a></h6>
                                                :
                                                <Skeleton className=" rounded  " highlightColor={"#333"} baseColor={"grey"} height={10} width={60} />
                                        }
                                        {
                                            history ? <span><a>Bought with {history.products[0].price} <i className="icon-gem"></i></a></span>
                                                :
                                                <Skeleton className=" rounded  " highlightColor={"#333"} baseColor={"grey"} height={10} width={110} />
                                        }
                                    </div>
                                    <span className="time " >
                                        {
                                            history ? extractTime(history.createdAt)
                                                :
                                                <Skeleton className=" rounded  " highlightColor={"#333"} baseColor={"grey"} height={10} width={70} />
                                        }
                                    </span>
                                </div>
                            </div>

                        </div>

                    </div>
                ))}
            </div>



        </div>

    );
}
