import { useRef } from "react";
import { CgMenuRight } from "react-icons/cg";
import { useGsapLinkDownFall } from "../hooks/gsap";

const Navbar = () => {
  const mainNavRef = useRef(null);
  const logoRef = useRef(null);
  const navLink1 = useRef(null);
  const navLink2 = useRef(null);
  const navLink3 = useRef(null);
  const navLink4 = useRef(null);
  const navLink5 = useRef(null);
  const navLink6 = useRef(null);
  const navLink7 = useRef(null);

  const navSecArr = [
    logoRef,
    navLink1,
    navLink2,
    navLink3,
    navLink4,
    navLink5,
    navLink6,
    navLink7,
  ];

  const toggleMenu = () => {
    console.log(mainNavRef.current);
    mainNavRef.current.classList.toggle("nav-open");
  };

  const clickOnClose = () => {
    mainNavRef.current.classList.remove("nav-open");
  };

  useGsapLinkDownFall(navSecArr);

  return (
    <nav className='navbar' ref={mainNavRef}>
      <div className='container navbar-container'>
        <div className='logo-sec' ref={logoRef}>
          <a href='./'>
            <img
              className='logo'
              src='data:image/png;base64,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'
              alt='logo'
            />
          </a>
        </div>

        {/* NAVBAR */}
        <nav className='main-nav' onClick={clickOnClose}>
          <ul className='main-nav-list'>
            <li ref={navLink1}>
              <a className='main-nav-link' href='/'>
                Home
              </a>
            </li>
            <li ref={navLink2}>
              <a className='main-nav-link' href='#about'>
                About
              </a>
            </li>
            <li ref={navLink3}>
              <a className='main-nav-link' href='#brands'>
                Brands
              </a>
            </li>
            <li ref={navLink4}>
              <a className='main-nav-link' href='#gallery'>
                Business
              </a>
            </li>
            <li ref={navLink5}>
              <a className='main-nav-link' href='#careers'>
                Careers
              </a>
            </li>
            <li ref={navLink6}>
              <a className='main-nav-link' href='#contact'>
                Contact
              </a>
            </li>
            <li ref={navLink7}>
              <a className='main-nav-link nav-cta' href='#register'>
                REGISTER NOW
              </a>
            </li>
          </ul>
        </nav>

        {/* MOBILE NAV */}
        <button className='btn-mobile-nav' onClick={toggleMenu}>
          <CgMenuRight size={"3rem"} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
