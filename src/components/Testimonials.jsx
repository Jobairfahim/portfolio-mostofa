import React, { useState } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const testimonials = [
  {
    id: 1,
    name: 'Jobair Fahim',
    role: 'CEO & Founder',
    roleColor: '#22c55e',
    text: 'Excellent design quality, beautiful interface, improved usability, strong attention details, professional work, I will definitely work again with him.',
    photo: '/author1.png',
  },
  {
    id: 2,
    name: 'Asker Mia',
    role: 'Small Business Owner',
    roleColor: '#22c55e',
    text: 'Working with Mostafa was great, clean modern UI, user friendly UX, fast delivery, smooth communication, highly recommended experience overall.',
    photo: '/author2.png',
  },
  {
    id: 3,
    name: 'Rafiq Ahmed',
    role: 'Product Manager',
    roleColor: '#22c55e',
    text: 'Outstanding work on our mobile app redesign. The new interface is intuitive and our user retention has improved significantly since launch.',
    photo: '/author1.png',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const ref = useFadeIn();

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 2 : c - 1));
  const next = () => setCurrent((c) => (c >= testimonials.length - 2 ? 0 : c + 1));

  const visible = [testimonials[current], testimonials[(current + 1) % testimonials.length]];

  return (
    <section id="testimonials" className="bg-[#0f0f0f] py-20 lg:py-28 vertical-lines relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          ref={ref}
          className="section-fade bg-[#111111] border border-[#1f1f1f] rounded-2xl p-8 lg:p-14 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
        >
          {/* Left — Info */}
          <div className="lg:col-span-1">
            <p className="text-gray-500 text-sm mb-3 tracking-wider">Clients Testimonials</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-snug mb-4">
              I've 20+ Clients{' '}
              <span className="text-primary">Feedback</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              I have worked with many types of clients, and they are very happy with my work. I always give them top priority.
            </p>
            {/* Navigation */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full border border-[#2a2a2a] flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-full border border-[#2a2a2a] flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Right — Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {visible.map((t, i) => (
              <div
                key={`${current}-${i}`}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/30 transition-all duration-300"
              >
                {/* Quote icon */}
                <div className="text-primary text-3xl font-serif leading-none">"</div>

                <p className="text-gray-400 text-sm leading-relaxed flex-1">{t.text}</p>

                <div className="flex items-center gap-3 mt-2">
                  {/* Avatar placeholder */}
                  <div className="w-10 h-10 rounded-full bg-[#2a2a2a] border border-[#3a3a3a] flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img src={t.photo} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-xs font-medium" style={{ color: t.roleColor }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
