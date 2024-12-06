import React from 'react';
import { Terminal, Shield, Lock } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black pt-16">
      <div className="container mx-auto px-6 py-16 relative">
        <div className="absolute inset-0 grid grid-cols-8 gap-8 opacity-5">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="text-green-500 font-mono text-xs">
              {Math.random().toString(2).slice(2, 10)}
            </div>
          ))}
        </div>
        
        <div className="relative z-10 text-center">
          <div className="flex justify-center space-x-4 mb-8">
            <Terminal className="w-12 h-12 text-green-500 animate-pulse" />
            <Shield className="w-12 h-12 text-green-500" />
            <Lock className="w-12 h-12 text-green-500 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Ethical Hacker & <br />
            <span className="text-green-500">Security Researcher</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Exploring the depths of cybersecurity through ethical hacking, 
            automation, and continuous learning. Committed to making the 
            digital world a safer place.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#contact"
              className="bg-green-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="border border-green-500 text-green-500 px-8 py-3 rounded-lg font-semibold hover:bg-green-500 hover:text-black transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}