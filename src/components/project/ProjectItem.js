import React from 'react';
import { Link } from 'react-router-dom';
//import PortfolioContext from '../../context/portfolio/portfolioContext';

const ProjectItem = ({ project }) => {
  const { login, avatar_url, bio } = project;
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '90px' }}
      />
      <h3>{login}</h3>
      <p>{bio}</p>
      <div>
        <Link
          to={`/project/${login}`}
          className='btn btn-dark btn-sm my-1'
          params={project}
        >
          more
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
