import { useRef } from "react";
import { FaInstagram, FaTwitter, FaFacebookSquare } from "react-icons/fa";
import {
  useGsapsectionTextUnvile,
  useGsapSectionSubtitle,
  useGsapTrainersScale,
  useGsapTrainersRev,
} from "../hooks/gsap";

const Brands = () => {
  const brandsRef = useRef(null);
  const sectionTextRef = useRef(null);
  const subtitleRef = useRef(null);
  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);
  const card4 = useRef(null);

  useGsapsectionTextUnvile(sectionTextRef, brandsRef);
  useGsapSectionSubtitle(subtitleRef, brandsRef);
  useGsapTrainersScale(card2, brandsRef, 1.8);
  useGsapTrainersScale(card3, brandsRef, 1.8);
  useGsapTrainersRev(card1, brandsRef, "-150%", 2.2);
  useGsapTrainersRev(card4, brandsRef, "150%", 2.2);

  return (
    <section className='brands' id='brands' ref={brandsRef}>
      <div className='container'>
        <div className='card-header'>
          <h2 className='section-title'>
            Our <span>Brands</span>
            <span className='text-slider' ref={sectionTextRef}></span>
          </h2>
          <p className='brands-subtitle' ref={subtitleRef}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, possimus?
          </p>
        </div>

        <div className='card-grid'>
          <div className='card' ref={card1}>
            <div className='card-image'>
              <img
                src='https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/22019465.548adbc015636.jpg'
                alt='Appy'
              />
            </div>
            <div className='card-body'>
              <div>
                <h2>Appy Fizz</h2>
                <p>It is available in sizes like  250ml, 500ml, 1ltr, 2ltr  jar.</p>
              </div>
              <div className='card-icons'>
                <a
                  href='https://www.facebook.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='card-icon'
                >
                  <FaFacebookSquare />
                </a>
                <a
                  href='https://instagram.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='card-icon'
                >
                  <FaInstagram />
                </a>
                <a
                  href='https://www.twitter.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='card-icon'
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          <div className='card' ref={card2}>
            <div className='card-image'>
              <img
                src='https://m.media-amazon.com/images/I/41fOtDn6kHL._SX300_SY300_QL70_FMwebp_.jpg'
                alt='Smoodh'
              />
            </div>
            <div className='card-body'>
              <div>
                <h2>Frooti Smoodh</h2>
                <p>It is available in sizes like  250ml, 500ml, 1ltr, 2ltr  jar.</p>
              </div>
              <div className='card-icons'>
                <a
                  href='https://www.facebook.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='card-icon'
                >
                  <FaFacebookSquare />
                </a>
                <a
                  href='https://instagram.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='card-icon'
                >
                  <FaInstagram />
                </a>
                <a
                  href='https://www.twitter.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='card-icon'
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          <div className='card' ref={card3}>
            <div className='card-image'>
              <img
                src='https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/9ca076152725377.Y3JvcCw3MDg3LDU1NDMsMCwyNTQz.jpg'
                alt='Frooti'
              />
            </div>
            <div className='card-body'>
              <div>
                <h2>Frooti</h2>
                <p>It is available in sizes like  250ml, 500ml, 1ltr, 2ltr  jar.</p>
              </div>
              <div className='card-icons'>
                <a
                  href='https://www.facebook.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='card-icon'
                >
                  <FaFacebookSquare />
                </a>
                <a
                  href='https://instagram.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='card-icon'
                >
                  <FaInstagram />
                </a>
                <a
                  href='https://www.twitter.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='card-icon'
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          <div className='card' ref={card4}>
            <div className='card-image'>
              <img
                src='https://www.parleagro.com/uploads/images/094859170234B_PARLEAGRO-20.jpg'
                alt='Bailley'
              />
            </div>
            <div className='card-body'>
              <div>
                <h2>Bailley</h2>
                <p>It is available in sizes like  250ml, 500ml, 1ltr, 2ltr  jar.</p>
              </div>
              <div className='card-icons'>
                <a
                  href='https://www.facebook.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='card-icon'
                >
                  <FaFacebookSquare />
                </a>
                <a
                  href='https://instagram.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='card-icon'
                >
                  <FaInstagram />
                </a>
                <a
                  href='https://www.twitter.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='card-icon'
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
