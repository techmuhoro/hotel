import './Footer.css';
import { useState } from 'react';

export default () => {
  const fullYear = () => new Date().getFullYear();
  const [currentYear, setCurrentYear] = useState(fullYear);

  return (
    <footer className='footer'>
      <div className='footer-wrapper'>
        <div className='col-1'>
          <h3>Important links</h3>
          <ul>
            <li>
              <a href='###'> Hotel pricing</a>
            </li>
            <li>
              <a href='###'> Make reservation</a>
            </li>
            <li>
              <a href='#'> Give a feedback</a>
            </li>
            <li>
              <a href='#'> Questionnarre</a>
            </li>
            <li>
              <a href='#'>Quality statement</a>
            </li>
          </ul>
        </div>
        <div className='col-2'>
          <h3>Get updates</h3>
          <form action=''>
            <input placeholder='enter your email' />
            <br />
            <div>
              <button>Male</button>
              <button>Female</button>
            </div>
          </form>
        </div>
        <div className='col-3'>
          <h3>Partners</h3>
          <ul>
            <li>
              <a href='#'>Ministry of tourism</a>
            </li>
            <li>
              <a href='#'>Google tour</a>
            </li>
            <li>
              <a href='#'>State of Gergia</a>
            </li>
            <li>
              <a href='#'>Tourism board</a>
            </li>
            <li>
              <a href='#'>Air Africa</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='copyright'>
        <p>
          Copyright @Borabora hotel All rights reserved{' '}
          <span>{currentYear}</span>
        </p>
      </div>
    </footer>
  );
};
