import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import './App.css';
import Home from './pages/Home/Home.jsx';
import Blog from './pages/blogsHome/blog.jsx';
import Layout from './pages/Layout/Layout.jsx';
import Project from './pages/Project/project.jsx';
import BlogDetails from './pages/blogsHome/BlogDetails.jsx';
import Team from './pages/Team/Team.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import FacultyAdvisor from './pages/FacAd/FacAd.jsx';
import Member from './pages/Member/Member.jsx';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/ourteam" element={<Team />} />
          <Route path="/member/:id" element={<Member />} />
          <Route path="/facad" element={<FacultyAdvisor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
