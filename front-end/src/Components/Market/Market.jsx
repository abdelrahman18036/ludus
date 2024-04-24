import React from "react";
import MarketHeader from "./Components/MarketHeader";
import SectionMenuLeft from "./Components/SectionMenuLeft";
export default function Market() {
    return (
        <div id="page" class="market-page">
            <MarketHeader />
            <div class="flat-tabs">
                <SectionMenuLeft />

            </div>
        </div>

    );
}
