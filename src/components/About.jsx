import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const About = () => {
  const ref = useFadeIn();

  return (
    <section id="about" className="bg-[#0f0f0f] py-20 lg:py-28 vertical-lines relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          ref={ref}
          className="section-fade bg-[#111111] border border-[#1f1f1f] rounded-2xl p-8 lg:p-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left — Text */}
          <div>
            <p className="text-gray-500 text-sm mb-3 tracking-wider">About me</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-snug mb-2">
              Professional{' '}
              <span className="text-primary">Problem Solutions</span>
              <br />
              For Digital Products
            </h2>
            <div className="w-2 h-2 bg-primary rounded-sm inline-block ml-1 mb-6"></div>

            <p className="text-gray-400 text-sm leading-relaxed mb-2">
              Hi, I'm Mostafa Rahman, a UI/UX Designer from Bangladesh.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-2">
              I design clean, user-friendly, and modern digital experiences.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              I focus on solving real user problems through simple and effective design.
            </p>

            {/* Skills grid */}
            <div className="grid grid-cols-2 gap-y-3 gap-x-6 mb-10">
              {['User research', 'Wireframing', 'Prototyping', 'Final UI design'].map((skill, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm">{skill}</span>
                </div>
              ))}
            </div>

            {/* Contact cards */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex items-center gap-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-3 flex-1">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-10 7L2 7"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] tracking-wider">Email Us</p>
                  <p className="text-white text-xs font-medium">mostafarahman20194@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-3 flex-1">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] tracking-wider">Make A Call What's App</p>
                  <p className="text-white text-xs font-medium">+8801756197966</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Photo placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="rounded-2xl overflow-hidden bg-[#1a1a1a] border border-[#2a2a2a] aspect-[4/5] flex flex-col items-center justify-center gap-3">
                {/* Decorative green glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none"></div>
                <img src="/about.png" alt="Mostafa Rahman" className="w-full h-full object-cover" />
              </div>
              {/* Decorative tag
              <div className="absolute top-4 right-4 bg-[#0a0a0a]/80 backdrop-blur border border-[#2a2a2a] rounded-lg px-3 py-2 text-xs text-gray-400">
                UI/UX DESIGN STUDIO
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
