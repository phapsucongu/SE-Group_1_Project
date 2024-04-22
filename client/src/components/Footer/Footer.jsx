import { Link } from 'react-router-dom';
import Logo from '../../assets/images/legal-services.png';
import { RiLinkedinFill } from 'react-icons/ri';
import { useEffect, useRef } from 'react';

import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
} from 'react-icons/ai';

const socialLinks = [
  {
    path: '',
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: '',
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: '',
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: '',
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLinks01 = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/',
    display: 'About Us',
  },
  {
    path: '/mybookings',
    display: 'My Bookings',
  },
  {
    path: '/',
    display: 'Blog',
  },
];

const quickLinks02 = [
  {
    path: '/expert ',
    display: 'Find a Expert',
  },
  {
    path: '/',
    display: 'Request an Appointment',
  },
  {
    path: '/',
    display: 'Find a Location',
  },
  {
    path: '/',
    display: 'Get a Opinion',
  },
];

const quickLinks03 = [
  {
    path: '/',
    display: 'Donate',
  },
  {
    path: '/contact',
    display: 'Contact Us',
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-16 pt-10 bg-[#001431]">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            
          <div className="flex items-center gap-2"> 
              <img width={30} src={Logo} alt="Law Connect Logo" />
              <h4 style = {{marginLeft: '4px', fontWeight: 'bold', fontSize: '22px' }}>Law Connect</h4>
            </div>
            
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
              Copyright © {year} developed by Group 1 all right reserved.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#1811AE] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li
                  key={index}
                  className="mb-4 leading-7 font-[400] text-textColor"
                >
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              I want to:
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li
                  key={index}
                  className="mb-4 leading-7 font-[400] text-textColor"
                >
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Support
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li
                  key={index}
                  className="mb-4 leading-7 font-[400] text-textColor"
                >
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
