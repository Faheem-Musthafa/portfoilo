import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'SecureEncrypt',
    description: 'Advanced encryption tool developed during internship, featuring multiple encryption algorithms and secure key management.',
    tags: ['Python', 'Cryptography', 'GUI'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    github: '#',
    demo: '#',
  },
  {
    title: 'AutoPenTest',
    description: 'Automated penetration testing framework that streamlines security assessments and vulnerability scanning.',
    tags: ['Python', 'Bash', 'Security'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
    github: '#',
    demo: '#',
  },
  {
    title: 'NetworkGuardian',
    description: 'Real-time network monitoring tool with intrusion detection capabilities and automated response systems.',
    tags: ['Python', 'Networking', 'Security'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    github: '#',
    demo: '#',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-300 hover:text-green-500"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-gray-300 hover:text-green-500"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}