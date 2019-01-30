import React from "react";

const Footer = () => {
  return (
    <div className="main-page-footer">
      <div className="footer-content">
       by Nadav Bassell
        <a href="https://github.com/nbassell"><img src={window.githubURL} />Github</a>
        <a href="https://www.linkedin.com/in/nadav-bassell-2344783b"><img src={window.linkedinURL} />LinkedIn</a>
      </div>
    </div>
  )
}

export default Footer;