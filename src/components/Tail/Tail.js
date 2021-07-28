import React, { useEffect } from 'react';
import Room from './room.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Tail.css';

const Tail = () => {
  useEffect(() => {
    AOS.init({
      delay: 200,
    });
  }, []);

  return (
    <div className='about'>
      <h1 className='heading'>Enjoy Classical 5 star rooms</h1>
      <div className='about-wrapper'>
        <div className='background'></div>
        <div className='behind'></div>
        <div className='img' data-aos-delay='700' data-aos='fade-left'>
          <img src={Room} alt='' />
        </div>
        <div className='left' data-aos-offset='200' data-aos='fade-right'></div>
      </div>
    </div>
  );
};

export default Tail;
