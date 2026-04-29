'use client';
import { Briefcase } from 'lucide-react';
import { EXPERIENCE } from './data';
import { Card } from '@/components/ui/card';

export const Experience = () => (
  <section id="experience" className="scroll-mt-24 space-y-10 py-16">
    <h2 className="text-center font-bold text-3xl tracking-tight md:text-left">Professional Path</h2>
    <div className="relative space-y-6 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-linear-to-b before:from-transparent before:via-border-default before:to-transparent md:before:mx-auto md:before:translate-x-0">
      {EXPERIENCE.map((exp) => (
        <div
          key={crypto.randomUUID()}
          className="group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-default bg-background text-foreground shadow md:order-1 md:group-even:translate-x-1/2 md:group-odd:-translate-x-1/2">
            <Briefcase className="h-4 w-4" />
          </div>
          <Card className="w-[calc(100%-4rem)] p-6 transition-colors group-hover:border-border-default md:w-[calc(50%-2.5rem)]">
            <div className="mb-2 flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
              <span className="font-bold text-blue-500">{exp.role}</span>
              <time className="font-mono text-text-muted text-xs">{exp.period}</time>
            </div>
            <div className="mb-2 font-semibold text-sm">{exp.company}</div>
            <p className="text-sm text-text-secondary leading-relaxed">{exp.desc}</p>
          </Card>
        </div>
      ))}
    </div>
  </section>
);
