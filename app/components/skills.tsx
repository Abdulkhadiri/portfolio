'use client';
import { Card } from '@/components/ui/card';
import { SKILLS } from './data';
import { cn } from '@/lib/utils';

interface Skill {
  name: string;
  category: string;
  icon: React.ReactNode;
  size: string;
}

export const Skills = () => (
  <section id="skills" className="scroll-mt-32 space-y-14 py-16">
    <div className="space-y-5 text-center">
      <div className="flex justify-center">
        <span className="rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1 font-mono text-[11px] text-blue-500 uppercase tracking-[0.25em] dark:text-blue-400">
          What I Work With
        </span>
      </div>
      <h2 className="font-black text-4xl tracking-tighter md:text-6xl">TECHNICAL ARSENAL</h2>
      <p className="mx-auto max-w-xl text-base text-text-muted leading-relaxed">
        A curated collection of technologies I use to build world-class enterprise systems.
      </p>
    </div>

    <div className="grid auto-rows-[120px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 lg:grid-cols-6">
      {SKILLS.map((skill: Skill) => (
        <Card
          key={skill.name}
          className={cn(
            'card-shimmer gradient-border group relative flex flex-col justify-between overflow-hidden border-border-default p-5 transition-all duration-500 hover:border-blue-500/40 hover:shadow-blue-500/5 hover:shadow-lg',
            skill.size === 'large'
              ? 'col-span-2 row-span-2'
              : skill.size === 'medium'
                ? 'col-span-2 row-span-1'
                : 'col-span-1 row-span-1',
          )}
        >
          {/* Subtle Hover Glow */}
          <div className="absolute -right-10 -bottom-10 h-24 w-24 rounded-full bg-blue-600/0 blur-2xl transition-all duration-500 group-hover:bg-blue-600/15" />

          <div
            className={cn(
              'flex items-center justify-center rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg',
              skill.size === 'large'
                ? 'h-14 w-14 bg-blue-500/10 text-blue-500 dark:bg-blue-500/10 dark:text-blue-400'
                : 'h-9 w-9 bg-surface-elevated text-text-secondary dark:bg-zinc-800/80 dark:text-zinc-400',
            )}
          >
            {skill.icon}
          </div>

          <div className="relative z-10">
            <div className={cn('font-black tracking-tight', skill.size === 'large' ? 'text-2xl' : 'text-sm')}>
              {skill.name}
            </div>
            <div className="font-semibold text-[10px] text-text-muted uppercase tracking-widest">{skill.category}</div>
          </div>
        </Card>
      ))}
    </div>
  </section>
);
