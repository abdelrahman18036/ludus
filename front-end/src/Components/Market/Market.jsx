import React, { useState } from "react";
import MarketHeader from "./Components/MarketHeader";
import SectionMenuLeft from "./Components/SectionMenuLeft";
import MarketContent from "./Components/MarketContent";
import ActiveBid from "./Components/ActiveBid";
import Explore from "./Components/Explore";
import Layout from "../Layout/Layout";
import Collection from "./Components/Collection";
import Setting from "./Components/Settings";

export default function Market() {
    const [activeTab, setActiveTab] = useState('market');
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    return (
        <div id="page" className="market-page">
            <MarketHeader />
            <div className="flat-tabs">
                <SectionMenuLeft onTabClick={handleTabClick} activeTab={activeTab} />

                <div className="content-tabs">
                    <Layout >
                        {activeTab === 'market' && <MarketContent />}
                        {activeTab === 'bid' && <ActiveBid />}
                        {activeTab === 'explore' && <Explore />}
                        {activeTab === 'collection' && <Collection />}
                        {activeTab === 'settings' && <Setting />}

                    </Layout>

                </div>

            </div>

        </div>

    );
}
