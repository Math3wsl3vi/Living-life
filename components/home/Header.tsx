"use client";
import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-blue-800 font-bold text-2xl">
               Living Life
              </span>
              <span className="text-yellow-500 font-bold ml-1 text-2xl">
                Sanctuary
              </span>
            </Link>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md font-medium">
              Home
            </Link>
            <Link href="/About" className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md font-medium">
              About
            </Link>
            <Link href="/Ministries" className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md font-medium">
              Ministries
            </Link>
            <Link href="/Sermons" className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md font-medium">
              Sermons
            </Link>
            <Link href="/Activities" className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md font-medium">
              Events
            </Link>
            <Link href="/Donate" className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md font-medium">
              Give
            </Link>
            <Link href="/Prayer" className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md font-medium">
              Prayer
            </Link>
            <Link href="/Contact" className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md font-medium">
              Contact
            </Link>
            <Link href="/Membership" className="bg-blue-800 text-white hover:bg-blue-700 px-4 py-2 rounded-md font-medium">
              Join Us
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-800 hover:bg-gray-100 focus:outline-none">
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && <div className="md:hidden bg-white p-4 shadow-lg">
          <div className="flex flex-col space-y-2">
            <Link href="/" className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md font-medium" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/About" className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md font-medium" onClick={toggleMenu}>
              About
            </Link>
            <Link href="/Ministries" className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md font-medium" onClick={toggleMenu}>
              Ministries
            </Link>
            <Link href="/Sermons" className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md font-medium" onClick={toggleMenu}>
              Sermons
            </Link>
            <Link href="/Activities" className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md font-medium" onClick={toggleMenu}>
              Events
            </Link>
            <Link href="/Donate" className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md font-medium" onClick={toggleMenu}>
              Give
            </Link>
            <Link href="/Prayer" className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md font-medium" onClick={toggleMenu}>
              Prayer
            </Link>
            <Link href="/Contact" className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md font-medium" onClick={toggleMenu}>
              Contact
            </Link>
            <Link href="/Membership" className="bg-blue-800 text-white hover:bg-blue-700 px-4 py-2 rounded-md font-medium text-center" onClick={toggleMenu}>
              Join Us
            </Link>
          </div>
        </div>}
    </nav>;
};
export default Navbar;