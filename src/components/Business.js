import { useRef } from "react";
import {
  useGsapsectionTextUnvile,
  useGsapGallaryForward,
  useGsapSectionSubtitle,
  useGsapGallaryDownFall,
  useGsapGallaryBackward,
  useGsapGallaryUpward,
} from "../hooks/gsap";

const Business = () => {
  const galleryRef = useRef(null);
  const sectionTextRef = useRef(null);
  const subtitleRef = useRef(null);
  const gallery1 = useRef(null);
  const gallery2 = useRef(null);
  const gallery3 = useRef(null);
  const gallery4 = useRef(null);
  const gallery5 = useRef(null);
  const gallery6 = useRef(null);

  useGsapsectionTextUnvile(sectionTextRef, galleryRef);
  useGsapSectionSubtitle(subtitleRef, galleryRef);
  useGsapGallaryUpward(gallery5, gallery6, 0);
  useGsapGallaryDownFall(gallery2, galleryRef, 1.8);
  useGsapGallaryForward(gallery1, galleryRef, 2.2);
  useGsapGallaryForward(gallery4, gallery4, 1);
  useGsapGallaryBackward(gallery3, galleryRef, 2.2);
  useGsapGallaryBackward(gallery6, gallery6, 1);

  return (
    <section className='gallery' id='gallery' ref={galleryRef}>
      <div className='container'>
        <h2 className='section-title'>
          Our <span>Business</span>
          <span className='text-slider' ref={sectionTextRef}></span>
        </h2>
        <p className='gallery-subtitle' ref={subtitleRef}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti aperiam soluta, earum officiis accusantium laboriosam.
        </p>
        <div className='gallary-box-wrapper'>
          <div className='box box-one' ref={gallery1}>
            <div className='image'>
              <img
                src='https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/2ad75f176471573.Y3JvcCwxNjY3LDEzMDQsNjY0LDk5.jpeg'
                alt='FROOTI |El Agua Co.'
              />
            </div>
            <div className='box-overlay'>
              <div className='details'>
                <h3>Lorem</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className='box box-two' ref={gallery2}>
            <div className='image'>
              <img
                src='https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/8166bd176955501.Y3JvcCwxMDgwLDg0NCwwLDExNw.jpg'
                alt='Frooti'
              />
            </div>
            <div className='box-overlay'>
              <div className='details'>
                <h3>Lorem</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className='box box-three' ref={gallery3}>
            <div className='image'>
              <img
                src='https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/ac39e0174415877.64a27c8a554a9.jpg'
                alt='Frooti'
              />
            </div>
            <div className='box-overlay'>
              <div className='details'>
                <h3>Lorem</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className='box box-four' ref={gallery4}>
            <div className='image'>
              <img
                src='https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/924de5172698333.Y3JvcCwxNDAwLDEwOTUsMCwyMjg.jpg'
                alt='Frooti'
              />
            </div>
            <div className='box-overlay'>
              <div className='details'>
                <h3>Lorem</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className='box box-five' ref={gallery5}>
            <div className='image'>
              <img
                src='https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/f4338f172231077.Y3JvcCwxODQxLDE0NDAsMzYwLDA.jpg'
                alt='Frooti'
              />
            </div>
            <div className='box-overlay'>
              <div className='details'>
                <h3>Lorem</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className='box box-six' ref={gallery6}>
            <div className='image'>
              <img
                src='https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/111324168103925.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png'
                alt='Frooti'
              />
            </div>
            <div className='box-overlay'>
              <div className='details'>
                <h3>Lorem</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
