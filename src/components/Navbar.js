import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import favicon from "../images/favicon.png";

function Navbar() {

    const [isNavCollapsed, setIsNavCollapsed] = useState(false);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        // <div>
        //     <h4>Navbar</h4>
        // </div>
        <nav class="bg-gradient-to-r from-violet-500 to-purple-500 navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="flex">
            <img className="rounded-full flex mr-1" src={favicon} />
            <a class="font-bold text-white navbar-brand" href="/">SidB</a>
        </div>
        

        {/* <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample"
                 aria-controls="navbarsExample" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" 
                 onClick={handleNavCollapse}>
            <span class="navbar-toggler-icon"></span>
        </button> */}
            {/* <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample"> */}
            <div class="flex">
            <a class="font-bold text-white nav-item nav-link active" href="#box1">About <span class="sr-only">(current)</span></a>
            <a class="font-bold text-white nav-item nav-link" href="#box2">Projects</a>
            <a class="font-bold text-white nav-item nav-link" href="#box3">Achivements</a>
            <a class="font-bold text-white nav-item nav-link" href="#box4">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
