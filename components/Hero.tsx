
import React from 'react';

interface HeroProps {
  text: string;
}

const Hero: React.FC<HeroProps> = ({ text }) => {
  return (
    <section className="py-20 md:py-32 flex flex-col items-center justify-center text-center">
      <h1 className="editorial-font text-5xl md:text-7xl lg:text-8xl leading-tight max-w-5xl mb-12">
        {text}
      </h1>
      <div className="w-px h-24 bg-black/20 animate-bounce"></div>
    </section>
  );
};

export default Hero;
