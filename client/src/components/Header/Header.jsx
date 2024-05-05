import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { authContext } from '../../context/AuthContext';
import logo from '../../assets/images/legal-services.png';
import userImg from '../../assets/images/avatar-icon.png';
import { LOCAL_STORAGE_TOKEN_NAME } from '../../context/constants';

const navLinks = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/experts',
    display: 'Find An Expert',
  },
  {
    path: '/mybookings',
    display: 'My Booking',
  },
  {
    path: '/contact',
    display: 'Contact',
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { authState } = useContext(authContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener('scroll', handleStickyHeader);
  }, []);

  const toggleMenu = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener on document mount
    document.addEventListener('click', handleClickOutside);

    // Remove event listener on component unmount
    return () => document.removeEventListener('click', handleClickOutside);
  }, []); // Empty dependency array ensures it runs only once

  const handleLogout = () => {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
    window.location.href = '/login';
  };

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center' }} >
            <img id='userImg' width={30} src={logo} alt="" />
            <h4 style={{ marginLeft: '10px', fontWeight: 'bold', fontSize: '22px' }}>Law Connect</h4>
          </div>

          {/* Menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? 'text-primaryColor text-[16px] leading-7 font-[600]'
                        : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav Right */}
          <div className='flex items-center gap-4'>
            {authState.isAuthenticated ? (
              <div className="relative">
                <div className="inline-block relative">
                  <figure className="w-[35px] h-[35px] rounded-full cursor-pointer" onClick={toggleMenu}>
                    <img src={userImg} className="w-full rounded-full" alt="" />
                  </figure>
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-28 bg-white rounded-lg shadow-lg z-10">
                      <div className="py-1">
                        <Link to="/profile" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 text-center">
                          Profile
                        </Link>
                        <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 flex justify-center items-center">
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <Link to='/login'>
                <button
                  className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>
                  Login
                </button>
              </Link>
            )}
            <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 cursor-pointer' />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
