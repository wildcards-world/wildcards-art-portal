import React, { Fragment } from 'react';
import Users from '../users/Users';

const About = () => {
  return (
    <Fragment>
      <h1>About me</h1>
      <p>Masters in Data Science & Fintech.</p>
      <p>Honours in Computer Science.</p>
      <p>Passed CFA level I & II exams.</p>
      <p>Majors in Finance & Mathematics.</p>
      <Users />
    </Fragment>
  );
};

export default About;
