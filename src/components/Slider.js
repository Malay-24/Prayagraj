import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slide from "./Slide";

const data = [
  {
    id: 1,
    src: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/9bad6f83623787.Y3JvcCwzNDUxLDI3MDAsNzE3LDA.jpg",
    headline: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, qui consequatur cupiditate officia animi, accusamus illum atque vel ullam ut autem cumque perspiciatis molestias! Nobis",
    cta: "Discover the benefits",
    target: "about",
  },
  {
    id: 2,
    src: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/1e720583622279.Y3JvcCwyNDE2LDE4OTAsMjg3LDA.png",
    headline: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    body:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos, minus officia labore adipisci veritatis nam nihil deserunt minima temporibus!",
    cta: "Discover the benefits",
    target: "gallery",
  },
  {
    id: 3,
    src: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/9bad6f83623787.Y3JvcCwzNDUxLDI3MDAsNzE3LDA.jpg",
    headline: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, qui consequatur cupiditate officia animi, accusamus illum atque vel ullam ut autem cumque perspiciatis molestias! Nobis",
    cta: "Discover the benefits",
    target: "about",
  },
  {
    id: 4,
    src: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/1e720583622279.Y3JvcCwyNDE2LDE4OTAsMjg3LDA.png",
    headline: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    body:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos, minus officia labore adipisci veritatis nam nihil deserunt minima temporibus!",
    cta: "Discover the benefits",
    target: "gallery",
  },
];

const Slider = () => {
  // Manual Sliding functionality
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? data.length - 1 : (prevSlide) => prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === data.length - 1 ? 0 : (prevSlide) => prevSlide + 1
    );
  };

  return (
    <div className='slider-frame'>
      <div
        className='slider'
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {data.map((image) => (
          <Slide key={image.id} image={image} />
        ))}
      </div>
      <div className='slider-buttons'>
        <button onClick={prevSlide} className='prev-btn'>
          <span>
            <BsArrowLeft />
          </span>
        </button>
        <button onClick={nextSlide} className='next-btn'>
          <span>
            <BsArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
