import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
// import logo from "../logo.png"



export default function Navigation() {

    const[menuOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(prevOpen => !prevOpen)
    };

    function closeMenu() {
        toggleMenu(false)
    }

    return (
        <nav className="nav-container">
                  {/* <img src={logo} className='logo' alt=""/> */}

            <button className={` ${menuOpen ? "menu-open transition": "menu-close transition"}`}>
                <FontAwesomeIcon 
                             onClick={toggleMenu}
                             className="ham-bars" 
                             icon={faBars}
                             />
            </button>
            <div className={` "li-display" ${menuOpen ? "li-display": "li-none"}`}>
                <li className="menu-link">
                    <a href="#c1" onClick={() => closeMenu()}>About Me</a>
                </li>
                <li className="menu-link">
                    <a href="#c2" onClick={() => closeMenu()}>Work</a>
                </li>
                <li className="menu-link">
                    <a href="#c3" onClick={() => closeMenu()}>Contact</a>
                </li>
            </div>
        </nav>
    )
}

