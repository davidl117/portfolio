import React from "react";
import { faCss3, faHtml5, faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FadeInSide from "./Reusable/FadeInSide";


export default function Skills() {
    return (
        <>
            <h3 className="skill-section-h3">My Technical Skills</h3>
            <section className='skill-section'>
                <FadeInSide>
                    <p className="skill-layout">HTML
                        <FontAwesomeIcon icon={faHtml5} size="2xl" />
                    </p>
                </FadeInSide>
                <FadeInSide>
                    <p className="skill-layout">CSS
                        <FontAwesomeIcon icon={faCss3} size="2xl" />
                    </p>
                </FadeInSide>
                <FadeInSide>
                    <p className="skill-layout">JavaScript
                        <FontAwesomeIcon icon={faJs} size="2xl" />
                    </p>
                </FadeInSide>
                <FadeInSide>
                    <p className="skill-layout">React
                        <FontAwesomeIcon icon={faReact} size="2xl" />
                    </p>
                </FadeInSide>
                <FadeInSide>
                    <p className="skill-layout">Node.Js
                        <FontAwesomeIcon icon={faNodeJs} size="2xl" />
                    </p>
                </FadeInSide>
            </section>
        </>
    )
}