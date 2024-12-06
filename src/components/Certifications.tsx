import React from 'react';
import { Award, BookOpen } from 'lucide-react';

const certifications = [
  {
    name: 'eJPT (In Progress)',
    organization: 'eLearnSecurity',
    description: 'Junior Penetration Tester certification focusing on practical penetration testing skills.',
    status: 'in-progress',
  },
  {
    name: 'OSCP (Planned)',
    organization: 'Offensive Security',
    description: 'Advanced penetration testing certification with hands-on examination.',
    status: 'planned',
  },
  {
    name: 'CPTS (Planned)',
    organization: 'Hack The Box',
    description: 'Certified Penetration Testing Specialist certification demonstrating advanced penetration testing abilities.',
    status: 'planned',
  },
  {
    name: 'Bug Bounty Hunter',
    organization: 'HackerOne',
    description: 'Active participation in bug bounty programs with successful vulnerability reports.',
    status: 'completed',
  },
  {
    name: 'CPT',
    organization: 'InfoSec Institute',
    description: 'Certified Penetration Tester certification validating practical security testing skills.',
    status: 'completed',
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Certifications & Learning Path
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="bg-gray-800 rounded-lg p-6 relative overflow-hidden group hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {cert.organization}
                    </p>
                    <p className="text-gray-300">{cert.description}</p>
                  </div>
                  <Award className="w-8 h-8 text-green-500" />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-700">
                  <div
                    className={`h-full ${
                      cert.status === 'completed'
                        ? 'bg-green-500 w-full'
                        : cert.status === 'in-progress'
                        ? 'bg-yellow-500 w-1/2'
                        : 'bg-gray-600 w-0'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-800 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <BookOpen className="w-8 h-8 text-green-500 mr-4" />
              <h3 className="text-xl font-semibold text-white">
                Learning Resources
              </h3>
            </div>
            <div className="space-y-4">
              {[
                'Hack The Box Academy',
                'TryHackMe Learning Paths',
                'PicoCTF Challenges',
                'PortSwigger Web Security Academy',
                'OWASP Top 10 Project',
                'FreeCodeCamp Courses',
              ].map((resource) => (
                <div
                  key={resource}
                  className="flex items-center text-gray-300 hover:text-green-500 transition-colors"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                  {resource}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}