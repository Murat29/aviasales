import React from 'react';
import './Preloader.css';

interface ItabsProps {
  isShow: boolean;
}

const Preloader: React.FC<ItabsProps> = ({ isShow }) => {
  return (
    <div className={`preloader ${isShow && 'preloader_show'}`}>
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  );
};

export default Preloader;
