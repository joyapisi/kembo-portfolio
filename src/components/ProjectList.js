import React from 'react';
import { Projects } from '../Projects.js';

const ProjectList = () => {
  return (
    <div>
      {Projects.map((project, index) => (
        <div key={index}>
          <h2>{project.title}</h2>
          <p>{project.subtitle}</p>
          <p>{project.description}</p>
          <p>{project.image}</p>
          <p>{project.link}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
