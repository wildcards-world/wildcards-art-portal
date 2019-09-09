import React, { Fragment } from "react";
import Users from "../users/Users";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back
      </Link>
      <h1>About me</h1>
      <a
        href="https://www.linkedin.com/in/jonathan-clark-637344143/"
        target="_blank"
      >
        <i className="fab fa-linkedin-in icon-primary"></i>
      </a>
      <p>Masters in Data Science & Fintech.</p>
      <p>Honours in Computer Science.</p>
      <p>Passed CFA level I & II exams.</p>
      <p>Majors in Finance & Mathematics.</p>
      <Users />
    </Fragment>
  );
};

export default About;
