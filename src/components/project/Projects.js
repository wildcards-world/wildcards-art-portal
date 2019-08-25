import React, { useState, useContext } from 'react';
import ProjectItem from './ProjectItem';
import PortfolioContext from '../../context/portfolio/portfolioContext';

const Projects = () => {
  const listState = useState({
    project: [
      {
        login: 'lima capital',
        avatar_url: 'https://avatars3.githubusercontent.com/u/20556729?v=4',
        id: 1
      },
      {
        login: 'Stackr',
        avatar_url: 'https://avatars3.githubusercontent.com/u/20556729?v=4',
        id: 2
      },
      {
        login: 'Wildcards',
        avatar_url: 'https://avatars3.githubusercontent.com/u/20556729?v=4',
        id: 3
      }
    ]
  });

  return (
    <div style={userStyle}>
      {listState.map(project => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem'
};

export default Projects;
