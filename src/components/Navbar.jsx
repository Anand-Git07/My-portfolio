import React, { useState, useEffect } from 'react';
import { personal } from '../data/portfolio';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__logo">Portfolio</div>

      <ul className="navbar__links">
        {['about', 'skills', 'projects', 'contact'].map((id) => (
          <li key={id}>
            <a href={`#${id}`}>{id}</a>
          </li>
        ))}
      </ul>

      <a href={`mailto:${personal.email}`} className="navbar__cta">
        Hire Me
      </a>
    </nav>
  );
};

export default Navbar;
