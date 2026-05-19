import { useState } from 'react';
import './Navbar.css';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="inner">
        {/* <a href="#" className="navbar__logo">
          <span className="navbar__logo-icon">◈</span>
          <span className="navbar__logo-text">Essence<span className="navbar__logo-accent">of Fantasy</span></span>
        </a> */}

        <ul className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
          <li><a href="#songwriting" onClick={() => setMobileOpen(false)}>Song Writing</a></li>
          <li><a href="#session-singer" onClick={() => setMobileOpen(false)}>Session Singer</a></li>
          <li><a href="#about" onClick={() => setMobileOpen(false)}>About</a></li>
          <li><a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a></li>
        </ul>

        <div className="navbar__actions">
          <button
            className="navbar__hamburger"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(v => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
