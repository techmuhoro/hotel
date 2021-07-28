import React from 'react';
import './Hero.css';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 0px;
  width: 200px;
  border: ${props => (props.secondary ? 'none' : '2px solid white')};
  background: ${props =>
    props.secondary ? 'rgb(0, 255, 149)' : 'transparent'};
  color: white;
  font-size: 1.1rem;
  border-radius: 10px;
  margin-left: ${props => (props.left ? '50px' : '0px')};
`;

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-wrapper'>
        <h1>Its time to make new memories</h1>
        <h2>
          Explore your world with a fun filled vacations meet us here{' '}
          <i className='fas fa-arrow-down'></i>
        </h2>
        <div className='call-to-action'>
          <Button>Reservation</Button>
          <Button className='btn-last' left secondary>
            Our prices
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
