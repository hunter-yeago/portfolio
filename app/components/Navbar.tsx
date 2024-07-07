// components/Navbar.tsx
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center">
        <div className="text-white text-xl font-bold w-72">
          <p>Hunter Yeago</p>
        </div>


        <ul className="flex w-full gap-4 justify-end align-center lg:items-center">
          <li>
            <Link href="/about" className="text-white hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-white hover:text-gray-400">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>


      </div>
    </nav>
  );
}