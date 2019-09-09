import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back
      </Link>
      <p>Email: jonjonclark@gmail.com </p>
      <p>Cell: +27 76 312 6356</p>
    </Fragment>
  );
};

export default Contact;
