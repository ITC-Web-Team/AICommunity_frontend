import React from "react";
import './layout.css';
import { useEffect, useRef } from 'react';
import bgVideo from '../../assets/video.mp4';
import Navbar from "../Navbar/Navbar";
import Footer from '../footer/footer.jsx';


export default function Layout({children}) {

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Adjust playback rate as needed
    }
  }, []);

  return (
    <div className="home">
      <div className="overlay"></div>
      <div className="container">
      <Navbar />
      <div className="base">
      {children}
      <Footer />
      </div>
      </div>
      
        <video src={bgVideo}
               autoPlay 
               muted 
               loop 
               playsInline
               ref={videoRef}
               className="myVideo"/>
              
    </div>
  );
}