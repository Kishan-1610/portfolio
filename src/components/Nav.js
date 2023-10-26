import { Link } from "react-router-dom";
import './style.css';

function Nav() {
    return (
        <nav className="navbar">
            <Link to="/" class="navbar-brand">
            <div className="nage ms-3">
                <div style={{ height: '5px', width: '20px', marginBottom: '2px' }} className="bg-black"></div>
                <div style={{ height: '5px', width: '20px', marginBottom: '2px' }} className="bg-black"></div>
                <div style={{ height: '5px', width: '20px', marginBottom: '2px' }} className="bg-black"></div>
            </div>

            </Link>
            <div className="nav d-flex flex-row">
                <Link to="/home" className="kal nav-link orange-nav">My Info</Link>
                <Link to="/about" className="kal nav-link orange-nav">Education</Link>
                <Link to="/blog" className="kal nav-link orange-nav">Skills</Link>
                <Link to="/contact" className="kal nav-link orange-nav">Projects</Link>
            </div>
        </nav>
    );
}

export default Nav;