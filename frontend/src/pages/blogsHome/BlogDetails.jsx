import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
// import './blog.css'

function BlogDetails() {
    const [blog, setBlog] = useState({});
    const {id}=useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/blog/${id}`)
        .then((response) => {
            setBlog(response.data)
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
            alert("Failed to fetch blog")
        })
    }, [id])

  return (
    <div className='blogdetails' >
        <h1>{blog.title}</h1>
        <div className="cont">
            <p>{blog.authors}</p>
            <p>{blog.date}</p>
        </div>
        <p className='blog_body'>
            <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                <div dangerouslySetInnerHTML={{ __html: blog. content }} />
            </pre>
        </p>
       
    </div>
  )
}

export default BlogDetails