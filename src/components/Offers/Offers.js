import { useEffect } from 'react';
import './Offers.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Card from './card.jpg';

export default () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease - out - sine',
      once: true,
    });
  }, []);

  return (
    <div className='offers'>
      <h1>Servives we offer</h1>
      <div className='offers-wrapper'>
        <div className='cards'>
          <div className='card' data-aos='zoom-in-right' data-aos-delay='300'>
            <div className='img'>
              <img src={Card} alt='' />
            </div>
            <div className='body'>
              <p>Room services</p>
            </div>
          </div>
          <div className='card' data-aos='zoom-in-right' data-aos-delay='600'>
            <div className='img'>
              <img src={Card} alt='' />
            </div>
            <div className='body'>
              <p>Free parking</p>
            </div>
          </div>
          <div className='card' data-aos='zoom-in-right' data-aos-delay='1000'>
            <div className='img'>
              <img src={Card} alt='' />
            </div>
            <div className='body'>
              <p>Breakfast</p>
            </div>
          </div>
          <div className='card' data-aos='zoom-in-left' data-aos-delay='1400'>
            <div className='img'>
              <img src={Card} alt='' />
            </div>
            <div className='body'>
              <p>Free drinks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
