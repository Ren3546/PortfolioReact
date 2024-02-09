import React from 'react';

const Footer = () => {
  return (
    <div className="Footer flex justify-center items-center bg-gray-500 h-20">
      {/* Etsy */}
      <a href="https://www.etsy.com/ca/shop/RetroFramePerfect" target="_blank" rel="noopener noreferrer">
        <img src="./src/assets/etsy.png" alt="Etsy" className="mr-4 cursor-pointer h-10" />
      </a>
      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/renato-v-b267892b3/" target="_blank" rel="noopener noreferrer">
        <img src="./src/assets/linkedin.png" alt="LinkedIn" className="mr-4 cursor-pointer h-10" />
      </a>
      {/* GitHub */}
      <a href="https://github.com/Ren3546" target="_blank" rel="noopener noreferrer">
        <img src="./src/assets/github.png" alt="GitHub" className="cursor-pointer h-16" />
      </a>
    </div>
  );
};

export default Footer;