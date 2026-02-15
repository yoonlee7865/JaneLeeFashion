
import React from 'react';
import { Settings } from 'lucide-react';

interface FooterProps {
  onAdminClick: () => void;
  email: string;
  siteTitle: string;
}

const Footer: React.FC<FooterProps> = ({ onAdminClick, email, siteTitle }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 md:px-12 lg:px-24 py-20 border-t border-black/5 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="flex flex-col gap-4">
          <span className="text-2xl font-bold tracking-[0.2em] uppercase">{siteTitle}</span>
          <p className="text-xs uppercase tracking-widest text-black/40">
            &copy; {currentYear} All Rights Reserved
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 text-xs uppercase tracking-[0.3em]">
          <a href="#" className="hover:opacity-40 transition-opacity">Terms</a>
          <a href="#" className="hover:opacity-40 transition-opacity">Privacy</a>
          <a 
            href="https://www.linkedin.com/in/jane-lee-a8060339b" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:opacity-40 transition-opacity"
          >
            LinkedIn
          </a>
          <a 
            href="https://www.instagram.com/yooonlee" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:opacity-40 transition-opacity"
          >
            Instagram
          </a>
        </div>

        <button 
          onClick={onAdminClick}
          className="group flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-black/20 hover:text-black transition-colors"
        >
          <Settings className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          Admin
        </button>
      </div>
    </footer>
  );
};

export default Footer;
