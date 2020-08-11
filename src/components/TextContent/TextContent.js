import React from 'react';
import PropTypes from 'prop-types';
import './TextContent.css';
const TextContent = (props) => {
  return <p className="textcontent">{props.textcontent}</p>;
};

TextContent.propTypes = {
  textcontent: PropTypes.string,
};
export default TextContent;
