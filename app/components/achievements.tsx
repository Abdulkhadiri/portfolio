'use client';
import { Award, Trophy, Star, Medal } from 'lucide-react';
import { ACHIEVEMENTS } from './data';
import { Card } from '@/components/ui/card';

const ACHIEVEMENT_ICONS = [Trophy, Award, Star, Medal];

export const Achievements = () => (
  <section id="achievements" className="scroll-mt-24 space-y-12 py-16">
    <div className="space-y-5 text-center md:text-left">
      <span className="inline-block rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1 font-mono text-[11px] text-blue-500 uppercase tracking-[0.25em] dark:text-blue-400">
        Recognition
      </span>
      <h2 className="font-bold text-3xl tracking-tight md:text-4xl">Achievements &amp; Awards</h2>
    </div>

    <div className="grid gap-4 sm:grid-cols-2">
      {ACHIEVEMENTS.map((achievement, i) => {
        const Icon = ACHIEVEMENT_ICONS[i % ACHIEVEMENT_ICONS.length];
        return (
          <Card
            key={`${achievement.title}-${achievement.year}`}
            className="card-shimmer gradient-border group relative overflow-hidden p-6 transition-all duration-300 hover:shadow-blue-500/5 hover:shadow-lg"
          >
            {/* Accent corner glow */}
            <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-blue-500/0 blur-3xl transition-all duration-500 group-hover:bg-blue-500/10" />

            <div className="relative space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 transition-transform duration-300 group-hover:scale-110 dark:text-blue-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-base leading-tight">{achievement.title}</h3>
                    <p className="font-medium text-text-muted text-xs">{achievement.organization}</p>
                  </div>
                </div>
                <time className="shrink-0 rounded-full bg-surface-elevated px-3 py-0.5 font-mono text-text-muted text-xs dark:bg-zinc-800/80">
                  {achievement.year}
                </time>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">{achievement.description}</p>
            </div>
          </Card>
        );
      })}
    </div>
  </section>
);
