import React from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Footer() {
    return (
        <footer className="media-links">
                <a href="https://github.com/davidl117" target={"_blank"}  className='tooltip'>
                    <FontAwesomeIcon icon={faGithub} size='2xl'/>
                    <span className='tooltiptext'>Github</span>
                </a>  
                <a href="" target={""} className='tooltip'>
                    <FontAwesomeIcon icon={faLinkedin} size='2xl' />
                    <span className='tooltiptext'>LinkedIn</span>
                </a>  
                
        </footer>
    )
}
