import React from "react";
import GridlyAdvertiserImage from "../img/gridly_advertiser.png";

function Advertiser() {
    return <div className="flex-col">
        <a href="https://www.localizedirect.com/" target="_blank">
            <img className="w-full rounded-full object-cover" src={GridlyAdvertiserImage} title="Gridly"></img>
        </a>
        <div className="text-sm ">Reach 2 billion gamers worldwide with professional localization, LQA, and CMS services.</div>
        <div className="text-lg font-semibold my-4 text-gray-600">Be the first person to reach it.</div>
        <input className="border border-gray-400 w-full p-2 rounded text-sm" placeholder="Your email" />
        <a href="https://www.localizedirect.com/" target="_blank">
            <button className="w-full bg-red-500 text-center p-2 text-white mt-4 rounded mb-2">Explore</button>
        </a>
    </div>

}

export default React.memo(Advertiser);