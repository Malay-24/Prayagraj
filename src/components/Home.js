import Navbar from "./Navbar";
import Slider from "./Slider";
import About from "./About";
import Business from "./Business";
import Brands from "./Brands";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Slider />
      <About />
      <Business />
      <Brands />
      <Footer />
    </div>
  );
};

export default Home;
