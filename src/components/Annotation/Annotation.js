import React from 'react';
import './Annotation.css';
import PropTypes from 'prop-types';

const Annotaton = (props) => {
  return <h2 className="annotation">{props.annotations.keyWord}</h2>;
};

Annotaton.propTypes = {
  annotations: PropTypes.object,
};

export default Annotaton;
