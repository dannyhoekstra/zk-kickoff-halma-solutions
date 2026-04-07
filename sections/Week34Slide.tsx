import React from 'react';
import { motion } from 'framer-motion';
import {
  Settings, Workflow, FileCode, GitBranch, BookOpen,
  Mail, Video, Route, Calendar, Target
} from 'lucide-react';

const leftItems = [
  { icon: Settings, text: 'Juiste velden aanmaken' },
  { icon: Workflow, text: 'Workflows en AI-calling analyse tool' },
  { icon: FileCode, text: 'Scripts instellen en testen' },
  { icon: GitBranch, text: 'Salespijplijn instellen' },
  { icon: BookOpen, text: 'Draaiboeken inrichten (verplichte vragenlijsten)' },
];

const rightItems = [
  { icon: Mail, text: 'Brochures en mailtemplates instellen' },
  { icon: Video, text: 'Persoonlijke salesvideo\'s instellen' },
  { icon: Route, text: 'Sales flows opzetten' },
  { icon: Calendar, text: 'Agenda\'s koppelen' },
  { icon: Target, text: 'KPI\'s voor sales bepalen' },
];

export const Week34Slide: React.FC = () => {
  return (
    <section className="h-screen w-screen snap-start relative overflow-hidden flex items-center justify-center bg-[#f8f5ff]">
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-400/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-brand-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <div className="text-center mb-8">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block bg-cyan-400/10 text-cyan-500 font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-3"
          >
            Week 3-4
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-black uppercase leading-tight mb-2 text-brand-purple"
          >
            Kraaiende{' '}
            <span className="text-brand-green">perfectie</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="text-gray-500 text-base max-w-xl mx-auto"
          >
            HubSpot volledig instellen en optimaliseren voor resultaten.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Left column */}
          <div className="space-y-2.5">
            {leftItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + index * 0.07 }}
                className="bg-white shadow-sm border border-gray-100 rounded-xl p-3.5 flex items-center gap-3 hover:border-cyan-400/30 transition-all"
              >
                <div className="w-8 h-8 bg-cyan-400/10 rounded-full flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-cyan-500" />
                </div>
                <p className="text-gray-700 text-sm font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Right column */}
          <div className="space-y-2.5">
            {rightItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + index * 0.07 }}
                className="bg-white shadow-sm border border-gray-100 rounded-xl p-3.5 flex items-center gap-3 hover:border-cyan-400/30 transition-all"
              >
                <div className="w-8 h-8 bg-cyan-400/10 rounded-full flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-cyan-500" />
                </div>
                <p className="text-gray-700 text-sm font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
