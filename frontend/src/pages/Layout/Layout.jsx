import React, { useEffect, useRef } from "react";
import bgVideo from '../../assets/video.mp4';
import Navbar from "../Navbar/Navbar";
import Footer from '../footer/footer.jsx';
import VantaNet from "./VantaNet"; // Ensure the import path is correct

export default function Layout({ children }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Adjust playback rate as needed
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <VantaNet />
      <div className="w-full max-w-5xl mx-auto mt-10 rounded-lg overflow-hidden border-2 border-white bg-black">
        <div className="mb-4">
          <Navbar />
        </div>
        <div className="w-[70vw] mx-auto">
          {children}
        </div>
        <div className="mt-4">
        </div>
      </div>
      <Footer />
    </div>
  );
}
