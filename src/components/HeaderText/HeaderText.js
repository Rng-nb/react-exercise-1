import React from 'react';
import './HeaderText.css';
const textOut = ['HELLO,', 'MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV'];
const HeaderText = () => {
  return textOut.map((item) => (
    <h1 key={item} className="textout">
      {item}
    </h1>
  ));
};

export default HeaderText;
