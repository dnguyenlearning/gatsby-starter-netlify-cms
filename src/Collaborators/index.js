import React from "react";
import TriImage from "../img/tri.jpg";
import DuongImage from "../img/duong.jpg";

function Collaborators(){
    return <div className="flex py-4">
        <a href="https://www.linkedin.com/in/tridocao/" target="_blank">
            <img className="w-12 h-12 rounded-full object-cover" src={TriImage} title="Tri Do"></img>
        </a>
        <a href="https://www.linkedin.com/in/nguyen-duong-85560a159/" target="_blank">
            <img className="w-12 h-12 rounded-full object-cover ml-4" src={DuongImage} title="Duong Nguyen"></img>
        </a>
    </div>
}

export default React.memo(Collaborators);