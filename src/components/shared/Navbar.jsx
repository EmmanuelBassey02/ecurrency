import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const navItems = [
    { id: 1, text: 'Home', path: '/' },
    { id: 2, text: 'About', path: '/about' },
    { id: 3, text: 'Shop', path: '/shop' },
    { id: 4, text: 'FAQs', path: '/faqs' }
  ];

  return (
    <div className="bg-white z-[5] sticky top-0 px-[3vw] md:px-[4vw] flex justify-between items-center h-[65px] md:h-[80px] text-[#12305B]">
      <Link to="/" className="h-full flex items-center">
        <img src={logo} alt="logo" className="h-[40px] md:h-[50px]" />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map(({ id, text, path }) => (
          <li key={id} className="p-2 px-4 m-2 cursor-pointer text-[17px] font-normal duration-300 rounded-xl">
            <Link to={path} className={pathname === path ? 'font-bold' : ''}>
              {text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <button onClick={toggleNav} className="block md:hidden">
        {navOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </button>

      {/* Mobile Navigation Menu */}
      <ul
        className={`fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-300  bg-white/80 backdrop-blur duration-300 md:hidden ${
          navOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Link to="/" className="w-[100px] pl-3 pt-6">
          <img src={logo} alt="logo" className="h-[50px] md:h-[70px] pl-6" />
        </Link><br />

        {navItems.map(({ id, text, path }) => (
          <Link to={path} key={id} onClick={toggleNav}>
            <li
              className={`p-4 border-b border-neutral-400 pl-6 mt-2 hover:[#12305B] duration-300 cursor-pointer ${
                pathname === path ? 'font-bold' : ''
              }`}
            >
              {text}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
