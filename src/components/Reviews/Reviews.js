import './Reviews.css';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useState } from 'react';
import useMinWidth from '../../hooks/useMinWidth';
import userImage from './user.jpg';
import userImage2 from './user2.jpg';
import userImage3 from './user3.jpg';
import userImage4 from './user4.jpg';
import userImage5 from './user5.jpeg';
import userImage6 from './user6.jpeg';

export default function (props) {
  const [state] = useMinWidth(840);
  const numSlides = state ? 1 : 2;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slidesPerView: numSlides,
    spacing: 30,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });
  return (
    <div className='reviews'>
      <h1 className>Reviews</h1>
      <div className='reviews-wrapper'>
        <div className='navigation-wrapper'>
          <div ref={sliderRef} className='keen-slider'>
            <div className='keen-slider__slide number-slide1'>
              <div className='slide-wrapper'>
                <div className='quote'>
                  <p className='qoute-icon'>
                    <i className='fa fa-quote-left'></i>
                  </p>
                  <p className='qoute-text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatem, itaque ex ad tenetur aspernatur doloribus libero
                    nisi, voluptate omnis sunt aut vitae mollitia vero numquam,
                    quibusdam nihil rerum incidunt eligendi?
                  </p>
                </div>
                <div className='user'>
                  <div className='user-image'>
                    <img
                      src={userImage}
                      alt='reviwer'
                      width='50px'
                      height='50px'
                    />
                  </div>
                  <div className='user-details'>
                    <p>Jonathan Welbeck</p>
                    <p>cheif business exutive</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='keen-slider__slide number-slide2'>
              <div className='slide-wrapper'>
                <div className='quote'>
                  <p className='qoute-icon'>
                    <i className='fa fa-quote-left'></i>
                  </p>
                  <p className='qoute-text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatem, itaque ex ad tenetur aspernatur doloribus libero
                    nisi, voluptate omnis sunt aut vitae mollitia vero numquam,
                    quibusdam nihil rerum incidunt eligendi?
                  </p>
                </div>
                <div className='user'>
                  <div className='user-image'>
                    <img
                      src={userImage2}
                      alt='reviwer'
                      width='50px'
                      height='50px'
                    />
                  </div>
                  <div className='user-details'>
                    <p>Kim little</p>
                    <p>Photographer and design</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='keen-slider__slide number-slide3'>
              <div className='slide-wrapper'>
                <div className='quote'>
                  <p className='qoute-icon'>
                    <i className='fa fa-quote-left'></i>
                  </p>
                  <p className='qoute-text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatem, itaque ex ad tenetur aspernatur doloribus libero
                    nisi, voluptate omnis sunt aut vitae mollitia vero numquam,
                    quibusdam nihil rerum incidunt eligendi?
                  </p>
                </div>
                <div className='user'>
                  <div className='user-image'>
                    <img
                      src={userImage3}
                      alt='reviwer'
                      width='50px'
                      height='50px'
                    />
                  </div>
                  <div className='user-details'>
                    <p>Bob Emery</p>
                    <p>Constuction manager</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='keen-slider__slide number-slide4'>
              <div className='slide-wrapper'>
                <div className='quote'>
                  <p className='qoute-icon'>
                    <i className='fa fa-quote-left'></i>
                  </p>
                  <p className='qoute-text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatem, itaque ex ad tenetur aspernatur doloribus libero
                    nisi, voluptate omnis sunt aut vitae mollitia vero numquam,
                    quibusdam nihil rerum incidunt eligendi?
                  </p>
                </div>
                <div className='user'>
                  <div className='user-image'>
                    <img
                      src={userImage4}
                      alt='reviwer'
                      width='50px'
                      height='50px'
                    />
                  </div>
                  <div className='user-details'>
                    <p>Louis kina</p>
                    <p>Software engineer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='keen-slider__slide number-slide5'>
              <div className='slide-wrapper'>
                <div className='quote'>
                  <p className='qoute-icon'>
                    <i className='fa fa-quote-left'></i>
                  </p>
                  <p className='qoute-text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatem, itaque ex ad tenetur aspernatur doloribus libero
                    nisi, voluptate omnis sunt aut vitae mollitia vero numquam,
                    quibusdam nihil rerum incidunt eligendi?
                  </p>
                </div>
                <div className='user'>
                  <div className='user-image'>
                    <img
                      src={userImage5}
                      alt='reviwer'
                      width='50px'
                      height='50px'
                    />
                  </div>
                  <div className='user-details'>
                    <p>Mary shika</p>
                    <p>NGO executive</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='keen-slider__slide number-slide6'>
              <div className='slide-wrapper'>
                <div className='quote'>
                  <p className='qoute-icon'>
                    <i className='fa fa-quote-left'></i>
                  </p>
                  <p className='qoute-text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatem, itaque ex ad tenetur aspernatur doloribus libero
                    nisi, voluptate omnis sunt aut vitae mollitia vero numquam,
                    quibusdam nihil rerum incidunt eligendi?
                  </p>
                </div>
                <div className='user'>
                  <div className='user-image'>
                    <img
                      src={userImage6}
                      alt='reviwer'
                      width='50px'
                      height='50px'
                    />
                  </div>
                  <div className='user-details'>
                    <p>Jon win</p>
                    <p>Influencer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {slider && (
            <>
              <ArrowLeft
                onClick={e => e.stopPropagation() || slider.prev()}
                disabeld={currentSlide === 0}
              />
              <ArrowRight
                onClick={e => e.stopPropagation() || slider.next()}
                disabeld={currentSlide === slider.details().size - 1}
              />
            </>
          )}
        </div>
        {slider && (
          <div className='dots'>
            {[...Array(slider.details().size).keys()].map(idx => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    slider.moveToSlideRelative(idx);
                  }}
                  className={'dot' + (currentSlide === idx ? ' active' : '')}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function ArrowLeft(props) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';

  return (
    <svg
      onClick={props.onClick}
      className={'arrow arrow--left' + disabeld}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
    </svg>
  );
}

function ArrowRight(props) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';

  return (
    <svg
      onClick={props.onClick}
      className={'arrow arrow--right' + disabeld}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
    </svg>
  );
}
