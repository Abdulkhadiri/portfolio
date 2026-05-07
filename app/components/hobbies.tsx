'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { CheckCircle, Target, Monitor, Zap } from 'lucide-react';

interface Hobby {
  name: string;
  description: string;
  icon: React.ReactNode;
}

export const HOBBIES: Hobby[] = [
  {
    name: 'Chess',
    description: 'Strategic thinking and pattern recognition through competitive play',
    icon: React.createElement(CheckCircle, { className: 'w-5 h-5' }),
  },
  {
    name: 'Carroms',
    description: 'Precision board game that enhances focus and tactical planning',
    icon: React.createElement(Target, { className: 'w-5 h-5' }),
  },
  {
    name: 'Gaming',
    description: 'Interactive entertainment that improves reflexes and problem-solving',
    icon: React.createElement(Monitor, { className: 'w-5 h-5' }),
  },
  {
    name: 'Tech Learning',
    description: 'Continuous exploration of emerging technologies and frameworks',
    icon: React.createElement(Zap, { className: 'w-5 h-5' }),
  },
];

export const Hobbies = () => (
  <section id="hobbies" className="scroll-mt-32 space-y-14 py-16">
    <div className="space-y-5 text-center">
      <div className="flex justify-center">
        <span className="rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1 font-mono text-[11px] text-blue-500 uppercase tracking-[0.25em] dark:text-blue-400">
          Beyond Code
        </span>
      </div>
      <h2 className="font-black text-4xl tracking-tighter md:text-6xl">PERSONAL PURSUITS</h2>
      <p className="mx-auto max-w-xl text-base text-text-muted leading-relaxed">
        Activities that sharpen my mind, build discipline, and fuel my curiosity for continuous growth.
      </p>
    </div>

    <div className="grid auto-rows-[140px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {HOBBIES.map((hobby) => (
        <Card
          key={hobby.name}
          className={cn(
            'card-shimmer gradient-border group relative flex flex-col justify-between overflow-hidden border-border-default p-5 transition-all duration-500 hover:border-blue-500/40 hover:shadow-blue-500/5 hover:shadow-lg',
          )}
        >
          {/* Subtle Hover Glow */}
          <div className="absolute -right-10 -bottom-10 h-24 w-24 rounded-full bg-blue-600/0 blur-2xl transition-all duration-500 group-hover:bg-blue-600/15" />

          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg dark:bg-blue-500/10 dark:text-blue-400">
            {hobby.icon}
          </div>

          <div className="relative z-10 text-center">
            <div className="font-black text-sm tracking-tight">{hobby.name}</div>
            <div className="mt-1 font-semibold text-[10px] text-text-muted uppercase tracking-widest">
              {hobby.description}
            </div>
          </div>
        </Card>
      ))}
    </div>
  </section>
);
