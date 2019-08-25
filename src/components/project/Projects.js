import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

export default class Projects extends Component {
  state = {
    projects: [
      {
        login: 'moose-code',
        id: 20556729,
        node_id: 'MDQ6VXNlcjIwNTU2NzI5',
        avatar_url: 'https://avatars3.githubusercontent.com/u/20556729?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/moose-code',
        html_url: 'https://github.com/moose-code',
        followers_url: 'https://api.github.com/users/moose-code/followers',
        following_url:
          'https://api.github.com/users/moose-code/following{/other_user}',
        gists_url: 'https://api.github.com/users/moose-code/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/moose-code/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/moose-code/subscriptions',
        organizations_url: 'https://api.github.com/users/moose-code/orgs',
        repos_url: 'https://api.github.com/users/moose-code/repos',
        events_url: 'https://api.github.com/users/moose-code/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/moose-code/received_events',
        type: 'User',
        site_admin: false,
        name: 'JonJon Clark',
        company: null,
        blog: 'https://jonjonclark.com',
        location: 'Cape Town',
        email: null,
        hireable: null,
        bio:
          'Math, finance, data science, blockchain, chess, these are some of my favourite things.',
        public_repos: 13,
        public_gists: 1,
        followers: 9,
        following: 14,
        created_at: '2016-07-20T10:59:35Z',
        updated_at: '2019-08-24T09:02:09Z'
      },
      {
        login: 'DenhamPreen',
        id: 26438203,
        node_id: 'MDQ6VXNlcjI2NDM4MjAz',
        avatar_url: 'https://avatars3.githubusercontent.com/u/26438203?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/DenhamPreen',
        html_url: 'https://github.com/DenhamPreen',
        followers_url: 'https://api.github.com/users/DenhamPreen/followers',
        following_url:
          'https://api.github.com/users/DenhamPreen/following{/other_user}',
        gists_url: 'https://api.github.com/users/DenhamPreen/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/DenhamPreen/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/DenhamPreen/subscriptions',
        organizations_url: 'https://api.github.com/users/DenhamPreen/orgs',
        repos_url: 'https://api.github.com/users/DenhamPreen/repos',
        events_url: 'https://api.github.com/users/DenhamPreen/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/DenhamPreen/received_events',
        type: 'User',
        site_admin: false,
        name: 'Denham Preen',
        company: null,
        blog: 'denhampreen.com',
        location: 'Cape Town',
        email: null,
        hireable: true,
        bio:
          'Cape Town based developer, full stack developer with a stronger focus on front end. Current interests in blockchain technologies. ',
        public_repos: 11,
        public_gists: 1,
        followers: 8,
        following: 3,
        created_at: '2017-03-15T15:00:36Z',
        updated_at: '2019-08-12T19:28:24Z'
      },
      {
        login: 'JasoonS',
        id: 6032276,
        node_id: 'MDQ6VXNlcjYwMzIyNzY=',
        avatar_url: 'https://avatars1.githubusercontent.com/u/6032276?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/JasoonS',
        html_url: 'https://github.com/JasoonS',
        followers_url: 'https://api.github.com/users/JasoonS/followers',
        following_url:
          'https://api.github.com/users/JasoonS/following{/other_user}',
        gists_url: 'https://api.github.com/users/JasoonS/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/JasoonS/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/JasoonS/subscriptions',
        organizations_url: 'https://api.github.com/users/JasoonS/orgs',
        repos_url: 'https://api.github.com/users/JasoonS/repos',
        events_url: 'https://api.github.com/users/JasoonS/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/JasoonS/received_events',
        type: 'User',
        site_admin: false,
        name: 'Jason Smythe',
        company: null,
        blog: '',
        location: null,
        email: null,
        hireable: null,
        bio: 'Blockchain Engineer from Cape Town',
        public_repos: 123,
        public_gists: 8,
        followers: 34,
        following: 61,
        created_at: '2013-11-25T15:35:52Z',
        updated_at: '2019-08-23T10:15:45Z'
      }
    ]
  };

  render() {
    return (
      <div style={userStyle}>
        {this.state.projects.map(project => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem'
};
