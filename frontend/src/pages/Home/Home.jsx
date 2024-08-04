import React from "react";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpg";
import img from "../../assets/img.jpg";
import right from "../../assets/right.png";
import image from "../../assets/image.png";
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';



export default function Home() {
    return (
        <div className="flex flex-col bg-black">
            <div className="w-full m-8" >
                <div className="w-full h-50 rounded-lg flex flex-col bg-opacity-50 p-8 justify-center gap-2 mb-0">
                    <div className="text-xl text-green-500 font-pressStart">Hey AI Enthusiast!</div>
                        <div className="flex flex-row gap-2 mb-0">
                            <div className="text-xl font-bold text-white font-sans">Welcome to the</div> 
                                <div className="text-xl text-yellow-400 font-sans font-extrabold">
                                    <TypeAnimation
                                    sequence={[
                                        'AI Community IITB',
                                        2000,
                                        "",
                                        1000,
                                        'AI innovation at IITB',
                                        2000,
                                        '',
                                        1000,
                                        'AI learning hub of IITB',
                                        2000,   
                                        '',
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

            <div className="w-full h-auto rounded-lg flex flex-col bg-opacity-50 p-8 justify-center mb-8">
                <h1 className="font-pressStart text-xl mb-2 text-green-500 underline">Our Mission</h1>
                <div className="text-white text-lg font-sans">
                At <span className="text-yellow-400">AICommunity IITB</span>, we are dedicated to fostering a vibrant and inclusive community for everyone interested in artificial intelligence. Our mission is to empower individuals to explore, learn, and collaborate in the rapidly evolving field of <span className="text-yellow-400">AI</span>. We believe that by bringing together people with diverse backgrounds and expertise, we can drive innovation and create positive impacts on society.

                <ul className="flex flex-wrap gap-2 mt-4">
                {missionPoints.map((point, index) => (
                    <li key={index} className="text-white max-w-[49%] bg-[rgba(50,50,50,.3)] hover:bg-[rgba(50,50,50,.5)] p-4 rounded-lg flex flex-col">
                    <div className="text-lg text-green-500 text-center">{point.title}</div>
                    <p className="text-white text-sm">{point.content}</p>
                    </li>
                ))}
                </ul>
                <div className="text-green-500 mt-4">
                Join us on our journey to explore the possibilities of AI and contribute to a future where technology serves humanity's best interests.
                </div>
            </div>

                
            <div className="w-full h-auto rounded-lg flex flex-col bg-opacity-50 p-8 justify-center mb-8">
                <h1 className="font-pressStart text-xl mb-2 text-green-500 underline">Our History</h1>
                <p className="text-white text-lg font-sans">
                    <span className="text-yellow-400">AICommunity IITB</span> was founded with the vision of creating a collaborative environment for <span className="underline">students</span>, <span className="underline">researchers</span>, and <span className="underline">faculty</span> passionate about artificial intelligence. Recognizing the transformative potential of AI, a group of dedicated professors and students initiated the community to facilitate learning, research, and innovation within the institute.
                    </p>
                    <ol className="list-decimal mt-4">
                    {historyPoints.map((point, index) => (
                        <li key={index} className="text-green-500 mt-4">
                        <p className="text-white"><span className="text-xl text-green-500">{point.title}:</span> {point.content}</p>
                        </li>
                    ))}
                    </ol>
                    <div className="text-green-500 mt-6">
                    Our journey has been marked by a passion for AI and a commitment to excellence. We are proud of our history and excited about the future as we continue to advance AI knowledge and its applications.
                    </div>
            </div>

            <div className="w-full h-auto rounded-lg flex flex-col bg-opacity-50 p-8 justify-center gap-5 m-8">
                <div className="font-pressStart text-5xl text-green-500  text-center">Events</div><br/>
                <div className="text-white text-2xl font-sans">Clash of T-AI-TANS hackathon</div>
            </div>

            <div className="w-full h-auto rounded-lg flex flex-col bg-opacity-50 p-8 justify-center gap-5 m-8">
                <div className="font-pressStart text-5xl text-green-500  text-center">Resources</div><br/>
                <div className="text-white text-lg font-sans">
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

            <div className="w-full h-auto rounded-lg flex flex-col bg-opacity-50 p-8 justify-center gap-5 m-8">
                <div className="font-pressStart text-5xl text-green-500  text-center">Gallery</div><br/>
                <div className="flex flex-col text-white p-8 justify-center mx-auto space-y-8">
                    <img src={img1} alt="img1" style={{ width: '350px', height: '200px' }}/>
                    <img src={img2} alt="img2" style={{ width: '350px', height: '200px' }}/>
                    <img src={img3} alt="img3" style={{ width: '350px', height: '200px' }}/>
                </div>
            </div>
        </div>

    </div>
    );
}



const missionPoints = [
    {
      title: "Education and Accessibility",
      content: "We aim to make AI knowledge and resources accessible to everyone, regardless of their prior experience. Through workshops, webinars, and online courses, we provide opportunities for learning and skill development."
    },
    {
      title: "Collaboration and Innovation",
      content: "We encourage collaboration among our members to spark creativity and innovation. By connecting students, professionals, and enthusiasts, we create a space where ideas can be shared, and projects can flourish."
    },
    {
      title: "Ethical AI Development",
      content: "We are committed to promoting ethical AI practices. Our community advocates for responsible AI development that respects privacy, ensures transparency, and prioritizes fairness."
    },
    {
      title: "Supportive Network",
      content: "Our community is a supportive network where members can share challenges, celebrate achievements, and find mentorship. We believe in building strong connections that foster personal and professional growth."
    }
  ];    


  const historyPoints = [
    {
      title: "Formation and Early Beginnings",
      content: "The community was established as a small group focused on AI study sessions and workshops. Our founding members were driven by a shared enthusiasm for AI and a desire to explore its applications across various fields."
    },
    {
      title: "Expansion and Formal Recognition",
      content: "As interest in AI grew, our community expanded its activities and gained official recognition from the institute. We began organizing guest lectures, hackathons, and collaborative projects that attracted participants from diverse academic backgrounds."
    },
    {
      title: "Continuing Growth and Innovation",
      content: "Today, the AI Community, IITB continues to grow and evolve. We remain committed to fostering a supportive environment where members can learn, innovate, and collaborate. Our annual events, such as AI symposiums and workshops, have become key highlights in the institute’s calendar."
    }
  ];