import React from "react";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpg";
import { TypeAnimation } from 'react-type-animation';



export default function Home() {
    return (
        <div className="flex flex-col bg-black">
            <div className="w-full m-8" >
                <div className="w-11/12 h-50 rounded-lg flex flex-col bg-opacity-50 p-8 justify-center gap-5 mb-0">
                    <div className="text-4xl text-green-500 font-pressStart text-center ">Hey AI Enthusiast!</div>
                        
                            <div className="text-4xl font-bold text-white font-sans text-center">Welcome to the</div> 
                            <div className="flex flex-row gap-4 ml-20 mb-0">
                                <div className="text-6xl font-extrabold text-purple-600 font-pressStart">AI</div>
                                <div className="text-6xl text-purple-600 font-sans font-extrabold">
                                    <TypeAnimation
                                    sequence={[
                                        'Community, IITB',
                                        2000, 
                                        'innovation at IITB',
                                        2000,
                                        'learning hub of IITB',
                                        2000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                    />
                                </div>
                                
                            </div>
                        
                </div>
            </div>

            <div className="w-11/12 h-auto rounded-lg flex flex-col bg-opacity-50 p-8 justify-center gap-5 m-8 mb-0">
                <div className="font-pressStart text-5xl text-green-500  text-center">Our Mission</div><br/>
                <div className="text-white text-2xl font-sans">
                At AI Community,IITB, we are dedicated to fostering a vibrant and inclusive community for everyone interested in artificial intelligence. Our mission is to empower individuals to explore, learn, and collaborate in the rapidly evolving field of AI. We believe that by bringing together people with diverse backgrounds and expertise, we can drive innovation and create positive impacts on society.<br/><br/>

<div className="text-purple-600 text-4xl font-bold text">What We Stand For:</div>
<br/>
<ul>
<li>
    <div className="text-3xl text-green-500 text-center">Education and Accessibility:</div>
     We aim to make AI knowledge and resources accessible to everyone, regardless of their prior experience. Through workshops, webinars, and online courses, we provide opportunities for learning and skill development.</li>
<br/>

<li>
<div className="text-3xl text-green-500 text-center">Collaboration and Innovation:</div>
 We encourage collaboration among our members to spark creativity and innovation. By connecting students, professionals, and enthusiasts, we create a space where ideas can be shared, and projects can flourish.</li>
<br/>

<li>
<div className="text-3xl text-green-500 text-center">Ethical AI Development:</div>
 We are committed to promoting ethical AI practices. Our community advocates for responsible AI development that respects privacy, ensures transparency, and prioritizes fairness.</li>
<br/>

<li>
<div className="text-3xl text-green-500 text-center">Supportive Network:</div>
 Our community is a supportive network where members can share challenges, celebrate achievements, and find mentorship. We believe in building strong connections that foster personal and professional growth.</li>
<br/>

<div className="text-green-500">Join us on our journey to explore the possibilities of AI and contribute to a future where technology serves humanity's best interests.</div>
</ul>


                </div>
            </div>
                
            <div className=" w-11/12 h-auto rounded-lg flex flex-col bg-opacity-50 p-8 justify-center gap-5 mx-8 mb-8 mt-0">
                <div className="font-pressStart text-5xl text-green-500  text-center">History</div><br/>
                <div className="text-white text-2xl font-sans"><br/>
                AI Community, IITB was founded with the vision of creating a collaborative environment for students, researchers, and faculty passionate about artificial intelligence. Recognizing the transformative potential of AI, a group of dedicated professors and students initiated the community to facilitate learning, research, and innovation within the institute.<br/><br/>
                
                <ul>
                    <li>
                        <div className="text-3xl text-green-500 text-center">Formation and Early Beginnings:</div>
The community was established as a small group focused on AI study sessions and workshops. Our founding members were driven by a shared enthusiasm for AI and a desire to explore its applications across various fields.</li><br/>

<li>
<div className="text-3xl text-green-500 text-center">Expansion and Formal Recognition:</div>
As interest in AI grew, our community expanded its activities and gained official recognition from the institute. We began organizing guest lectures, hackathons, and collaborative projects that attracted participants from diverse academic backgrounds.
</li><br/>

<li>
<div className="text-3xl text-green-500 text-center">Continuing Growth and Innovation:</div>
Today, the AI Community, IITB continues to grow and evolve. We remain committed to fostering a supportive environment where members can learn, innovate, and collaborate. Our annual events, such as AI symposiums and workshops, have become key highlights in the institute’s calendar.
</li><br/>

<div className="text-green-500">Our journey has been marked by a passion for AI and a commitment to excellence. We are proud of our history and excited about the future as we continue to advance AI knowledge and its applications.</div>
                </ul>
                </div>
            </div>

            <div className="w-11/12 h-auto rounded-lg flex flex-col bg-opacity-50 p-8 justify-center gap-5 m-8">
                <div className="font-pressStart text-5xl text-green-500  text-center">Events</div><br/>
                <div className="text-white text-2xl font-sans">Clash of T-AI-TANS hackathon</div>
            </div>

            <div className="w-11/12 h-auto rounded-lg flex flex-col bg-opacity-50 p-8 justify-center gap-5 m-8">
                <div className="font-pressStart text-5xl text-green-500  text-center">Resources</div><br/>
                <div className="text-white text-2xl font-sans">
                    <ul>
                        <li>Foundational Concepts
                            <li>Introduction to Artificial Intelligence
                                <li>Overview of AI and its history</li>
                                <li>Key concepts and terminology</li>
                            </li>
                            <li>Machine Learning Basics
                                <li>Types of machine learning (supervised, unsupervised, reinforcement)</li>
                                <li>Common algorithms and techniques</li>
                            </li>
                        </li>
                        <li>Programming and Tools

                            <li>Programming Languages for AI

                                <li>Python for AI and machine learning
                                </li>
                                <li>R and other languages commonly used in AI
                                </li>
                            </li>
                            <li>AI Development Tools and Frameworks
                                <li>TensorFlow, PyTorch, and other popular frameworks</li>
                                <li>Libraries for data manipulation and visualization (e.g., NumPy, Pandas, Matplotlib)</li>
                            </li>
                        </li>
                        <li>Advanced Topics
                            <li>Deep Learning
                                <li>Neural networks and architectures (CNNs, RNNs, LSTMs)</li>
                                <li>Techniques for training deep models</li>
                            </li>
                            <li>Natural Language Processing (NLP)
                                <li>Text analysis and processing</li>
                                <li>Sentiment analysis, language translation, and chatbots</li>
                            </li>
                            <li>Computer Vision
                                <li>Image recognition and classification</li>
                                <li>Object detection and image generation</li>
                            </li>
                        </li>
                        <li>Specialized Areas

                            <li>Reinforcement Learning
                                <li>Concepts and applications</li>
                                <li>Key algorithms (Q-learning, Deep Q-Networks)</li>
                            </li>
                            <li>AI in Robotics
                                <li>Integration of AI in robotic systems</li>
                                <li>Applications and challenges in robotics</li>
                            </li>
                        </li>
                        <li>Practical Applications
                            <li>AI in Healthcare
                                <li>Diagnosis, treatment recommendations, and personalized medicine</li>
                            </li>
                            <li>AI in Finance
                                <li>Algorithmic trading, fraud detection, and risk assessment</li>
                                
                            </li>
                            <li>AI in Autonomous Vehicles
                                <li>Self-driving technology and its challenges</li>
                            </li>
                        </li>
                        <li>Ethical and Societal Considerations
                            <li>Ethics in AI
                                <li>Fairness, transparency, and accountability in AI systems</li>
                                
                            </li>
                            <li>Impact of AI on Society
                                <li>AI’s influence on job markets and privacy concerns</li>
                                
                            </li>
                        </li>
                        <li>Career and Professional Development
                            <li>Building a Career in AI
                                <li>Skills and qualifications needed for AI roles</li>
                                <li>Career paths and job opportunities</li>
                            </li>
                            <li>Networking and Community Building
                                
                                <li>Joining AI communities and attending conferences</li>
                            </li>
                        </li>
                        <li>Tutorials and Courses
                            <li>Online AI Courses
                                <li>Recommendations for MOOCs and tutorials
                                </li>
                                
                            </li>
                            <li>Hands-on Projects
                                <li>Project ideas for practical experience</li>
                                
                            </li>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="w-11/12 h-auto rounded-lg flex flex-col bg-opacity-50 p-8 justify-center gap-5 m-8">
                <div className="font-pressStart text-5xl text-green-500  text-center">Gallery</div><br/>
                <div className="flex flex-col text-white p-8 justify-center mx-auto space-y-8">
                    <img src={img1} alt="img1" style={{ width: '350px', height: '200px' }}/>
                    <img src={img2} alt="img2" style={{ width: '350px', height: '200px' }}/>
                    <img src={img3} alt="img3" style={{ width: '350px', height: '200px' }}/>
                </div>
            </div>
        </div>

        
    );
}