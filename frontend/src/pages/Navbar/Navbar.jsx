import React , {useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../../assets/logo.png';

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
    <div className="navbar flex pt-4 px-4 gap-10 border-b-[.1em] border-[rgba(255,255,255,.2)]">
      <Link to="/" className="w-20 h-20">
        <img className="w-20 h-20" src={logo} alt="AIC" />
      </Link>
      <div className="flex flex-col justify-end h-20 gap-2 text-white relative">
        <div className="flex gap-4">
          {data.map((item) => (
            <Link
              key={item.name}
              to={item.route}
              className={`${
                active === item.route.split('/')[1] ? 'text-[#FFD700]' : ''
              }`}
              onClick={() => updateActive(item.route.split('/')[1])}
            >
              {item.name}
            </Link>
          ))}
          <Link to="http://127.0.0.1:8000/admin">Login</Link>

        </div>
      </div>
    </div>
  );
}

const data = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Blogs",
    route: "/blogs",
  },
  {
    name: "Projects",
    route: "/projects",
  },
  {
    name: "OurTeam",
    route: "/ourteam",
  },
  {
    name: "FacultyAdvisor",
    route: "/FacAd",
  },
  // {
  //   name: "Login",
  //   route: "http://127.0.0.1:8000/admin"
  // }
]