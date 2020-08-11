import React from 'react';
import pictureURL from '../../assets/avatar.jpg';
import './Picture.css';
const Picture = () => {
  return (
    <div>
      <img src={pictureURL} className="picture" />
    </div>
  );
};

export default Picture;
