import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const projects = [
  {
    id: 1,
    tag: 'Product Design',
    title: 'Finance Mobile App Case Study',
    desc: 'Brique Finance app helps users track expenses, manage savings, and monitor investments easily.',
    align: 'right',
    bg: 'bg-gradient-to-br from-green-900/40 to-green-700/20',
    accent: '#22c55e',
    image: '/project1.jpg.png',
  },
  {
    id: 2,
    tag: 'Product Design',
    title: 'Food Mobile App Case study',
    desc: 'The app provides a fast, simple, and user-friendly food ordering experience.',
    align: 'left',
    bg: 'bg-gradient-to-br from-red-900/40 to-orange-800/20',
    accent: '#ef4444',
    image: '/project2.jpg.png',
  },
  {
    id: 3,
    tag: 'UI/UX Design',
    title: 'Digital Agency Website UI Design',
    desc: 'A modern digital agency website designed to showcase services, portfolio, and attract potential clients effectively.',
    align: 'right',
    bg: 'bg-gradient-to-br from-yellow-900/40 to-yellow-700/20',
    accent: '#eab308',
    image: '/project3.jpg.png',
  },
  {
    id: 4,
    tag: 'Mobile App',
    title: 'HR AI Chat Suggestion App',
    desc: 'An AI-powered HR assistant app that helps recruiters streamline responses, suggestions, and appraisals.',
    align: 'left',
    bg: 'bg-gradient-to-br from-teal-900/40 to-teal-700/20',
    accent: '#14b8a6',
    image: '/project5.jpg.png',
  },
];

const ProjectCard = ({ project, index }) => {
  const ref = useFadeIn();
  const isRight = project.align === 'right';

  return (
    <div
      ref={ref}
      className={`section-fade grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-[#1f1f1f] bg-[#111111] hover:border-primary/30 transition-all duration-300`}
    >
      {/* Image side */}
      <div className={`${isRight ? 'md:order-2' : 'md:order-1'} ${project.bg} min-h-[220px] flex items-center justify-center p-8 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,_white_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
        {/* Placeholder for project screenshot */}
        <div className="w-full h-40 rounded-xl bg-[#1a1a1a]/50 border border-white/10 flex flex-col items-center justify-center gap-2">
        </div>
        <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-xl" />
      </div>

      {/* Text side */}
      <div className={`${isRight ? 'md:order-1' : 'md:order-2'} p-8 flex flex-col justify-center gap-4`}>
        <span
          className="text-xs font-semibold tracking-widest uppercase"
          style={{ color: project.accent }}
        >
          {project.tag}
        </span>
        <h3 className="text-xl lg:text-2xl font-bold text-white leading-snug">
          {project.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">{project.desc}</p>
        <button className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-200 group">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M2 6.5h9M6.5 2l4.5 4.5-4.5 4.5" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-black transition-colors"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

const Works = () => {
  const titleRef = useFadeIn();

  return (
    <section id="works" className="bg-[#0a0a0a] py-20 lg:py-28 vertical-lines relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div ref={titleRef} className="section-fade text-center mb-14">
          <p className="text-gray-500 text-sm mb-2 tracking-wider">Latest Works</p>
          <h2 className="text-3xl lg:text-4xl font-bold">
            Explore My Popular <span className="text-primary">Projects</span>
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="flex items-center gap-2 bg-primary text-black font-semibold text-sm px-7 py-3 rounded-full hover:bg-green-400 transition-all duration-200">
            Show More Projects
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Works;
