import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <div className = "Navbar">
            <Link to="/">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to ="/contact">Contact</Link>
            <Link to="/resume">Resume</Link>
        </div>
    )
}