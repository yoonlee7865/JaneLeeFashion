
import React from 'react';
import { Mail, Phone, Instagram, Linkedin } from 'lucide-react';

interface ContactProps {
  email: string;
}

const Contact: React.FC<ContactProps> = ({ email }) => {
  return (
    <section className="py-24 max-w-5xl mx-auto animate-in fade-in duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="text-[10px] uppercase tracking-[0.5em] mb-12 text-black/40">CONNECT</h2>
          <h3 className="editorial-font text-5xl md:text-7xl mb-12">Let's create something timeless.</h3>
          
          <div className="flex flex-col gap-8">
            <a 
              href={`mailto:${email}`}
              className="group inline-flex items-center gap-4 text-xl font-light border-b border-black/10 pb-2 hover:border-black transition-all"
            >
              <Mail className="w-5 h-5 opacity-40 group-hover:opacity-100" />
              {email}
            </a>
            <div className="flex flex-col gap-2 text-black/60">
              <div className="flex items-center gap-4">
                <Phone className="w-4 h-4 opacity-40" />
                <span className="text-xs tracking-widest uppercase">(+1) 912-210-9409</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-4 h-4 opacity-40" />
                <span className="text-xs tracking-widest uppercase">(+82) 010-2079-7865</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-black text-white p-12 lg:p-16">
          <h4 className="text-xs uppercase tracking-[0.3em] mb-8 opacity-60">Professional Channels</h4>
          <div className="flex flex-col gap-6">
            <a 
              href="https://www.instagram.com/yooonlee" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 text-lg hover:opacity-60 transition-opacity"
            >
              <Instagram className="w-5 h-5" /> Instagram
            </a>
            <a 
              href="https://www.linkedin.com/in/jane-lee-a8060339b" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 text-lg hover:opacity-60 transition-opacity"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
          </div>
          <div className="mt-12 pt-12 border-t border-white/10">
            <p className="text-[10px] uppercase tracking-widest opacity-40 leading-relaxed">
              Available for freelance collaborations and permanent creative roles globally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
