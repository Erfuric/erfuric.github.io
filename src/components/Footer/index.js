import React from 'react';

import githubLogo from '../../assets/images/GitHub_Logo.png';
import linkedinLogo from '../../assets/images/LI-In-Bug.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-media">
        <a href="https://github.com/erfuric" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" />
        </a>
        <a href="https://linkedin.com/in/callum-mackintosh-7bb2ab202" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" />
        </a>
      </div>
      <div className="attribution">
        <p>© 2023 Callum Mackintosh. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
