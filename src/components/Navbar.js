import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-green-600 text-yellow-400 py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-semibold text-black">IT POLY</div>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:bg-green-500 text-yellow-400 px-4 py-2 rounded-md">Home</Link>
            <Link to="/about" className="hover:bg-green-500 text-yellow-400 px-4 py-2 rounded-md">About Us</Link>
            <Link to="/courses" className="hover:bg-green-500 text-yellow-400 px-4 py-2 rounded-md">Courses</Link>
            <Link to="/contact" className="hover:bg-green-500 text-yellow-400 px-4 py-2 rounded-md">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
