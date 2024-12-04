import React from 'react';
import { Shield, Lock, Server, Search, Database, Code } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security Auditing",
      description: "Comprehensive security assessments and vulnerability scanning to identify potential threats and weaknesses in your systems."
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Penetration Testing",
      description: "Advanced ethical hacking techniques to simulate real-world cyber attacks and strengthen your defenses."
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Network Security",
      description: "Robust network infrastructure protection using cutting-edge security protocols and monitoring systems."
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Digital Forensics",
      description: "Expert investigation and analysis of security incidents to prevent future breaches and ensure compliance."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Protection",
      description: "Implementation of comprehensive data security measures to safeguard sensitive information and maintain privacy."
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Secure Development",
      description: "Security-first approach to software development, ensuring protection at every stage of the development lifecycle."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Security Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive cybersecurity solutions to protect your digital assets
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-gray-800 p-6 rounded-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated border */}
              <div className="absolute inset-0 border border-cyan-500/0 group-hover:border-cyan-500/50 rounded-lg transition-all duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-cyan-500 mb-4 transform transition-transform duration-500 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
              
              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 h-1 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}