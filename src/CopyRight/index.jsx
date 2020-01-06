import React from "react";

function CopyRight() {
    return <div className="flex-col">
        <div className="flex mb-1">
            <div className="text-sm text-gray-500 mr-3 cursor-pointer hover:underline">Blogs</div>
            <div className="text-sm text-gray-500 mr-3 cursor-pointer hover:underline">Hiring</div>
            <div className="text-sm text-gray-500 mr-3 cursor-pointer hover:underline">Advertising</div>
            <div className="text-sm text-gray-500 mr-3 cursor-pointer hover:underline">About</div>
            <div className="text-sm text-gray-500 mr-3 cursor-pointer hover:underline">FAQ</div>
            <div className="text-sm text-gray-500 mr-3 cursor-pointer hover:underline">Terms</div>
        </div>
        <div style={{
            fontSize: 12
        }} className="text-gray-500 uppercase font-light">&copy; 2020 Congty Tech</div>
    </div>
}

export default React.memo(CopyRight);