import React, { useState, useEffect } from 'react';
import { Code2, Menu, X, Sun, Moon } from 'lucide-react';
import { useScrollDirection } from '../hooks/useScrollDirection';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const scrollDirection = useScrollDirection();

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Blog', href: '#blog' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-md"></div>
      <nav className="container mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="flex items-center space-x-2 group"
            aria-label="Home"
          >
            <Code2 className="w-8 h-8 text-green-500 group-hover:animate-pulse" />
            <span className="text-xl font-bold text-white">FaheemCPTS</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group ${
                  activeSection === item.href.slice(1)
                    ? 'text-green-500'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform origin-left transition-transform duration-200 ${
                    activeSection === item.href.slice(1)
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                ></span>
              </a>
            ))}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="ml-4 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="container mx-auto px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  activeSection === item.href.slice(1)
                    ? 'text-green-500 bg-gray-800'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="w-full text-left px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            >
              <span className="flex items-center">
                {isDarkMode ? (
                  <>
                    <Sun className="w-5 h-5 mr-2" /> Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="w-5 h-5 mr-2" /> Dark Mode
                  </>
                )}
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}