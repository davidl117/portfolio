import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Skills from "./Skills";


export default function Header() {
    return (
        <header className="header" id="c1">
        <div className='header-container'>
            <h1>Hey, I'm <span className="bold-name">David Lasky</span>.</h1>
            <h3>I am a self-taught <span className="bold-name">Front-End Web Developer</span>.
                I am always striving to learn new technologies and techniques to further my skills
                as a developer. I shall remain a student for life.
            </h3>
            <h4>My hobbies: Guitar, hiking, riding motorcycles.</h4>
            <hr></hr>
            <br></br>
            <a href="Davids-resume.pdf" download="Davids-resume.pdf" ><p>Download Resume <FontAwesomeIcon icon={faDownload} /></p></a>
            <a href='#c2'><button className="header-workBtn">My Work</button></a>
        </div> 
        <div>
        {Skills()}
        </div>
        </header>
    )
}
