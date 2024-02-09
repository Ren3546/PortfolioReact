import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [currentPath, setCurrentPath] = useState('/');
  const location = useLocation();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  return (
    <div>
      <NavLink to="/" className="mr-4" isActive={(match, location) => location.pathname === "/"}>
        <button className={`nav-button ${currentPath === "/" ? "bg-blue-700" : "bg-blue-500 hover:bg-blue-700"}`}>
          About Me
        </button>
      </NavLink>
      <NavLink to="/portfolio" className="mr-4" isActive={(match, location) => location.pathname === "/portfolio"}>
        <button className={`nav-button ${currentPath === "/portfolio" ? "bg-blue-700" : "bg-blue-500 hover:bg-blue-700"}`}>
          Portfolio
        </button>
      </NavLink>
      <NavLink to="/contact" className="mr-4" isActive={(match, location) => location.pathname === "/contact"}>
        <button className={`nav-button ${currentPath === "/contact" ? "bg-blue-700" : "bg-blue-500 hover:bg-blue-700"}`}>
          Contact
        </button>
      </NavLink>
      <NavLink to="/resume" isActive={(match, location) => location.pathname === "/resume"}>
        <button className={`nav-button ${currentPath === "/resume" ? "bg-blue-700" : "bg-blue-500 hover:bg-blue-700"}`}>
          Resume
        </button>
      </NavLink>
    </div>
  );
}