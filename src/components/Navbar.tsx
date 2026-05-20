import { useEffect, useRef, useState } from "react";
import "./Navbar.css";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!mobileOpen) return;

    const handlePointerDown = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKey);
    };
  }, [mobileOpen]);

  return (
    <>
      {mobileOpen && <div className="navbar__backdrop" aria-hidden="true" />}
      <nav className="navbar" ref={navRef}>
        <div className="inner">
          <ul
            className={`navbar__links ${mobileOpen ? "navbar__links--open" : ""}`}
          >
            <li>
              <a href="#songwriting" onClick={() => setMobileOpen(false)}>
                Song Writing
              </a>
            </li>
            <li>
              <a href="#session-singer" onClick={() => setMobileOpen(false)}>
                Session Singer
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setMobileOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMobileOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
          <span className="navbar__logo">Valentyna Kozlova</span>
          <div className="navbar__actions">
            <button
              className="navbar__hamburger"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
