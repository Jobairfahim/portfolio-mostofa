import React, { useState } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const Contact = () => {
  const ref = useFadeIn();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! I will get back to you soon.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="bg-[#0a0a0a] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          ref={ref}
          className="section-fade grid grid-cols-1 lg:grid-cols-2 gap-14 items-start"
        >
          {/* Left */}
          <div>
            <p className="text-gray-500 text-sm mb-3 tracking-wider">Get in Touch</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-snug mb-4">
              Let's Talk For your{' '}
              <span className="text-primary">Next Projects</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
              You can confidently discuss your project with me. I take full responsibility for bringing users to your project.
            </p>

            <div className="flex flex-col gap-3">
              {[
                '1+ Years Of Experience',
                'Professional Web Designer',
                'Mobile Apps Design',
                'Custom Design Support',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div>
            <div className="flex flex-col gap-5">
              <div>
                <label className="block text-white text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="enter your name"
                  className="w-full bg-[#111111] border border-[#2a2a2a] rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#444] focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Email Address <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="support@gmail.com"
                  className="w-full bg-[#111111] border border-[#2a2a2a] rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#444] focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Textarea <span className="text-primary">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Write message"
                  className="w-full bg-[#111111] border border-[#2a2a2a] rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#444] focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="flex items-center gap-2 bg-primary text-black font-semibold text-sm px-7 py-3.5 rounded-full w-fit hover:bg-green-400 transition-all duration-200"
              >
                Send Us Message
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
