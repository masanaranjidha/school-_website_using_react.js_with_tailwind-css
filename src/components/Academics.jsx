import React from 'react';

const programs = [
  { title: 'Primary Education', desc: 'Foundations for young learners (Grades 1–5)' },
  { title: 'Middle School', desc: 'Building critical thinking (Grades 6–8)' },
  { title: 'High School', desc: 'Preparation for higher studies (Grades 9–12)' },
];

export default function Academics() {
  return (
    <section id="academics" className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-3xl font-bold">Academics</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <div key={i} className="p-6 bg-gray-800 rounded-lg border border-gray-700">
              <h4 className="font-semibold text-lg">{p.title}</h4>
              <p className="mt-2 text-gray-300 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
