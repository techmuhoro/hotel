import { useState, useEffect } from 'react';
import useScroll from '../../hooks/useScroll';
import { Link } from 'react-router-dom';
import './MobileNav.css';

const MobileNav = () => {
  const [fixed] = useScroll(300);
  //   const [fixed, setIsFixed] = useState(() =>
  //     window.pageYOffset > 310 ? true : false
  //   );

  //   const scrollListener = () =>
  //     window.pageYOffset > 310 ? setIsFixed(true) : setIsFixed(false);

  //   useEffect(() => {
  //     window.addEventListener('scroll', scrollListener);

  //     return () => window.removeEventListener('scroll', scrollListener);
  //   }, []);

  return (
    <div>
      <header className={fixed ? 'm-header fixed' : 'm-header'}>
        <div className='m-header-wrapper'>
          <div className='logo'>
            <Link to='/'>
              <p>
                Bora <span>bora</span> Hotel
              </p>
            </Link>
            <p className='more'>For a world class experience</p>
          </div>
          <div className='menu-icon'>
            <span>
              <i className='fas fa-bars'></i>
            </span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default MobileNav;
