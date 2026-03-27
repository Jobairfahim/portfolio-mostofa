import React from 'react';

const Footer = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-primary rounded-md flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="1" y="1" width="6" height="6" rx="1" fill="#0a0a0a"/>
                  <rect x="9" y="1" width="6" height="6" rx="1" fill="#0a0a0a"/>
                  <rect x="1" y="9" width="6" height="6" rx="1" fill="#0a0a0a"/>
                  <rect x="9" y="9" width="6" height="6" rx="1" fill="#0a0a0a" opacity="0.4"/>
                </svg>
              </div>
              <span className="font-bold text-lg tracking-widest text-white">MOSTAFA</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-white">Start</span>
              <span className="text-gray-500 text-xs leading-tight">Do you have<br/>project in mind</span>
            </div>
            <span className="text-4xl font-bold text-white">a project</span>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wider">Quick Link</h4>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Projects', id: 'works' },
                { label: 'About', id: 'about' },
                { label: 'Reviews', id: 'testimonials' },
                { label: 'Contact', id: 'contact' },
              ].map((link, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-gray-500 text-sm hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Social */}
            <div className="flex flex-wrap gap-4 mt-5">
              {[
                { label: 'Facebook', href: '#' },
                { label: 'Dribble', href: '#' },
                { label: 'Behance', href: '#' },
                { label: 'Linkedin', href: '#', highlight: true },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className={`text-sm font-medium transition-colors ${social.highlight ? 'text-primary' : 'text-gray-400 hover:text-white'}`}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wider">Address</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 border border-[#2a2a2a] rounded flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <span className="text-gray-400 text-sm">Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 border border-[#2a2a2a] rounded flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-10 7L2 7"/>
                  </svg>
                </div>
                <span className="text-gray-400 text-sm">mostafarahman20194@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 border border-[#2a2a2a] rounded flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <span className="text-gray-400 text-sm">+880 01756197966</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#1a1a1a] text-center">
          <p className="text-gray-600 text-xs">© 2024 Mostafa Rahman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
