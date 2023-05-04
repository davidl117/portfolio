import React from "react";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Project({description, length, link, image, demo}) {
    
        
    const[isExpanded, setIsExpanded] = useState(false); 
    
    function toggleParagraph() {
        setIsExpanded(!isExpanded);
    };

    return (
        <section
            id="c2" 
            className="image-section-container"
        >            
        <div className="image-container">
                <img className="project-img"
                    src={image} 
                    alt="" 
                />
                 <span className="responsive-demo-btn-container">
                    <a href={demo} target="_blank" rel="noreferrer">
                        <button className="responsive-demo-buttons">
                            Live Demo
                        </button>
                    </a>
                    <a href={link} target="_blank" rel="noreferrer">
                        <button className="responsive-demo-buttons">
                            <FontAwesomeIcon icon={faGithub} /> Source Code
                        </button>
                    </a>
                 </span>
                 <span className="description-responsive" >{description}</span>
            </div>
            <p className="project-dscrp">
                {isExpanded ? description : `${description.slice(0, length)}...`}
                <span>
                    <button className="display-text-btn" onClick={toggleParagraph}>
                        {isExpanded ? "Read Less": 'Read More'}       
                    </button>
                    <span className="demo-buttons-container">    
                        <a href={demo} target="_blank" rel="noreferrer">
                            <button className="demo-buttons">
                                Live Demo
                            </button>
                        </a>
                        <a href={link} target="_blank" rel="noreferrer">
                            <button className="demo-buttons">
                               <FontAwesomeIcon icon={faGithub} /> Source Code
                            </button>
                        </a>
                    </span>
                </span> 
            </p>
        </section>
    )
}