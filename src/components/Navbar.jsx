import React from 'react';

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-indigo-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
            BF
          </div>
          <div>
            <h1 className="text-xl font-semibold">Bright Future School</h1>
            <p className="text-xs text-gray-400">Modern • Elegant • Inclusive</p>
          </div>
        </div>

        <nav>
          <ul className="flex gap-4 text-gray-300">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#academics" className="hover:text-white">Academics</a></li>
            <li><a href="#faculty" className="hover:text-white">Faculty</a></li>
            <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
