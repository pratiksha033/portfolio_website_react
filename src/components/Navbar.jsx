import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState(""); // ✅ Added useState for active link
  
  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link 
          to="/" 
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0); // ✅ Fixed typo (window, not windows)
          }}
        >
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Pratiksha Parihar &nbsp;
            
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((navItem) => ( // ✅ Renamed Link to navItem
            <li
              key={navItem.id}
              className={`${
                active === navItem.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(navItem.title)}
            >
              <a href={`#${navItem.id}`}>{navItem.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
