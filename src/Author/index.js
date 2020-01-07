import React from "react";
import TriImage from "../img/tri.jpg";
import FacebookSVG from "../img/social/facebook.svg";
import InstagramSVG from "../img/social/instagram.svg";
import TwitterSVG from "../img/social/twitter.svg";

function Author() {
    return <div className="flex-col">
        <div className="flex justify-between">
            <div className="text-gray-600 font-semibold mb-4">Blog Author</div>
            <div className="flex">
                <img src={FacebookSVG} className="w-6 h-6 rounded-full object-cover" alt="facebook" />
                <img src={InstagramSVG} className="w-6 h-6 rounded-full object-cover ml-4" alt="instagram" />
                <img src={TwitterSVG} className="w-6 h-6 rounded-full object-cover ml-4" alt="twitter" />
            </div>
        </div>
        <div className="flex">
            <a href="https://www.linkedin.com/in/tridocao/" target="_blank">
                <img className="w-12 h-12 rounded-full object-cover" src={TriImage} title="Tri Do"></img>
            </a>
            <div className="ml-4 flex-col">
                <div className="text-black">
                    Tri Do
                </div>
                <div className="text-sm text-gray-500">
                    Project Manager at Localize Direct
                </div>
            </div>
        </div>
    </div>
}

export default React.memo(Author);