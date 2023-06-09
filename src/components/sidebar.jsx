import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import '../App.css';
import { NavLink } from 'react-router-dom';
import { menuItems } from '../common/data';

export default function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

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
            {isOpen ? <AiOutlineClose onClick={toggle} /> : <FaBars onClick={toggle} />}
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
            <div
              style={{
                display: isOpen ? 'block' : 'none',
              }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
}
