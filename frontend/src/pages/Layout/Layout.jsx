import React from "react";
// import './layout.css';
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
    <div className="Background">
      <div className="Content Area">
        <div className="Navbar">
          {<Navbar/>}
        </div>
        <div className="Children">
          {children}
        </div>
      </div>
    </div>
  );
}