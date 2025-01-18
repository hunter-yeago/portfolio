import React, { useState } from "react";
import Link from "next/link";
import { navData } from "../data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navJSX = navData.map((item) => (
    <li key={item.name}>
      <Link
        href={item.path}
        className="hover:text-gray-400"
        onClick={toggleMenu}
      >
        {item.name}
      </Link>
    </li>
  ));

  return (
    <nav className="w-[80vw] mx-auto text-black pt-6">
      <div className="container text-lg mx-auto flex items-center">
        <p className="hidden md:block w-max whitespace-nowrap">Hunter Yeago</p>

        <ul className="flex w-full gap-4 justify-center md:justify-end align-center lg:items-center">
          {navJSX}
        </ul>
      </div>
    </nav>
  );
}
