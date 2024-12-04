import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import Logo from './navigation/Logo';
import NavLinks from './navigation/NavLinks';
import MobileMenu from './navigation/MobileMenu';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-gray-900/85 backdrop-blur-md shadow-lg py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Logo />
            
            <div className="hidden md:flex items-center">
              <div className={`
                relative px-4 py-2 rounded-full transition-all duration-500
                ${isScrolled ? 'bg-gray-800/50 backdrop-blur-sm' : 'bg-transparent'}
              `}>
                <NavLinks />
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(true)}
                className={`
                  p-2 rounded-full transition-colors duration-300
                  ${isScrolled 
                    ? 'text-gray-400 hover:text-white bg-gray-800/50' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }
                `}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <MobileMenu 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}