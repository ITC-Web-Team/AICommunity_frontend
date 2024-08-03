import React from 'react'
// import './project.css'

function Project() {
  return (
    <div className="Project">
        {
            data.map((project) => {
                return (
                    <div className="project_item ">
                        <span>
                            <h1 className='project_item_heading'>{project.name}</h1>
                            <p>{project.description}</p>
                        </span>
                        <a href={project.link}>
                            <img src={project.img} alt={project.name} />
                        </a>
                    </div>
                )
            })
        }
    
    </div>  
  )
}

export default Project


const data = [
    {
        name : "InstiGPT",
        description : "InstiGPT is a conversational chatbot developed by the AI Community of IIT Bombay. It is designed to provide information and engage in conversations related to IIT Bombay, its campus, academics, student life, and notable achievements. InstiGPT utilizes the Institute's data to generate informative and contextually relevant responses, aiming to assist users in their queries about IIT Bombay.",
        img : "/img/instigpt.png",
        link : "https://gymkhana.iitb.ac.in/instigpt/",
    }
]