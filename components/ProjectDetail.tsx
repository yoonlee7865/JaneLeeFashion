
import React from 'react';
import { PortfolioItem } from '../types';
import { ArrowLeft } from 'lucide-react';

interface ProjectDetailProps {
  item: PortfolioItem;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ item, onBack }) => {
  return (
    <div className="max-w-7xl mx-auto py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <button 
        onClick={onBack}
        className="flex items-center gap-3 text-xs uppercase tracking-widest mb-16 hover:opacity-50 transition-opacity"
      >
        <ArrowLeft className="w-5 h-5" /> Back to Archive
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        <div className="lg:col-span-8">
          <div className="bg-gray-50 overflow-hidden shadow-2xl">
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-center">
          <span className="text-sm uppercase tracking-[0.5em] text-black/40 mb-6">
            {item.category}
          </span>
          <h2 className="editorial-font text-5xl md:text-7xl mb-10 leading-tight">
            {item.title}
          </h2>
          <div className="w-16 h-px bg-black mb-10"></div>
          <p className="text-xl leading-relaxed text-black/70 font-light mb-16">
            {item.description}
          </p>
          
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest font-bold">Project Details</h4>
            <div className="flex justify-between border-b border-black/5 pb-3">
              <span className="text-xs uppercase tracking-widest opacity-40">Client</span>
              <span className="text-sm">Archive Studio</span>
            </div>
            <div className="flex justify-between border-b border-black/5 pb-3">
              <span className="text-xs uppercase tracking-widest opacity-40">Year</span>
              <span className="text-sm">2024</span>
            </div>
            <div className="flex justify-between border-b border-black/5 pb-3">
              <span className="text-xs uppercase tracking-widest opacity-40">Role</span>
              <span className="text-sm">Art Direction</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
