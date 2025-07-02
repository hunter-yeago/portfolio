"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLinks from "./Navlinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="text-black pt-6">
      <div className="text-lg flex justify-center lg:justify-between items-center">
        <Link href="/" className="hidden md:block w-max whitespace-nowrap">
          Hunter Yeago
        </Link>
        <NavLinks onClick={toggleMenu} />
      </div>
    </nav>
  );
}
