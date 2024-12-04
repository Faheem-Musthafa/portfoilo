import React from 'react';
import { Shield, Lock, Server } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Securing Your Digital Future
              <span className="text-cyan-500">.</span>
            </h1>
            <p className="text-xl text-gray-400">
              Cybersecurity expert specializing in penetration testing, security auditing, and digital forensics.
            </p>
            <div className="flex space-x-4">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300">
                View Projects
              </button>
              <button className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-lg font-medium transition duration-300">
                Contact Me
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20"></div>
            <div className="relative grid grid-cols-2 gap-4">
              <div className="bg-gray-800 p-6 rounded-lg">
                <Shield className="h-8 w-8 text-cyan-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Security Auditing</h3>
                <p className="text-gray-400">Comprehensive system analysis and vulnerability assessment</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg mt-8">
                <Lock className="h-8 w-8 text-cyan-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Penetration Testing</h3>
                <p className="text-gray-400">Identifying and exploiting security weaknesses</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <Server className="h-8 w-8 text-cyan-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Network Security</h3>
                <p className="text-gray-400">Protecting infrastructure from cyber threats</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}