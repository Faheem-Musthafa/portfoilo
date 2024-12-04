import React from 'react';
import { Award, CheckCircle, Calendar } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: "eJPT",
      fullName: "eLearnSecurity Junior Penetration Tester",
      issuer: "eLearnSecurity",
      date: "2023",
      skills: [
        "Network Security",
        "Web Application Security",
        "Host Security",
        "Basic Exploitation"
      ],
      image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "CPTS",
      fullName: "Certified Penetration Testing Specialist",
      issuer: "HackTheBox Academy",
      date: "2023",
      skills: [
        "Advanced Penetration Testing",
        "Active Directory Attacks",
        "Web Exploitation",
        "Advanced Network Security"
      ],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional Certifications
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Industry-recognized certifications validating expertise in cybersecurity and penetration testing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-xl hover:transform hover:scale-105 transition duration-300"
            >
              <div className="relative h-48">
                <div className="absolute inset-0">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center space-x-2">
                    <Award className="h-6 w-6 text-cyan-500" />
                    <h3 className="text-2xl font-bold text-white">{cert.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-1">{cert.fullName}</h4>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h5 className="text-sm font-semibold text-gray-300">Key Competencies:</h5>
                  <div className="grid grid-cols-2 gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle className="h-4 w-4 text-cyan-500" />
                        <span className="text-sm text-gray-400">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <button className="w-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-500 px-4 py-2 rounded-lg font-medium transition duration-300">
                    Verify Credential
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}