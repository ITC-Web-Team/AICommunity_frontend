import React, { useEffect , useState} from "react";
// import './blog.css';
import axios from "axios";
import { Link } from "react-router-dom";


export default function Blog() {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/blogs/')
    .then((response) => {
      console.log(response.data);
      setBlogs(response.data);
    }) 
    .catch((error) => {
      console.log(error);
      alert("Failed to fetch blogs");
    }); 
  } , []);

  return ( 
    <div className="blog" >
      <div className = "blogsContainer" >
        {blogs.map((blog) => {
          return (
            <Link to={'/blog/' + blog.id} className="oneBlogBox">
              <h1>{blog.title}</h1>
              <div className="cont">
                <p>{blog.authors}</p>
                <p>{blog.date}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  );
}
