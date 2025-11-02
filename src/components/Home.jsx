import React from 'react';

export default function Home() {
  return (
    <section id="home" className="py-24">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl font-extrabold tracking-tight">Welcome to Bright Future School</h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Nurturing young minds with a blend of modern education and timeless values.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#academics" className="px-6 py-3 bg-indigo-600 rounded-md font-medium hover:bg-indigo-500">Explore Academics</a>
          <a href="#contact" className="px-6 py-3 border border-gray-700 rounded-md text-gray-200 hover:bg-gray-800">Contact Us</a>
        </div>
      </div>
    </section>
  );
}
