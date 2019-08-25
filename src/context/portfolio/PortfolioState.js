import React, { useReducer } from 'react';
import portfolioContext from './portfolioContext';
import portfolioReducer from './portfolioReducer';

const PortfolioState = props => {
  const initialState = {
    projects: [
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
    ],
    project: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(portfolioReducer, initialState);

  return (
    <portfolioContext.Provider
      value={{
        projects: state.projects,
        project: state.project,
        repos: state.repos,
        loading: state.loading
      }}
    >
      {props.children}
    </portfolioContext.Provider>
  );
};

export default PortfolioState;
