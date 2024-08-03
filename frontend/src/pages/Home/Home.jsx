import React from "react";
import img from "../../assets/img.jpg";
import right from "../../assets/right.png";
import image from "../../assets/image.png";
import { Link } from "react-router-dom";
import "./Home.css";
import facAdimg from "../../assets/bg_removed_amit_sethi.png"

export default function Home() {
    return (
        <>
        <div className="Welcome">
            <div className="Text1">Hey There!</div>
            <div className="Text2">Welcome to</div> 
            <div className="Text3">AI</div>
            <div className="Animation">Community, IITB ; innovation and mentorship centre ; learning hub of IITB</div>
        </div>

        <div className="Our Mission">
            <div className="heading">Our Mission</div>
            <div className="text">Our mission is disturbing web team</div>
        </div>
            
        <div className="History">
            <div className="heading">History</div>
            <div className="text">Historysheeters</div>
        </div>

        <div className="Events">
            <div className="heading">Events</div>
            <div className="text">koi event ni h bhyi</div>
        </div>

        <div className="Resources">
            <div className="heading">Resources</div>
            <div className="text">Learning Technologies</div>
        </div>

        <div className="Gallery">
            <div className="heading">Gallery</div>
            <div className="text">images daalo</div>
        </div>
        
        </>

        // <div className="hey">
        //     <div className="home1">
        //         <div className="boxes">
        //             <div className="notbox first">
        //                 <h1 className="box-heading">
        //                 Crafting AI's Future,<br/> one idea at IITB
        //                 </h1>
        //                 <p className="description">
        //                 The official AI community of IIT-Bombay, we aim to elevate the AI ecosystem in IITB by organizing hackathons, projects, talks and reading groups.
        //                 </p>
        //             </div>
        //             <div className="notbox first">
        //                 <h2>
        //                 We are a group of AI enthusiasts aiming to produce world-class research outputs
        //                 </h2>
        //             </div>
        //         </div>
        //         <div >
        //             <img src={img} alt="AI" className="img" />
        //         </div>
        //     </div>
        //     <div className="home2">
                
        //         <div className="work">
        //             <h1 className="heading-of-topics">
        //             Pillars of Modern Artificial Intelligence
        //             </h1>
        //             <div className="topics">
        //                 <h1 className="box-heading">Data Science</h1>
        //                 <p className="description">
        //                 Unlock the potential of data. Delve into analysis, predictive modeling,
        //                 and data-driven strategies. From business optimization to machine
        //                 learning, turn information into actionable insights.
        //                 </p>
        //             </div>
        //             <div className="topics ">
                        
        //                 <p className="description">
        //                 Unlock the potential of data. Delve into analysis, predictive modeling,
        //                 and data-driven strategies. From business optimization to machine
        //                 learning, turn information into actionable insights.
        //                 </p>
        //                 <h1 className="box-heading">Reinforcement Learning</h1>
        //             </div>
                    
        //                 <div className="topics">
        //                 <h1 className="box-heading">Computer Vision</h1>
        //                 <p>
        //                 Experience the future of visual intelligence in image recognition,
        //                 object detection, and custom solutions, powering applications in
        //                 healthcare, automotive, and more. Unleash the potential of visual
        //                 data with us.
        //                 </p>
        //             </div>
        //             <div className="topics">
                        
        //                 <p className="description">Explore the realm of language in linguistic computation covering
        //                 natural language processing, sentiment analysis, and language
        //                 models. From chatbots to content analysis, we turn language into
        //                 actionable insights.</p>
        //                 <h1 className="box-heading">Linguistic Computation</h1>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="home3">
        //         <div className="notbox">
        //             <h1 className="box-heading">
        //                 Explore our insightful blogs covering AI, ML and carrer opportunities in these fields
        //             </h1>
        //         </div>
        //         <Link to="/blogs">
        //         <div className="notbox">
        //             <h2>
        //                 Explore Blogs! <img className="rightarrow" src={right} alt="right" />
        //             </h2>
        //         </div>
        //         </Link>
        //     </div>
            
        //     <div className="home4">
        //         <div className="project">
        //         <div className="notbox"> 
        //             <h1>
        //                 Get Ready to Start
        //                 Your Project With Us
        //             </h1>
        //         </div>
        //         </div>
        //         <img src={image} className="project-image" alt="tech" />
                          
        //     </div>
            
           
        // </div>
    );
}