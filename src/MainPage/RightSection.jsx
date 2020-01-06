import React from "react";
import Filter from "../filter/index";
import Collaborators from "../Collaborators/index";
import Advertiser from "../Advertiser/index";
import CopyRight from "../CopyRight/index";

function RightSection(){
    return <div className="flex-col">
        <div className="mb-5">
            <div className="font-semibold mb-2 text-gray-600">Choose to filter</div>
            <div className="rounded bg-white p-3 shadow-tech">
                <Filter />
            </div>
        </div>
        <div className="hidden mb-5 lg:block">
            <div className="font-semibold mb-2 text-gray-600">Collaborators</div>
            <div className="rounded bg-white p-3 shadow-tech">
                <Collaborators />
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

export default React.memo(RightSection);