"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavLinks from "./Navlinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-12 py-8">
        {/* Logo / Name */}
        <Link
          href="/"
          className="font-bold text-2xl whitespace-nowrap py-1 px-2"
        >
          Hunter Yeago
        </Link>

        {/* Links */}
        <NavLinks onClick={toggleMenu} />
      </nav>
    </header>
  );
}
