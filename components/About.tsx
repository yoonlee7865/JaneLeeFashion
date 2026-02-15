
import React from 'react';

interface AboutProps {
  text: string;
}

const About: React.FC<AboutProps> = ({ text }) => {
  return (
    <section className="max-w-6xl mx-auto py-12 md:py-24 fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Left Column: Identity & Contact */}
        <div className="lg:col-span-5 space-y-12">
          <div className="pt-4">
            <h1 className="editorial-font text-6xl md:text-8xl leading-tight mb-12">Jane <br />Jeongyoon Lee</h1>
            <div className="space-y-8 pt-10 border-t border-black/10">
              <div className="space-y-6 text-sm uppercase tracking-[0.2em] text-black/60">
                <div className="space-y-3">
                  <p className="text-black font-bold text-base">Contact</p>
                  <p className="hover:text-black transition-colors text-base normal-case tracking-normal">yoonlee7865@gmail.com</p>
                  <p className="text-base tracking-widest">(+1) 912-210-9409</p>
                  <p className="text-base tracking-widest">(+82) 010-2079-7865</p>
                </div>
                <div className="space-y-3 pt-6">
                  <p className="text-black font-bold text-base">Location</p>
                  <p className="text-base">Savannah, GA</p>
                  <p className="text-base">Busan, KR</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Professional Resume */}
        <div className="lg:col-span-7 space-y-20">
          
          {/* Education */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] mb-10 border-b border-black pb-4 text-black/40">Education</h2>
            <div className="space-y-12">
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="editorial-font text-3xl md:text-4xl">Savannah College of Art and Design</h3>
                  <span className="text-sm tracking-widest opacity-40">MFA</span>
                </div>
                <p className="text-sm uppercase tracking-widest text-black/60 italic font-medium">Fashion</p>
              </div>
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="editorial-font text-3xl md:text-4xl">Pukyong National University</h3>
                  <span className="text-sm tracking-widest opacity-40">BA</span>
                </div>
                <p className="text-sm uppercase tracking-widest text-black/60 italic font-medium">Fashion Design</p>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] mb-10 border-b border-black pb-4 text-black/40">Professional Experience</h2>
            <div className="space-y-20">
              <ResumeItem 
                title="Loro Piana"
                role="Sales Assistant"
                date="2025.04 — 2025.08"
                points={[
                  "Luxury service delivery and high-end client management",
                  "Seasonal trend integration and brand storytelling",
                  "Cross-functional collaboration to exceed sales objectives"
                ]}
              />
              <ResumeItem 
                title="Sejung Corporation"
                role="Fashion Designer"
                date="2023.10 — 2024.02"
                points={[
                  "Concept development through to final product creation",
                  "Fashion show preparation and seasonal collection research",
                  "Trend analysis and material sourcing for design prototypes",
                  "Expert utilization of Adobe Creative Suite for presentations"
                ]}
              />
              <ResumeItem 
                title="Decoy"
                role="Business Owner"
                date="2022.08 — 2025.06"
                points={[
                  "Inventory management and supplier relationship coordination",
                  "Strategic pricing models based on cost-profit analysis",
                  "End-to-end customer inquiry and feedback resolution"
                ]}
              />
              <ResumeItem 
                title="Zara"
                role="Operation & Sales Assistant"
                date="2021.12 — 2023.02"
                points={[
                  "Visual merchandising aligned with global seasonal trends",
                  "Inventory optimization based on real-time sales analytics"
                ]}
              />
            </div>
          </section>

          {/* Skills & Others */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
            <div className="space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-[0.4em] border-b border-black/10 pb-2 text-black/40">Technical Skills</h2>
              <div className="flex flex-wrap gap-3">
                {['Adobe Photoshop', 'Adobe Illustrator', 'Creative Suite', 'Visual Merchandising'].map(skill => (
                  <span key={skill} className="text-xs uppercase tracking-[0.2em] border border-black/10 px-5 py-3 bg-gray-50">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-[0.4em] border-b border-black/10 pb-2 text-black/40">Languages</h2>
              <div className="space-y-4">
                <p className="text-base flex justify-between">
                  <span className="font-bold tracking-widest uppercase">KOREAN</span>
                  <span className="opacity-40 italic">Native</span>
                </p>
                <p className="text-base flex justify-between">
                  <span className="font-bold tracking-widest uppercase">ENGLISH</span>
                  <span className="opacity-40 italic">IELTS 7.0 / Intermediate</span>
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </section>
  );
};

interface ResumeItemProps {
  title: string;
  role: string;
  date: string;
  points: string[];
}

const ResumeItem: React.FC<ResumeItemProps> = ({ title, role, date, points }) => (
  <div className="space-y-6 group">
    <div className="flex justify-between items-baseline">
      <h3 className="editorial-font text-4xl md:text-5xl group-hover:pl-4 transition-all duration-300">{title}</h3>
      <span className="text-sm tracking-[0.2em] opacity-40 font-medium">{date}</span>
    </div>
    <p className="text-sm uppercase tracking-[0.2em] font-bold text-black/90">{role}</p>
    <ul className="space-y-4">
      {points.map((point, idx) => (
        <li key={idx} className="flex gap-4 text-base leading-relaxed text-black/60 font-light">
          <span className="mt-3 w-2 h-px bg-black/30 shrink-0"></span>
          {point}
        </li>
      ))}
    </ul>
  </div>
);

export default About;