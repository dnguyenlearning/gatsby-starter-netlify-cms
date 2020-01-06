import React from "react";
import AdvertiserSVG from "../img/ads.svg";

function Advertiser() {
    return <div className="flex-col">
        <div className="text-gray-600 font-semibold text-lg">Sponsored</div>
        <a href="https://www.localizedirect.com/" target="_blank">
            <img className="w-full rounded-full object-cover" src={AdvertiserSVG} title="Gridly"></img>
        </a>
        <div className="w-2/3 mx-auto">
            <div className="text-lg font-semibold mt-4 text-gray-600">Muốn chia sẻ về công ty?</div>
            <div className="text-lg font-semibold text-gray-600 mb-4">Liên hệ chúng tôi.</div>
        </div>
        <input className="border border-gray-400 w-full p-2 rounded text-sm" placeholder="Your email" />
        <a href="https://www.localizedirect.com/" target="_blank">
            <button className="w-full bg-red-500 text-center p-2 text-white mt-4 rounded mb-2">Explore</button>
        </a>
    </div>

}

export default React.memo(Advertiser);