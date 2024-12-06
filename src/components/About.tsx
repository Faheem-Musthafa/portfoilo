import React from 'react';
import { Code2, Network, Shield, Terminal } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              As a passionate cybersecurity enthusiast, I've dedicated myself to mastering
              the art of ethical hacking and security research. My journey began with
              a fascination for understanding how systems work, and evolved into a
              mission to help organizations protect their digital assets.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Currently pursuing advanced certifications like eJPT and OSCP, I combine
              theoretical knowledge with practical experience gained through platforms
              like Hack The Box and TryHackMe. My approach integrates programming,
              networking, and security principles to create comprehensive security
              solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: <Shield className="w-8 h-8 text-green-500" />,
                title: 'Security First',
                description: 'Dedicated to ethical hacking and responsible disclosure',
              },
              {
                icon: <Code2 className="w-8 h-8 text-green-500" />,
                title: 'Automation',
                description: 'Creating tools to streamline security processes',
              },
              {
                icon: <Network className="w-8 h-8 text-green-500" />,
                title: 'Networking',
                description: 'Deep understanding of network protocols and security',
              },
              {
                icon: <Terminal className="w-8 h-8 text-green-500" />,
                title: 'Development',
                description: 'Proficient in Python, Bash, and security tools',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}