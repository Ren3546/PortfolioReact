import React from 'react';
import Etsy from '../assets/etsy.png';
import Linkedin from '../assets/linkedin.png';
import Github from '../assets/github.png';

const Footer = () => {
  return (
    <div className="Footer flex justify-center items-center bg-gray-500 h-20">
      {/* Etsy */}
      <a href="https://www.etsy.com/ca/shop/RetroFramePerfect" target="_blank" rel="noopener noreferrer">
        <img src= {Etsy} alt="Etsy" className="mr-4 cursor-pointer h-10" />
      </a>
      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/renato-v-b267892b3/" target="_blank" rel="noopener noreferrer">
        <img src={Linkedin} alt="LinkedIn" className="mr-4 cursor-pointer h-10" />
      </a>
      {/* GitHub */}
      <a href="https://github.com/Ren3546" target="_blank" rel="noopener noreferrer">
        <img src={Github} alt="GitHub" className="cursor-pointer h-16" />
      </a>
    </div>
  );
};

export default Footer;