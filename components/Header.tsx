
import React from 'react';

interface HeaderProps {
  siteTitle: string;
  currentSection: 'main' | 'work' | 'about' | 'contact';
  onNavigate: (section: 'main' | 'work' | 'about' | 'contact') => void;
}

const Header: React.FC<HeaderProps> = ({ siteTitle, currentSection, onNavigate }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 border-b border-black/5">
      <div className="flex justify-between items-center py-8 px-6 md:px-12 lg:px-24">
        <button 
          onClick={() => onNavigate('main')}
          className="text-2xl font-bold tracking-[0.2em] hover:opacity-70 transition-opacity uppercase"
        >
          {siteTitle}
        </button>
        
        <nav className="flex gap-12 text-base font-medium uppercase tracking-widest">
          {['work', 'about', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => onNavigate(section as any)}
              className={`hover:opacity-50 transition-all pb-1 border-b-2 ${
                currentSection === section ? 'border-black' : 'border-transparent'
              }`}
            >
              {section}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;