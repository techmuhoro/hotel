import React from 'react';
import Header from '../Header';
import Tail from '../Tail';
import Offers from '../Offers';
import Footer from '../Footer';
import Reviews from '../Reviews';

const Home = () => {
  return (
    <div className='container'>
      <Header />
      <Tail />
      <Offers />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
