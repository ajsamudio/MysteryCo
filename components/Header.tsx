"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeNav = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "";
  }, []);

  const openNav = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) closeNav();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeNav]);

  return (
    <>
      <header className="site-header" role="banner">
        <div className="header-inner">
          <Link href="/" className="logo-wrap" aria-label="Mystery Entertainment — Home">
            <div className="logo-mark" aria-hidden="true">ME</div>
          </Link>

          <span className="site-name">Mystery Entertainment</span>

          <nav className="main-nav" aria-label="Main navigation">
            <ul>
              <li><Link href="/" className="active">Home</Link></li>
              <li><Link href="#latest-releases">Releases</Link></li>
              <li><Link href="#artists">Artists</Link></li>
              <li>
                <a href="https://mysteryentertainment.shop" target="_blank" rel="noopener noreferrer">
                  Store
                </a>
              </li>
              <li><Link href="#contact-cta">Contact</Link></li>
            </ul>
          </nav>

          <button
            className="menu-btn"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label="Open navigation menu"
            onClick={openNav}
          >
            menu
            <svg viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <line x1="0" y1="1"  x2="22" y2="1"  stroke="currentColor" strokeWidth="2"/>
              <line x1="0" y1="8"  x2="22" y2="8"  stroke="currentColor" strokeWidth="2"/>
              <line x1="0" y1="15" x2="22" y2="15" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
        </div>
      </header>

      <nav
        id="mobile-nav"
        className={`mobile-nav${isOpen ? " open" : ""}`}
        aria-label="Mobile navigation"
      >
        <button
          className="mobile-nav-close"
          aria-label="Close navigation menu"
          onClick={closeNav}
        >
          ✕
        </button>
        <Link href="/" onClick={closeNav}>Home</Link>
        <Link href="#latest-releases" onClick={closeNav}>Releases</Link>
        <Link href="#artists" onClick={closeNav}>Artists</Link>
        <a href="https://mysteryentertainment.shop" target="_blank" rel="noopener noreferrer" onClick={closeNav}>
          Store
        </a>
        <Link href="#contact-cta" onClick={closeNav}>Contact</Link>
      </nav>
    </>
  );
}
