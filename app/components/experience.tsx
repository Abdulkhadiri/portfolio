'use client';
import { Briefcase } from 'lucide-react';
import { EXPERIENCE } from './data';
import { Card } from '@/components/ui/card';

export const Experience = () => (
  <section id="experience" className="scroll-mt-24 space-y-12 py-16">
    <div className="space-y-5 text-center md:text-left">
      <span className="inline-block rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1 font-mono text-[11px] text-blue-500 uppercase tracking-[0.25em] dark:text-blue-400">
        Career Timeline
      </span>
      <h2 className="font-bold text-3xl tracking-tight md:text-4xl">Professional Path</h2>
    </div>

    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-blue-500/40 before:via-border-default before:to-transparent md:before:mx-auto md:before:translate-x-0">
      {EXPERIENCE.map((exp, i) => (
        <div
          key={`${exp.company}-${exp.period}`}
          className="group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse"
        >
          {/* Timeline Dot */}
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-blue-500/30 bg-background shadow-blue-500/5 shadow-lg transition-all group-hover:border-blue-500 group-hover:shadow-blue-500/20 md:order-1 md:group-even:translate-x-1/2 md:group-odd:-translate-x-1/2 ${i === 0 ? 'animate-glow-ring' : ''}`}
          >
            <Briefcase className="h-4 w-4 text-blue-500" />
          </div>

          {/* Card */}
          <Card className="card-shimmer gradient-border w-[calc(100%-4rem)] p-6 transition-all duration-300 group-hover:shadow-blue-500/5 group-hover:shadow-lg md:w-[calc(50%-2.5rem)]">
            <div className="mb-3 flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
              <span className="font-bold text-blue-500 dark:text-blue-400">{exp.role}</span>
              <time className="rounded-full bg-surface-elevated px-3 py-0.5 font-mono text-text-muted text-xs dark:bg-zinc-800/80">
                {exp.period}
              </time>
            </div>
            <div className="mb-3 font-semibold text-foreground text-sm">{exp.company}</div>
            <p className="text-sm text-text-secondary leading-relaxed">{exp.desc}</p>
          </Card>
        </div>
      ))}
    </div>
  </section>
);
