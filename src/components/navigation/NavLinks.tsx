import React from 'react';

interface NavLink {
  href: string;
  label: string;
}

const links: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' }
];

interface NavLinksProps {
  mobile?: boolean;
}

export default function NavLinks({ mobile = false }: NavLinksProps) {
  const baseStyles = "relative font-medium transition-all duration-300";
  const desktopStyles = "text-gray-300 hover:text-white px-3 py-2";
  const mobileStyles = "text-gray-300 hover:text-white block px-3 py-2 text-base";
  
  const linkStyles = mobile ? mobileStyles : desktopStyles;

  return (
    <>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={`${baseStyles} ${linkStyles} group`}
        >
          {link.label}
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
        </a>
      ))}
    </>
  );
}