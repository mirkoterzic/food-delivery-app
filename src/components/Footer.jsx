import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-orange-500 py-6">
      <div className="max-w-[1640px] mx-auto px-4 flex flex-col items-center space-y-4">
        <p className="text-center">Mirko Terzic created this website</p>
        <div className="flex space-x-4 items-center">
          {/* GitHub Profile Link */}
          <a
            href="https://github.com/mirkoterzic"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-orange-400"
          >
            <FaGithub size={24} />
            <span>GitHub Profile</span>
          </a>

          {/* Project Repository Link */}
          <a
            href="https://github.com/mirkoterzic/food-delivery-app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-orange-400"
          >
            <FaGithub size={24} />
            <span>Project Repository</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
