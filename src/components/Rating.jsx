import React from "react";
import Rating from "react-rating";

function RatingComponent() {
    return <div className="flex-col">
        <div className="flex justify-between">
            <div className="text-gray-600 font-semibold mb-2">Rating</div>
        </div>
        <div className="text-gray-600 mb-2">How many stars for this blog?</div>
        <div className="flex">
            <Rating />
        </div>
    </div>
}

export default React.memo(RatingComponent);