import React from "react";

export default function Sliderbar() {
    return (
        <div className="side-bar">
            <div className="widget widget-recently">
                <h5 className="title-widget">Recently added</h5>
                <div className="card-small-main">
                    <img src="assets/images/blog/sidebar-05.jpg" alt="alt" />
                    <div className="card-bottom">
                        <h5><a href="/">Photography</a></h5>
                        <span className="date">16hr ago</span>
                    </div>
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
                        <img src="assets/images/blog/sidebar-07.jpg" alt="alt" />
                        <div className="info">
                            <h6><a href="/">Propw</a></h6>
                            <p><a href="/">@themes</a></p>
                        </div>
                    </div>
                    <span className="date">Mon, 08 May </span>
                </div>
                <div className="card-small">
                    <div className="author">
                        <img src="assets/images/blog/sidebar-08.jpg" alt="alt" />
                        <div className="info">
                            <h6><a href="/">Propw</a></h6>
                            <p><a href="/">@themes</a></p>
                        </div>
                    </div>
                    <span className="date">Mon, 08 May </span>
                </div>
            </div>
            <div className="widget widget-creators">
                <div className="flex items-center justify-between">
                    <h5 className="title-widget">Top Creators</h5>
                    <a className="see-all" href="/">See all</a>
                </div>
                <div className="widget-creators-item flex items-center mb-20">
                    <div className="order">1. </div>
                    <div className="author flex items-center flex-grow">
                        <img src="assets/images/avatar/avatar-small-01.png" alt="alt" />
                        <div className="info">
                            <h6><a href="/">Brooklyn Simmons</a></h6>
                            <span><a href="/">@themes</a></span>
                        </div>
                    </div>
                    <button className="follow">Follow</button>
                </div>
                <div className="widget-creators-item flex items-center mb-20">
                    <div className="order">2. </div>
                    <div className="author flex items-center flex-grow">
                        <img src="assets/images/avatar/avatar-small-02.png" alt="alt" />
                        <div className="info">
                            <h6><a href="/">Brooklyn Simmons</a></h6>
                            <span><a href="/">@themes</a></span>
                        </div>
                    </div>
                    <button className="follow">Follow</button>
                </div>
                <div className="widget-creators-item flex items-center mb-20">
                    <div className="order">3. </div>
                    <div className="author flex items-center flex-grow">
                        <img src="assets/images/avatar/avatar-small-03.png" alt="alt" />
                        <div className="info">
                            <h6><a href="/">Brooklyn Simmons</a></h6>
                            <span><a href="/">@themes</a></span>
                        </div>
                    </div>
                    <button className="follow">Follow</button>
                </div>
                <div className="widget-creators-item flex items-center mb-20">
                    <div className="order">4. </div>
                    <div className="author flex items-center flex-grow">
                        <img src="assets/images/avatar/avatar-small-04.png" alt="alt" />
                        <div className="info">
                            <h6><a href="/">Brooklyn Simmons</a></h6>
                            <span><a href="/">@themes</a></span>
                        </div>
                    </div>
                    <button className="follow">Follow</button>
                </div>
                <div className="widget-creators-item flex items-center">
                    <div className="order">5. </div>
                    <div className="author flex items-center flex-grow">
                        <img src="assets/images/avatar/avatar-small-01.png" alt="alt" />
                        <div className="info">
                            <h6><a href="/">Brooklyn Simmons</a></h6>
                            <span><a href="/">@themes</a></span>
                        </div>
                    </div>
                    <button className="follow">Follow</button>
                </div>
            </div>
            <div className="widget widget-coins">
                <h5 className="title-widget">Trending coins</h5>
                <div className="widget-coins-item flex items-center mb-20">
                    <img src="assets/images/box-icon/coin-01.png" alt="alt" />
                    <p><a href="/">Bitcoin</a></p>
                </div>
                <div className="widget-coins-item flex items-center mb-20">
                    <img src="assets/images/box-icon/coin-02.png" alt="alt" />
                    <p><a href="/">Ethereum</a></p>
                </div>
                <div className="widget-coins-item flex items-center mb-20">
                    <img src="assets/images/box-icon/coin-03.png" alt="alt" />
                    <p><a href="/">Cardano</a></p>
                </div>
                <div className="widget-coins-item flex items-center mb-20">
                    <img src="assets/images/box-icon/coin-04.png" alt="alt" />
                    <p><a href="/">Solana</a></p>
                </div>
                <div className="widget-coins-item flex items-center">
                    <img src="assets/images/box-icon/coin-05.png" alt="alt" />
                    <p><a href="/">Litecoin</a></p>
                </div>
            </div>
            <div className="widget widget-history">
                <div className="flex items-center justify-between">
                    <h5 className="title-widget">History</h5>
                    <a className="see-all" href="/">See all</a>
                </div>
                <div className="widget-creators-item flex items-center mb-20">
                    <div className="author flex items-center flex-grow">
                        <img src="assets/images/avatar/avatar-small-01.png" alt="alt" />
                        <div className="info">
                            <h6><a href="/">Lorem NFT sold</a></h6>
                            <span><a href="/">Sold at 1.32 ETH</a></span>
                        </div>
                    </div>
                    <span className="time">Just now</span>
                </div>
                <div className="widget-creators-item flex items-center mb-20">
                    <div className="author flex items-center flex-grow">
                        <img src="assets/images/avatar/avatar-small-02.png" alt="alt" />
                        <div className="info">
                            <h6><a href="/">New NFT uploaded</a></h6>
                            <span><a href="/">By Marisol Pena</a></span>
                        </div>
                    </div>
                    <span className="time">1hr ago</span>
                </div>
                <div className="widget-creators-item flex items-center mb-20">
                    <div className="author flex items-center flex-grow">
                        <img src="assets/images/avatar/avatar-small-03.png" alt="alt" />
                        <div className="info">
                            <h6><a href="/">You followed a creator</a></h6>
                            <span><a href="/">Jane Cooper</a></span>
                        </div>
                    </div>
                    <span className="time">2hr ago</span>
                </div>
                <div className="widget-creators-item flex items-center mb-20">
                    <div className="author flex items-center flex-grow">
                        <img src="assets/images/avatar/avatar-small-04.png" alt="alt" />
                        <div className="info">
                            <h6><a href="/">You placed a bid</a></h6>
                            <span><a href="/">Whirl wind NFT</a></span>
                        </div>
                    </div>
                    <span className="time">4hr ago</span>
                </div>
                <div className="widget-creators-item flex items-center">
                    <div className="author flex items-center flex-grow">
                        <img src="assets/images/avatar/avatar-small-01.png" alt="alt" />
                        <div className="info">
                            <h6><a href="/">You followed a creator</a></h6>
                            <span><a href="/">Courtney Henry</a></span>
                        </div>
                    </div>
                    <span className="time">16hr ago</span>
                </div>
            </div>
        </div>

    );
}
