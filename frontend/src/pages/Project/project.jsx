import React from 'react'
import { useEffect , useState} from "react";
import axios from "axios";

function Project() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/projects/')
        .then((response) => {
            console.log(response.data);
            setData(response.data);
        }) 
        .catch((error) => {
            console.log(error);
            alert("Failed to fetch projects");
        }); 
    },[]);
  return (
    <div className="w-full flex flex-col gap-4">
        {
            data.map((project) => {
                return (
                    <div className="text-white bg-[rgba(50,50,50,.3)] hover:bg-[rgba(50,50,50,.5)]  p-4 rounded-lg flex gap-4" key={project.name}>
                        <span>
                            <h1 
                                className='text-2xl font-bold'
                            >{project.name}</h1>
                            <p>{project.description}</p>
                        </span>
                        <a href={project.link}>
                            <img 
                                src={`http://localhost:8000${project.img}`}
                                alt={project.name} 
                            />
                        </a>
                    </div>
                )
            })
        }
    
    </div>  
  )
}

export default Project
