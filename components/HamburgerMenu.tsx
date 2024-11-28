"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="hamburger-menu" ref={menuRef}>
      <button
        className={`hamburger-icon ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/current_order" onClick={closeMenu}>
              Current Order
            </Link>
          </li>
          <li>
            <Link href="/logout" onClick={closeMenu}>
              Log out
            </Link>
          </li>
        </ul>
      </nav>
      {isOpen && <div className="overlay" onClick={closeMenu} />}
      <style jsx>{`
        .hamburger-icon {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: 2rem;
          height: 2rem;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 10;
        }

        .hamburger-icon span {
          width: 2rem;
          height: 0.25rem;
          background: #000;
          border-radius: 10px;
          transition: all 0.3s linear;
          position: relative;
          transform-origin: 1px;
        }

        .hamburger-icon.open span:first-child {
          transform: rotate(45deg);
        }

        .hamburger-icon.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger-icon.open span:nth-child(3) {
          transform: rotate(-45deg);
        }

        .menu {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 300px;
          background-color: #f1f1f1;
          box-shadow: 2px 0 6px rgba(0, 0, 0, 0.1);
          padding-top: 3.5rem;
          transition: transform 0.3s ease-in-out;
          transform: translateX(-100%);
          z-index: 5;
        }

        .menu.open {
          transform: translateX(0);
        }

        .menu ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .menu ul li {
          padding: 1rem;
        }

        .menu ul li a {
          text-decoration: none;
          color: #333;
          font-size: 1.2rem;
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 4;
        }

        .menu ul {
          display: flex;
          flex-direction: column;
        }

        @media (min-width: 768px) {
          .hamburger-menu {
            top: 20px;
            left: 20px;
          }

          .menu {
            position: fixed;
            width: 300px;
            top: 0;
            left: 0;
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default HamburgerMenu;
