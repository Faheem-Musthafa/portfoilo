import React from 'react';
import { X } from 'lucide-react';
import NavLinks from './NavLinks';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      <div className="fixed right-0 top-0 h-full w-64 bg-gray-900/95 backdrop-blur-md shadow-xl">
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-300"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLinks mobile />
        </div>
      </div>
    </div>
  );
}