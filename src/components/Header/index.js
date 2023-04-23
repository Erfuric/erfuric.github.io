import React from 'react';

function Header() {
    return (
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h1>My Portfolio</h1>
        </div>
      </header>
    );
  }
  
export default Header;