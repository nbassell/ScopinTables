import React from "react";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-name">
          <p>Scopin'Tables was built by Nadav Bassell using a</p>
          <p>React/Redux frontend and Ruby on Rails/PostgreSQL for the backend.</p>
          <p>Inspired by the web application OpenTable.</p>
        </div>
        <ul className="footer-links">
          <li><a href="https://nbassell.github.io/" target="_blank">{<FaCode className="icon" size={15}/>}<span>Personal Site</span></a></li>
          <li><a href="https://github.com/nbassell" target="_blank">{<FaGithub className="icon" size={15}/>}<span>Github</span></a></li>
          <li><a href="https://www.linkedin.com/in/nbassell" target="_blank">{<FaLinkedin className="icon" size={15}/>}<span>LinkedIn</span></a></li>
          <li><a href="https://angel.co/nbassell" target="_blank">{<FaAngellist className="icon" size={15}/>}<span>AngelList</span></a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;