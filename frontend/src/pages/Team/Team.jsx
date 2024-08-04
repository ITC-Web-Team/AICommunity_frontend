import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Linkedin, Github } from 'lucide-react'
import './Team.css'

function Team() {
  const [data, setData] = useState([]);

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
        {data.sort((a, b) => {
          if (b.year !== a.year) {
            return b.year - a.year;
          }
          return a.position - b.position;
        }).map((member) => (
          <Link to={`/member/${member.id}`} key={member.id} className='team-member'>
            <div className='team-member-image'>
              <img src={"http://localhost:8000/" + member.pic} alt={member.name} />
            </div>
            <div className='team-member-details'>
              <h2>{member.name}</h2>
              <p>{member.position === '1' ? 'Founder' : member.position === '2' ? 'Manager' : member.position === '3' && 'Convener'} {member.year}</p>
              <p>{member.department}</p>
              <p>{member.email}</p>
              <p>{member.phone}</p>
              <span>
                <a href={member.linkedin} target='_blank' rel='noreferrer'>
                  <Linkedin />
                </a>
                <a href={member.github} target='_blank' rel='noreferrer'>
                  <Github />
                </a>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Team;