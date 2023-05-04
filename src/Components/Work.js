import React from "react";
import Project from "./Project";
import data from "./data.js";
import FadeInSection from "./Reusable/FadeInFunc";


export default function Work() {
  const projects = data.map(project => {
    return <FadeInSection>
            <Project
              key={project.id}
              demo={project.demo}
              link={project.link}
              description={project.description}
              length={project.descriptionLength}
              image={project.image} 
              />  
              </FadeInSection>
            })

          return (
            <div className='project-frame'>
                {projects}
            </div>
    );
  }
  
  
  