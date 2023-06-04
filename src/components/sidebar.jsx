import React, { useState } from 'react';
import {
  FaBars,
  FaRegClock,
  FaTh,
  FaThList,
  FaUserAlt,
} from 'react-icons/fa';
import { TiWeatherCloudy } from "react-icons/ti";
import '../App.css';
import { NavLink } from 'react-router-dom';

export default function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const menuItems = [
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: <FaTh />,
    },
    {
      path: '/about',
      name: 'About',
      icon: <FaUserAlt />,
    },
    {
      path: '/clock',
      name: 'Analytics',
      icon: <FaRegClock />,
    },
    {
      path: '/weather',
      name: 'Analytics',
      icon: <TiWeatherCloudy />,
    },
    {
      path: '/products',
      name: 'Products',
      icon: <FaThList />,
    },
  ];
  return (
    <div className="container">
      <div
        style={{
          width: isOpen ? '300px' : '50px',
        }}
        className="sidebar"
      >
        <div className="top_section">
          <h1
            style={{
              display: isOpen ? 'block' : 'none',
            }}
            className="logo"
          >
            Menu
          </h1>
          <div
            style={{
              marginLeft: isOpen ? '50px' : '0px',
            }}
            className="bars"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div style={{
              display: isOpen ? 'block' : 'none',
            }} className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
}
