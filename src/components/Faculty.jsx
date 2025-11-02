import React from 'react';

const teachers = [
  { name: 'Mrs. Anita Sharma', subject: 'Mathematics' },
  { name: 'Mr. Rajesh Kumar', subject: 'Science' },
  { name: 'Mrs. Pooja Mehta', subject: 'English' },
  { name: 'Mr. Arun Das', subject: 'History' },
];

export default function Faculty() {
  return (
    <section id="faculty" className="py-16 bg-gradient-to-b from-transparent to-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-3xl font-bold">Our Faculty</h3>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          {teachers.map((t, i) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-gray-800 rounded border border-gray-700">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-400 flex items-center justify-center text-gray-900 font-bold">
                {t.name.split(' ').map(n => n[0]).slice(0,2).join('')}
              </div>
              <div>
                <div className="font-medium">{t.name}</div>
                <div className="text-sm text-gray-400">{t.subject}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
