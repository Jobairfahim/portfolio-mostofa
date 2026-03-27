import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'About', 'Works', 'Testimonials', 'Contact'];

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#1f1f1f]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
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

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <li key={i}>
              <button
                onClick={() => scrollTo(link)}
                className={`text-sm font-medium transition-colors hover:text-primary ${i === 0 ? 'text-primary' : 'text-gray-400'}`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <span className="text-sm text-gray-400 font-medium tracking-wider">LET'S TALK</span>
          <button
            onClick={() => scrollTo('contact')}
            className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-green-400 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {menuOpen
              ? <path d="M6 6l12 12M6 18L18 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              : <path d="M3 6h18M3 12h18M3 18h18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111111] border-t border-[#1f1f1f] px-6 py-4">
          {links.map((link, i) => (
            <button
              key={i}
              onClick={() => scrollTo(link)}
              className="block w-full text-left py-3 text-sm font-medium text-gray-300 hover:text-primary border-b border-[#1f1f1f] last:border-0 transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
