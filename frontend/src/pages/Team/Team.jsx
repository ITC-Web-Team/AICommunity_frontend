import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import './Team.css' 
import { Linkedin, Github } from 'lucide-react'

function Team() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:8000/member`)
    .then((response) => {
        setData(response.data)
        console.log(response.data)
    })
    .catch((error) => {
        console.log(error)
        alert("Failed to fetch blog")
    })
  }, [])

  return (
    <div className='team'>
      <h1>Our Team</h1>
      <div className='team-members'>
      {/* sort data based on data.position  */}
        {data.sort((a, b) => a.position - b.position).map((member) => (
          <div className='team-member'>
            {/* <img src={ "http://localhost:8000/" + member.pic} alt={member.name} /> */}
            <div className='team-member-image'>
              <img src={ "http://localhost:8000/" + member.pic} alt={member.name} />
            </div>
            <div className='team-member-details'>
              <h2>{member.name}</h2>
              <p>
                {member.position === '1' ? 'Founder' : member.position === '2' ? 'Manager' : member.position === '3' && 'Convener' }
              </p>
              <p>{member.email}</p>
              <span>
                <a href={member.linkedin} target='_blank' rel='noreferrer'>
                  <Linkedin />
                </a>
                <a href={member.github} target='_blank' rel='noreferrer'>
                  <Github />
                </a>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team