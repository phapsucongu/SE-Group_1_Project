import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { authContext } from '../../context/AuthContext';
import logo from '../../assets/images/legal-services.png';
import userImg from '../../assets/images/avatar-icon.png';
import { LOCAL_STORAGE_TOKEN_NAME } from '../../context/constants';

let navLinks = []

let account = []
const guessNavLinks = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/findalawyer',
    display: 'Find A Lawyer',
  },
]

const clientNavLinks = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/findalawyer',
    display: 'Find A Lawyer',
  },
  {
    path: '/mybookings',
    display: 'My Booking',
  },
]

const lawyerNavLinks = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/myappointments',
    display: 'My Appointments',
  },
]
const handleOnClickAvatar = () => {
  return window.location.href = `/${account}`;
}

const Header = () => {
  const { authState: {user} } = useContext(authContext);

  const role = user?.role;
  if(role === 'user'){
    navLinks = [...clientNavLinks];
    account = "clientAccount"
  }
  else if(role === 'expert'){
    navLinks = [...lawyerNavLinks];
    account = "lawyerAccount"
  }
  else {
    navLinks = [...guessNavLinks];
  }
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

  

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center' }} >
            <img id='userImg' width={30} src={logo} alt="" />
            <h4 style={{ marginLeft: '10px', fontWeight: 'bold', fontSize: '22px' }}>Law Connect</h4>
          </div>

          {/* Menu: Đoạn này sau tùy chỉnh theo role */}
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
                  <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                    <Link to={`/${account}`}>
                    <img src={userImg} className="w-full rounded-full" alt="" />
                    </Link>
                  </figure>
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
