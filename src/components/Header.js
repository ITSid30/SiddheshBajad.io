import React from "react";
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import { ReactDOM } from "react";
import Siddhesh_Photo_1 from "../images/Siddhesh_Photo_1.png";

function Header() {
    
    const [typeEffect] = useTypewriter({
        words : ["Student !", "Developer !", "Programmer !"],
        loop: {},
        typeSpeed : 100,
        deleteSpeed: 40,
    });

    return (
        // <div style={{alignContent:"center", padding:"50px"}}>
        //     <div style={{float:"left", width:"60%", height: "100px"}}>
        //         <h1>Siddhesh Bajad</h1>
        //     </div>
        //     <div style={{float:"right", width:"40%", height: "100px"}}>
        //         <img src="../../public/images/Siddhesh_Photo_1.png">Siddhesh Photo</img>
        //     </div>
        // </div>
        <div id="box1" style={{marginLeft: "0px", marginRight:"0px"}} class="min-h-screen bg-gradient-to-t from-cyan-100 to-purple-500 p-10">
            <div class="margin-0 space-y-10 md:grid md:grid-cols-2">
                {/* //left side column */}
                <div class="md:flex md:flex-col md:justify-center">
                    <h1 class="italic text-black text-6xl md:text-8xl lg:text:12xl font-bold mb-4">Siddhesh Bajad ...</h1>

                    <div className="text-black text-4xl md:text-6xl lg:text:8xl font-bold mb-4">
                        <h2 className="">
                            I'm a  
                            <span className="from-yellow-500 to-red-600 bg-gradient-to-r bg-clip-text text-transparent ml-10">{typeEffect}</span>
                        </h2>
                    </div>
                </div>

                {/* //right side column */}
                <div class="sm:margin-top-40" >
                    <div class="w-full h-full flex justify-center items-center">
                        {/* <div class="items-center"> */}
                            <img class="rounded-full w-96 h-96 shadow-2xl duration-300 cursor-pointer filter grayscale hover:grayscale-0 border-double border-8 border-red-500" src={Siddhesh_Photo_1} alt="ProfileImage"/>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;
