import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import useSCroll from '../../hooks/useScroll';

const Header = () => {
  const [fixed] = useSCroll(310);

  return (
    <header className={fixed ? 'header fixed' : 'header'}>
      <div className='header-wrapper'>
        <div className='logo'>
          <Link to='/'>
            <p>
              Bora <span>bora</span> Hotel
            </p>
          </Link>
          <p className='more'>For a world class experience</p>
        </div>
        <ul className='navigation'>
          <li>Locations</li>
          <li>Reservations</li>
          <li>Events and accomodation</li>
          <li>special offers</li>
        </ul>
        <div className='social'>
          <i className='fab fa-instagram'></i>
          <i className='fab fa-twitter'></i>
          <i className='fab fa-youtube'></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
