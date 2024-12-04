import React from 'react';
import { Shield } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2 group">
      <Shield className="h-8 w-8 text-cyan-500 transform group-hover:rotate-12 transition-transform duration-300" />
      <span className="text-xl font-bold bg-gradient-to-r from-white to-cyan-500 bg-clip-text text-transparent">
        Faheem
      </span>
    </div>
  );
}