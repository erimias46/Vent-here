import React from 'react'
import { Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <nav className="menu-bar">
        <div className="group">
          <Link to="/" className="item title">
            <Text fontSize="2xl">Vent Here</Text>
          </Link>
        </div>
        <div className="group">
          <Link to="/write" className="item">
            Write Vent
          </Link>
          <Link to="/about" className="item">
            About
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header