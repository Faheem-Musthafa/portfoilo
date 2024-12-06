import React from 'react';

const skills = {
  'Security Tools': [
    { name: 'Burp Suite', level: 90 },
    { name: 'Metasploit', level: 85 },
    { name: 'Wireshark', level: 80 },
    { name: 'Nmap', level: 95 },
  ],
  'Programming': [
    { name: 'Python', level: 90 },
    { name: 'Bash', level: 85 },
    { name: 'JavaScript', level: 75 },
    { name: 'C++', level: 70 },
  ],
  'Platforms': [
    { name: 'Hack The Box', level: 85 },
    { name: 'TryHackMe', level: 90 },
    { name: 'PicoCTF', level: 95 },
    { name: 'VulnHub', level: 80 },
  ],
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="space-y-6">
              <h3 className="text-xl font-semibold text-green-500 mb-4">
                {category}
              </h3>
              <div className="space-y-4">
                {items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-gray-300 mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}