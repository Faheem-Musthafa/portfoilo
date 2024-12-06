import React, { useState } from 'react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Get in Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Let's Connect
            </h3>
            <p className="text-gray-400 mb-8">
              Whether you're interested in collaboration, have a security concern,
              or just want to chat about cybersecurity, I'd love to hear from you.
            </p>
            
            <div className="space-y-4">
              {[
                {
                  icon: <Linkedin className="w-6 h-6" />,
                  label: 'LinkedIn',
                  href: '#',
                },
                {
                  icon: <Github className="w-6 h-6" />,
                  label: 'GitHub',
                  href: '#',
                },
                {
                  icon: <Twitter className="w-6 h-6" />,
                  label: 'Twitter',
                  href: '#',
                },
                {
                  icon: <Mail className="w-6 h-6" />,
                  label: 'Email',
                  href: 'mailto:contact@example.com',
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex items-center text-gray-400 hover:text-green-500 transition-colors"
                >
                  {social.icon}
                  <span className="ml-4">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={4}
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-black py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}