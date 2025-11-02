import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-transparent to-gray-800">
      <div className="max-w-3xl mx-auto px-6">
        <h3 className="text-3xl font-bold">Contact Us</h3>
        <p className="mt-2 text-gray-400">Have questions? Send us a message and we'll respond soon.</p>

        <form className="mt-6 grid grid-cols-1 gap-4" onSubmit={(e)=>{e.preventDefault(); alert('Message sent (demo)')}}>
          <input className="px-4 py-3 rounded bg-gray-900 border border-gray-700" placeholder="Your name" required />
          <input type="email" className="px-4 py-3 rounded bg-gray-900 border border-gray-700" placeholder="Email" required />
          <textarea className="px-4 py-3 rounded bg-gray-900 border border-gray-700" rows="5" placeholder="Message" required />
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-500">Send</button>
            <button type="reset" className="px-4 py-2 border border-gray-700 rounded">Reset</button>
          </div>
        </form>
      </div>
    </section>
  );
}
