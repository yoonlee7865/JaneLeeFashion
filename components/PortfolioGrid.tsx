
import React from 'react';
import { PortfolioItem } from '../types';

interface PortfolioGridProps {
  items: PortfolioItem[];
  onSelect: (item: PortfolioItem) => void;
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ items, onSelect }) => {
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
        {items.map((item) => (
          <div 
            key={item.id} 
            onClick={() => onSelect(item)}
            className="group cursor-pointer aspect-square overflow-hidden bg-gray-100 relative"
          >
            <img 
              src={item.imageUrl} 
              alt={item.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
              <span className="text-xs text-white uppercase tracking-[0.3em] mb-2">{item.category}</span>
              <h3 className="text-white text-2xl editorial-font">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
      
      {items.length === 0 && (
        <div className="py-24 text-center">
          <p className="text-sm uppercase tracking-[0.3em] opacity-30 italic">No items found in the archive.</p>
        </div>
      )}
    </div>
  );
};

export default PortfolioGrid;
