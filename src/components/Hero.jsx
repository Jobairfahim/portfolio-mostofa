import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-[#0a0a0a] flex flex-col justify-between pt-16 vertical-lines relative">
      <div className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[calc(100vh-180px)]">

            {/* Left — Text */}
            <div className="lg:col-span-1 flex flex-col justify-center gap-5 animate-[fadeUp_0.6s_ease_forwards]">
              <div>
                <p className="text-gray-400 text-lg mb-1">Hello, i'm</p>
                <h1 className="text-4xl lg:text-5xl font-bold text-primary leading-tight">Mostafa Rahman</h1>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mt-1">UI/UX Designer</h2>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Passionate About Creating Intuitive Digital Experiences That Connect Users With Value.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-2 bg-primary text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-green-400 transition-all duration-200"
                >
                  Hire Me
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="flex items-center gap-2 border border-[#2a2a2a] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:border-primary hover:text-primary transition-all duration-200">
                  Download Resume
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 2v8M3 7l4 4 4-4M2 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-4 mt-2">
                {[
                  { label: 'globe', path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z' },
                  { label: 'dribbble', path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.36 6.83h-2.99c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.9 4.37 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.83-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.5-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z' },
                  { label: 'behance', path: 'M9.5 12.5c0 1.1-.9 2-2 2H5v-4h2.5c1.1 0 2 .9 2 2zm-4.5-5v3H7c.83 0 1.5-.67 1.5-1.5S7.83 7.5 7 7.5H5zm12.5 3.5h-5c0 1.38 1.12 2.5 2.5 2.5.76 0 1.44-.34 1.9-.88l1.44.86C17.78 15.3 16.5 16 15 16c-2.76 0-5-2.24-5-5s2.24-5 5-5c2.65 0 4.78 2.07 5 4.65l.01.35h-.01zM19 10.5c-.18-1.1-1.14-1.5-2-1.5-.96 0-1.88.51-2.18 1.5H19zM8.5 9.5c0-.83-.67-1.5-1.5-1.5H5V11h2c.83 0 1.5-.67 1.5-1.5zM17 6h-4v1.5h4V6z' },
                  { label: 'linkedin', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' }
                ].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-full border border-[#2a2a2a] flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-all duration-200"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d={icon.path}/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Center — Photo */}
            <div className="lg:col-span-1 flex justify-center items-center">
              <div className="relative">
                {/* Green circle background */}
                <div className="absolute inset-0 rounded-full bg-primary opacity-90 scale-95 translate-y-4" style={{borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'}}></div>
                {/* Photo placeholder */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#0a0a0a] bg-[#111]">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                   
                  </div>
                  <img src="/hero-pf.png" alt="Mostafa Rahman" className="w-full h-full object-cover object-top" />
                </div>
              </div>
            </div>

            {/* Right — Stats */}
            <div className="lg:col-span-1 flex flex-row lg:flex-col justify-center gap-4 lg:gap-4">
              <div className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5 flex-1 lg:flex-none hover:border-primary/40 transition-colors">
                <div className="text-2xl font-bold text-primary">1+</div>
                <div className="text-gray-500 text-sm mt-1">Years Of Experience</div>
              </div>
              <div className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5 flex-1 lg:flex-none hover:border-primary/40 transition-colors">
                <div className="text-2xl font-bold text-primary">20+</div>
                <div className="text-gray-500 text-sm mt-1">Project Complete</div>
              </div>
              <div className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5 flex-1 lg:flex-none hover:border-primary/40 transition-colors">
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-gray-500 text-sm mt-1">Client Satisfactions</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Banner */}
      <div className="bg-primary py-3 overflow-hidden">
        <div className="marquee-track">
          {Array(8).fill(null).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-3 mx-4 text-black font-bold text-sm tracking-widest uppercase whitespace-nowrap">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect width="6" height="6" rx="1" fill="#0a0a0a"/>
                <rect x="8" width="6" height="6" rx="1" fill="#0a0a0a"/>
                <rect y="8" width="6" height="6" rx="1" fill="#0a0a0a"/>
                <rect x="8" y="8" width="6" height="6" rx="1" fill="#0a0a0a" opacity="0.5"/>
              </svg>
              PRODUCT DESIGN
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect width="6" height="6" rx="1" fill="#0a0a0a"/>
                <rect x="8" width="6" height="6" rx="1" fill="#0a0a0a"/>
                <rect y="8" width="6" height="6" rx="1" fill="#0a0a0a"/>
                <rect x="8" y="8" width="6" height="6" rx="1" fill="#0a0a0a" opacity="0.5"/>
              </svg>
              MOBILE APP DESIGN
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect width="6" height="6" rx="1" fill="#0a0a0a"/>
                <rect x="8" width="6" height="6" rx="1" fill="#0a0a0a"/>
                <rect y="8" width="6" height="6" rx="1" fill="#0a0a0a"/>
                <rect x="8" y="8" width="6" height="6" rx="1" fill="#0a0a0a" opacity="0.5"/>
              </svg>
              WIREFRAMING
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect width="6" height="6" rx="1" fill="#0a0a0a"/>
                <rect x="8" width="6" height="6" rx="1" fill="#0a0a0a"/>
                <rect y="8" width="6" height="6" rx="1" fill="#0a0a0a"/>
                <rect x="8" y="8" width="6" height="6" rx="1" fill="#0a0a0a" opacity="0.5"/>
              </svg>
              UI/UX DESIGN
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
