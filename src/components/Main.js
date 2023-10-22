import React, { useState } from "react";
import { ReactDOM } from "react";
import Siddhesh_Photo_1 from "../images/Siddhesh_Photo_1.png";
import Cards from "./Cards";
import LogoSlide from "./LogoSlide";
import Blockchain from "../images/blockchain.jpg";
import Cloud from "../images/cloud.jpg";
import Iot from "../images/iot.jpg"
import Website from "../images/website.jpeg";
import Bakcground from "../images/backgroung.jpg";

function Main() {
    // creating clone of the logos-slide images in JS 
    // let copy = document.querySelector('.logos-slide').cloneNode(true); 
    // document.querySelector(".logos").appendChild(copy);

    const cards = [
        {
            cardTitle : "Best Paper Award",
            content : "Second best paper award in IEEE ICBDS 2023 Conference."
        },
        {
            cardTitle : "AWS Cloud Certification",
            content : "Basic concepts of Cloud computing."
        },
        {
            cardTitle : "Google Cloud Certification",
            content : "Concept based labs and Handson Experience."
        },
        {
            cardTitle : "Problem Solving",
            content : "200+ Problems solved on Coding Platforms."
        },
        {
            cardTitle : "Blockchain Developer Course",
            content : "Completed the Learning path of Blockchain Developer on LinkedIn."
        },
        {
            cardTitle : "Devops Bootcamp",
            content : "Had Hands-on experience of Devops."
        },
        
    ];

    const mapItems = cards.map(card => 
        <div>
            <h3>{card.cardTitle}</h3>
            <p>{card.content}</p>
        </div>
    );

    return (
        <div style={{marginLeft: "0px", marginRight:"0px"}} className="bg-gradient-to-t from-sky-100 to-sky-200">
            <div id="box2" className="box1">
                <div className="container">
                    <h2 className="text-black text-4xl md:text-6xl lg:text:8xl font-bold mb-4">Projects</h2>
                </div>
                <div className="md:grid md:grid-cols-2">
                    
                        <div className="md:flex md:flex-col md:justify-center container object-contain h-100% w-90 " style={{padding: "20px", backgroundColor: ""}}>
                            <div className="card items-center bg-gradient-to-br from-green-100 to-stone-200" style={{padding:"30px", marginLeft:"30px", marginRight:"30px"}}>
                                <h3 className="text-black text-2xl font-bold">Smart Blind Stick</h3>
                                <img className="h-40 w-40" src={Iot} alt="Smart Blind Stick IOT image"/>
                                <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-black-400">
                                    <li>Programmed the Arduino microcontroller of the stick to detect obstacles in 2 modes ahead of the path as well as sideways.</li>
                                    <li>Used multiple sensors such as UV sensors, Buzzers, Vibrators, Servo Motor in the algorithm to detect and handle obstacles in range of 40-45cm from the stick with an accuracy of 70 percent.</li>
                                    {/* <li>The stick was able to detect obstacles in range of 40-45cm from the stick with an accuracy of 70 percent.</li> */}
                                </ul>
                                {/* <a href="" >Link</a> */}
                            </div>
                        </div>
                        <div className="md:flex md:flex-col md:justify-center container object-contain h-100% w-90 " style={{padding: "20px", backgroundColor: ""}}>
                            <div className="card items-center bg-gradient-to-br from-green-100 to-stone-200" style={{padding:"30px", marginLeft:"30px", marginRight:"30px"}}>
                                <h3 className="text-black text-2xl font-bold">crowdfunding Application</h3>
                                <img className="h-40 w-40" src={Blockchain} alt="Blockchain image"/>
                                <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-black-400">
                                    <li>Build an Ethereum blockchain Dapp on crowdfunding using technology of Solidity, React, HTML, CSS, Javascript, Ganache, Truffle</li>
                                    <li>It involves direct transfer of funds from smart contract to end user based on majority of voting among contributors on requests.</li>
                                </ul>
                                {/* <a href="" >Link</a> */}
                            </div>
                        </div>
                        <div className="md:flex md:flex-col md:justify-center container object-contain h-100% w-90" style={{padding: "20px", backgroundColor: ""}}>
                            <div className="card items-center bg-gradient-to-br from-green-100 to-stone-200" style={{padding:"30px", marginLeft:"30px", marginRight:"30px"}}>
                                <h3 className="text-black text-2xl font-bold">Coding CLub Website</h3>
                                <img className="h-40 w-40" src={Website} alt="Website image"/>
                                <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-black-400">
                                    <li>Built a simple static website using HTML, CSS concepts.</li>
                                    <li>The website was developed and deployed on AWS S3 bucket as storage and monitored and accessed using AWS CloudFront service</li>
                                </ul>
                                {/* <a href="" >Link</a> */}
                            </div>
                        </div>
                        <div className="md:flex md:flex-col md:justify-center container object-contain h-100% w-90 " style={{padding: "20px", backgroundColor: ""}}>
                            <div className="card items-center bg-gradient-to-br from-green-100 to-stone-200" style={{padding:"30px", marginLeft:"30px", marginRight:"30px"}}>
                                <h3 className="text-black text-2xl font-bold">ToDO Lists using LinkedLists</h3>
                                <img className="h-40 w-40" src={Cloud} alt="LinkedList image"/>
                                <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-black-400">
                                    <li>Build a simple TODO list application using C language and DSA concept of Doubly Linkedlist</li>
                                    <li>The main focus was to develop traversal in both directions of list to enable fasterlookups and deletions</li>
                                </ul>
                                {/* <a href="" >Link</a> */}
                            </div>
                        </div>
                    
                </div>
            </div>
            
            <div style={{marginTop:"30px"}} className="box2 bg-gradient-to-b from-slate-50 to-sky-50">
                <div className="container">
                    <h2 className="text-black text-4xl md:text-6xl lg:text:8xl font-bold mb-4">Skills</h2>
                    <LogoSlide />
                </div>
                
            </div>
            
            <div id="box3" style={{marginTop:"0px", marginBottom:"0px"}} className="box3 h-100% bg-gradient-to-b from-purple-50 to-zinc-500">
                <div className="container">
                    
                    <h2 className="text-black text-4xl md:text-6xl lg:text:8xl font-bold mb-4">Achivements</h2>
                    {/* <p>Add ahivements of paper publications, Best paper awards, Practice problems, COurses, etc.</p> */}
                    
                    <div className="md:grid md:grid-cols-3 ">
                            {cards.map((e) => {
                                return (
                                    <Cards cardTitle={e.cardTitle} content={e.content} />
                                );
                            })}
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default Main;