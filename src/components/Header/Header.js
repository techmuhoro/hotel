import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import Hero from '../Hero';
import './Header.css';
import MobileNav from '../MobileNav';
import useMinWidth from '../../hooks/useMinWidth';

const Header = () => {
  const [state] = useMinWidth(1050);
  // const [mobileNav, setMobileNav] = useState(() =>
  //   window.innerWidth < 1050 ? true : false
  // );

  // const resizeListener = e =>
  //   window.innerWidth < 1050 ? setMobileNav(true) : setMobileNav(false);

  // useEffect(() => {
  //   window.addEventListener('resize', resizeListener);

  //   return () => window.removeEventListener('resize', resizeListener);
  // }, []);

  return (
    <header>
      {state ? <MobileNav /> : <Nav />}

      <Hero />
    </header>
  );
};

export default Header;
