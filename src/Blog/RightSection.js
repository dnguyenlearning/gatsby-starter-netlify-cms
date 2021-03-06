import React from "react";
import Author from "../Author";
import Rating from "../components/Rating";
import Advertiser from "../Advertiser";
import CopyRight from "../CopyRight";

function LeftSection(){
    return <div className="flex-col">
        <div className="mb-5">
            <div className="rounded bg-white p-3 shadow-tech">
                <Author />
            </div>
        </div>
        <div className="mb-5">
            <div className="rounded bg-white p-3 shadow-tech">
                <Rating />
            </div>
        </div>
        <div className="mb-5 hidden lg:block">
            <div className="rounded bg-white p-3 shadow-tech">
                <Advertiser />
            </div>
        </div>
        <div className="mb-5 hidden lg:block">
            <CopyRight />
        </div>
    </div>
}

export default React.memo(LeftSection);
