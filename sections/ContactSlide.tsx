import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Briefcase } from 'lucide-react';

const team = [
  {
    name: 'Erwin Dijkstra',
    role: 'Commercie - Strategie',
    phone: '06 38 40 86 84',
    bgClass: 'bg-[#5bd675]/15',
    textClass: 'text-[#5bd675]',
  },
  {
    name: 'Dennis Nijborg',
    role: 'Techniek',
    phone: '06 46 36 64 41',
    bgClass: 'bg-[#9981fc]/15',
    textClass: 'text-[#9981fc]',
  },
  {
    name: 'Danny Hoekstra',
    role: 'CRM',
    phone: '06 21 57 35 59',
    bgClass: 'bg-[#22d3ee]/15',
    textClass: 'text-[#22d3ee]',
  },
  {
    name: 'David Pantophlet',
    role: 'Dashboard',
    phone: '06 29 38 32 05',
    bgClass: 'bg-[#ff8afc]/15',
    textClass: 'text-[#ff8afc]',
  },
  {
    name: 'Migilio Tirtosentono',
    role: 'Commercie - Sales Trainingen',
    phone: '06 23 94 58 09',
    bgClass: 'bg-[#fbbf24]/15',
    textClass: 'text-[#fbbf24]',
  },
  {
    name: 'Hoger Hamo',
    role: 'Algemeen',
    phone: '050 234 2993',
    bgClass: 'bg-[#fb7185]/15',
    textClass: 'text-[#fb7185]',
  },
];

export const ContactSlide: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden flex items-center justify-center bg-brand-purple">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[700px] bg-brand-green/5 rounded-full blur-[160px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-green font-bold text-sm uppercase tracking-wider mb-3"
          >
            Jullie team
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-black uppercase leading-tight text-white"
          >
            Contact
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {team.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.08 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all text-center"
            >
              <div className={`w-12 h-12 ${person.bgClass} rounded-full flex items-center justify-center mx-auto mb-3`}>
                <Briefcase className={`w-5 h-5 ${person.textClass}`} />
              </div>
              <h3 className="text-white font-bold text-sm mb-1">{person.name}</h3>
              <p className="text-white/40 text-xs mb-3">{person.role}</p>
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-3 h-3 text-brand-green/70" />
                <span className="text-white/60 text-xs font-medium">{person.phone}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
