import React from 'react';
import { Link } from 'react-router-dom';
//import PortfolioContext from '../../context/portfolio/portfolioContext';

const ProjectItem = ({ project: { login, avatar_url } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/project/${login}`} className='btn btn-dark btn-sm my-1'>
          more
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
