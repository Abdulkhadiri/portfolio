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
  <section id="skills" className="scroll-mt-32 space-y-12 py-24">
    <div className="space-y-4 text-center">
      <h2 className="font-black text-4xl tracking-tighter md:text-6xl">TECHNICAL ARSENAL</h2>
      <p className="mx-auto max-w-xl text-lg text-text-muted">
        A curated collection of technologies I use to build world-class enterprise systems.
      </p>
    </div>

    <div className="grid auto-rows-[120px] grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
      {SKILLS.map((skill: Skill) => (
        <Card
          key={skill.name}
          className={cn(
            'group relative flex flex-col justify-between overflow-hidden border-border-default p-6 transition-all duration-500 hover:border-blue-500/50',
            skill.size === 'large'
              ? 'col-span-2 row-span-2'
              : skill.size === 'medium'
                ? 'col-span-2 row-span-1'
                : 'col-span-1 row-span-1',
          )}
        >
          {/* Subtle Hover Glow */}
          <div className="absolute -right-10 -bottom-10 h-20 w-20 rounded-full bg-blue-600/10 blur-2xl transition-all group-hover:bg-blue-600/20" />

          <div
            className={cn(
              'flex items-center justify-center rounded-xl transition-transform duration-500 group-hover:scale-110',
              skill.size === 'large'
                ? 'h-16 w-16 bg-surface-elevated text-blue-500 dark:bg-zinc-800 dark:text-blue-400'
                : 'h-10 w-10 bg-surface text-text-secondary dark:bg-zinc-900 dark:text-zinc-400',
            )}
          >
            {skill.icon}
          </div>

          <div className="relative z-10">
            <div className={cn('font-black tracking-tight', skill.size === 'large' ? 'text-2xl' : 'text-sm')}>
              {skill.name}
            </div>
            <div className="font-bold text-[10px] text-text-muted uppercase tracking-widest">{skill.category}</div>
          </div>
        </Card>
      ))}
    </div>
  </section>
);
