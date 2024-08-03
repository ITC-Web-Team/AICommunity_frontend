import React from "react";
import img from "../../assets/img.jpg";
import right from "../../assets/right.png";
import image from "../../assets/image.png";
import { Link } from "react-router-dom";
import facAdimg from "../../assets/bg_removed_amit_sethi.png"
import { TypeAnimation } from 'react-type-animation';



export default function Home() {
    return (
        <div className="flex flex-col bg-black">
            <div className="w-full m-8" >
                <div className="w-11/12 h-80 rounded-lg flex flex-col bg-opacity-50 p-8 justify-center gap-5">
                    <div className="text-4xl text-green-500 font-sans">Hey AI Enthusiast!</div>
                        
                            <div className="text-3xl text-white font-sans">Welcome to</div> 
                            <div className="flex flex-row gap-4">
                                <div className="text-4xl text-purple-600 font-sans">AI</div>
                                <div className="text-4xl text-purple-600 font-sans">
                                    <TypeAnimation
                                    sequence={[
                                        'Community, IITB',
                                        1000, 
                                        'innovation and mentorship centre',
                                        1000,
                                        'learning hub of IITB',
                                        1000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                    />
                                </div>
                                
                            </div>
                        
                </div>
            </div>

            <div className="bg-slate-700 w-11/12 h-80 rounded-lg flex flex-col bg-opacity-50 p-8 justify-center gap-5 m-8">
                <div className="font-pressStart text-4xl text-green-500 ">Our Mission</div>
                <div className="text-white text-2xl font-sans">Our mission is disturbing web team</div>
            </div>
                
            <div className="bg-slate-700 w-11/12 h-80 rounded-lg flex flex-col bg-opacity-50 p-8 justify-center gap-5 m-8">
                <div className="text-4xl text-green-500 font-pressStart">History</div>
                <div className="text-white text-2xl font-sans">Historysheeters</div>
            </div>

            <div className="bg-slate-700 w-11/12 h-80 rounded-lg flex flex-col bg-opacity-50 p-8 justify-center gap-5 m-8">
                <div className="font-pressStart text-4xl text-green-500">Events</div>
                <div className="text-white text-2xl font-sans">koi event ni h bhyi</div>
            </div>

            <div className="bg-slate-700 w-11/12 h-80 rounded-lg flex flex-col bg-opacity-50 p-8 justify-center gap-5 m-8">
                <div className="font-pressStart text-4xl text-green-500">Resources</div>
                <div className="text-white text-2xl font-sans">Learning Technologies</div>
            </div>

            <div className="bg-slate-700 w-11/12 h-80 rounded-lg flex flex-col bg-opacity-50 p-8 justify-center gap-5 m-8">
                <div className="font-pressStart text-4xl text-green-500">Gallery</div>
                <div className="text-white text-2xl font-sans">images daalo</div>
            </div>
        </div>

        
    );
}