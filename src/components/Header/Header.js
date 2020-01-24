import React from 'react';
import {NavLink} from "react-router-dom";

import './Header.css';

const Header = () => {
  return (
    <div className='Header'>
      <h3>
        <NavLink to='/' exact>Pizza Turtle App</NavLink>
      </h3>
      <ul className='HeaderNav'>
        <li>
          <NavLink to='/dishes' exact>Dishes</NavLink>
        </li>
        <li>
          <NavLink to='/orders' exact>Orders</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;