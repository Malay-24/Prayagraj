import { useRef } from "react";
import {
  useGsapsectionTextUnvile,
  useGsapRedLineDownFall,
  useGsapAboutDescUpward,
  useGsapAboutBackward,
} from "../hooks/gsap";

const About = () => {
  const sectionTextRef = useRef(null);
  const aboutRef = useRef(null);
  const redLineRef = useRef(null);
  const aboutDescRef = useRef(null);
  const aboutImageRef = useRef(null);


  useGsapsectionTextUnvile(sectionTextRef, aboutRef);
  useGsapRedLineDownFall(redLineRef, aboutRef);
  useGsapAboutDescUpward(aboutDescRef, aboutRef);
  useGsapAboutBackward(aboutImageRef, aboutRef);

  return (
    <section className='about' id='about' ref={aboutRef}>
      <div className='container about-container'>
        <div className='left-sec'>
          <div className='about-content'>
            <span className='red-line' ref={redLineRef}></span>
            <h2 className='section-title'>
              Welcome to <span>Parle Agro</span>
              <span className='text-slider' ref={sectionTextRef}></span>
            </h2>
            <p className='about-description' ref={aboutDescRef}>
            Parle Agro, a pioneer in the Indian beverage industry, has been creating innovative products and iconic brands since 1985

Headquartered in Mumbai, with over 5500+ employees, Parle Agro is the largest Indian beverage company.

Our strength lies in establishing new categories, building brands and capturing market share within those categories. Our bevy of brands include Frooti, Appy, Appy Fizz, BFizz, SMOODH, Bailley, Bailley Soda, Bombay99.

We have always been passionate about building our own brands. We like to create, and we like to nurture what we create. Fueled by innovation that is engrained in the business DNA, our focus and vision is making Parle Agro, the No.1 beverage company in India.



            </p>
          </div>
        </div>
        <div className='right-sec'>
          <div className='about-image' ref={aboutImageRef}>
            <img
              src='https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/a8bc63171976097.Y3JvcCwxMDgwLDg0NCwwLDExNw.png'
              alt='Parle Agro Frooti'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
