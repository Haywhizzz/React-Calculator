import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div id="math-magicians">
      Math Magicians
    </div>
    <div id="links">
      <Link to="/" className="link-style">Home</Link>
      <Link to="/calculator" className="link-style">Calculator</Link>
      <Link to="/quote" className="link-style">Quote</Link>
    </div>
  </nav>
);

export default Navbar;
