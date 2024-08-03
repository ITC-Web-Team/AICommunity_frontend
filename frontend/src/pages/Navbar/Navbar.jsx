import React , {useEffect, useState} from "react";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
// import './Navbar.css';
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen , setIsOpen] = useState(false);
  const [active, setActive] = useState('');

  const location = useLocation();

  const updateActive = (route) => {
    setActive(route);
  };

  useEffect(() => {
    const currentPath = location.pathname;
    const activeRoute = currentPath.split('/')[1]; 
    setActive(activeRoute);
  }, [location]);
  return (

    <div className="navbar">
      <div className="navbar_logo_container">
        <Link to="/" className="navbar_logo"><img className="logo_img" src={logo} alt="AIC" /></Link>
      </div>
      <div className={`navbar__links ${isOpen ? 'open' : ''}`}>
        <Link to="/" className={`navbar__link ${active === '' && 'active'}`} onClick={() => updateActive('')}> Home </Link>
        <Link to="/blogs" className={`navbar__link ${active === 'blogs' && 'active'}`} onClick={() => updateActive('blogs')}> Blogs </Link>
        <Link to="/ourteam" className={`navbar__link ${active === 'team' && 'active'}`} onClick={() => updateActive('team')}> Our Team </Link>
        <Link to="/projects" className={`navbar__link ${active === 'projects' && 'active'}`} onClick={() => updateActive('projects')}> Projects </Link>
        <Link to="/FacAd" className={`navbar__link ${active === 'FacAd' && 'active'}`} onClick={() => updateActive('FacAd')}> Faculty Advisor </Link>
      </div>
    </div>
  );
}