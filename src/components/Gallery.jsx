import React from 'react';

const imgs = [
  'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=60',
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=60',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=60',
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-3xl font-bold">Gallery</h3>
        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          {imgs.map((u,i) => (
            <div key={i} className="overflow-hidden rounded-lg border border-gray-700">
              <img src={u} alt={`gallery-${i}`} className="w-full h-48 object-cover transform hover:scale-105 transition"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
